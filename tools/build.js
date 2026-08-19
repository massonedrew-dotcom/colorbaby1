/* ============================================================================
 *  Color Baby House — сборка сайта
 *
 *  Зачем: раньше страница тянула @babel/standalone (3 МБ!) и превращала JSX в
 *  JavaScript прямо в браузере посетителя. Это самый тяжёлый файл на сайте и
 *  прямая потеря в Core Web Vitals, а значит и в ранжировании.
 *  Теперь то же самое делается один раз здесь, а браузер получает готовый JS.
 *
 *  Как запускать (из корня сайта):
 *      node tools/build.js
 *
 *  Когда запускать: после любой правки *.jsx. Забыли — на сайте останется
 *  прежняя версия, потому что браузер грузит из ui_kits/website/dist/.
 *
 *  Зависимостей нет: Babel берётся из локального vendor/babel.min.js,
 *  npm install не нужен.
 * ========================================================================== */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'ui_kits', 'website');
const OUT = path.join(SRC, 'dist');

const Babel = require(path.join(ROOT, 'vendor', 'babel.min.js'));

/* Порядок важен: файлы кладут свои компоненты в window, а App.jsx их оттуда
   забирает. Common должен быть первым, App — последним. */
const FILES = [
  'Common.jsx',
  'Header.jsx',
  'Hero.jsx',
  'Marquee.jsx',
  'Programs.jsx',
  'Banner.jsx',
  'Care.jsx',
  'DaySchedule.jsx',
  'Pricing.jsx',
  'Summer.jsx',
  'Testimonials.jsx',
  'Enroll.jsx',
  'Faq.jsx',
  'Contacts.jsx',
  'Footer.jsx',
  'QuickApply.jsx',
  'Widgets.jsx',
  'App.jsx',
];

fs.mkdirSync(OUT, { recursive: true });

let total = 0;
let failed = 0;

for (const file of FILES) {
  const from = path.join(SRC, file);
  if (!fs.existsSync(from)) {
    console.error(`  ✗ ${file} — файл не найден`);
    failed++;
    continue;
  }
  const code = fs.readFileSync(from, 'utf8');
  try {
    const out = Babel.transform(code, {
      presets: ['react'],
      filename: file,
      compact: false,
      comments: false,
    }).code;
    const to = path.join(OUT, file.replace(/\.jsx$/, '.js'));
    fs.writeFileSync(to, out, 'utf8');
    total += Buffer.byteLength(out);
    console.log(`  ✓ ${file} → dist/${path.basename(to)}  (${(Buffer.byteLength(out) / 1024).toFixed(1)} КБ)`);
  } catch (err) {
    console.error(`  ✗ ${file} — ошибка компиляции:\n    ${err.message}`);
    failed++;
  }
}

console.log('');
if (failed) {
  console.error(`Собрано с ошибками: ${failed} файл(ов) не скомпилировались.`);
  process.exit(1);
}
console.log(`Скомпилировано: ${FILES.length} файлов, ${(total / 1024).toFixed(1)} КБ в ui_kits/website/dist/`);

/* ===========================================================================
 *  Пререндер: сохраняем готовый HTML страницы прямо в index.html
 *
 *  Зачем. Сайт собирается в браузере: в HTML лежит пустой <div id="root">, а
 *  весь текст появляется после выполнения JavaScript. Google так умеет,
 *  Яндекс — плохо, и страница для него выглядит пустой. Поэтому один раз при
 *  сборке мы отрисовываем то же самое приложение здесь, в Node, и кладём
 *  результат в HTML между метками <!--prerender-->…<!--/prerender-->.
 *
 *  Посетитель этого не замечает: React при запуске перерисовывает страницу
 *  заново — но робот и человек с отключённым JS видят полный текст сразу.
 *
 *  Браузер для этого не нужен: React умеет отрисовывать в строку
 *  (renderToStaticMarkup), а нужные ему window/document мы подменяем заглушками.
 * ========================================================================= */
const vm = require('vm');

function prerender() {
  /* Минимальные заглушки браузерного окружения. Компоненты при отрисовке в
     строку до настоящего DOM не добираются: обработчики событий и useEffect
     на сервере не выполняются. Нужно ровно то, что читается на этапе загрузки
     файлов и при построении разметки. */
  const noop = () => {};
  const el = () => ({
    setAttribute: noop, appendChild: noop, style: { setProperty: noop },
    classList: { add: noop, toggle: noop }, textContent: '', dataset: {},
  });
  const documentStub = {
    /* Пререндерим главную — она лежит в корне, поэтому база путей пустая */
    documentElement: { getAttribute: () => '' },
    head: { appendChild: noop },
    body: { appendChild: noop },
    createElement: el,
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: noop,
    scripts: [],
  };
  const sandbox = {
    console,
    setTimeout, clearTimeout, setInterval, clearInterval,
    document: documentStub,
    navigator: { userAgent: 'node' },
    location: { pathname: '/', search: '', href: 'https://colorbabyhouse.uz/' },
    localStorage: { getItem: () => null, setItem: noop },
    matchMedia: () => ({ matches: false, addEventListener: noop }),
    requestAnimationFrame: noop,
    IntersectionObserver: function () { return { observe: noop, unobserve: noop }; },
    MutationObserver: function () { return { observe: noop }; },
    addEventListener: noop, removeEventListener: noop,
    fetch: () => Promise.resolve({ ok: false }),
    Date, Math, JSON, String, Number, Boolean, Array, Object, Error, RegExp, Promise,
    encodeURIComponent, decodeURIComponent,
    /* Нужны сборке react-dom-server: она рассчитана на браузер и ждёт эти
       глобальные объекты. В Node они есть, просто не попадают в песочницу сами. */
    TextEncoder, TextDecoder, Uint8Array, ArrayBuffer, Map, Set, WeakMap, WeakSet,
    queueMicrotask, AbortController, Symbol, Reflect, Proxy, Function, Intl, isNaN, parseInt, parseFloat,
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);

  /* React грузим тем же UMD-файлом, что и сайт, но внутрь песочницы: там нет
     require и module, поэтому сборка регистрирует себя как глобальную —
     ровно как в браузере. Отдельный пакет из npm ставить не нужно. */
  const scripts = [
    path.join(ROOT, 'vendor', 'react.production.min.js'),
    /* Именно legacy-сборка: в ней есть синхронный renderToStaticMarkup,
       а в обычной — только потоковый рендер, который здесь ни к чему. */
    path.join(ROOT, 'vendor', 'react-dom-server-legacy.browser.production.min.js'),
    path.join(ROOT, 'site.config.js'),
    path.join(ROOT, 'ui_kits', 'website', 'faq.data.js'),
    path.join(ROOT, '_ds_bundle.js'),
    ...FILES.map((f) => path.join(OUT, f.replace(/\.jsx$/, '.js'))),
  ];
  for (const file of scripts) {
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.basename(file) });
  }

  let html = sandbox.ReactDOMServer.renderToStaticMarkup(
    sandbox.React.createElement(sandbox.window.App)
  );

  /* Секции появляются по мере прокрутки: до этого CSS держит их прозрачными.
     В статичной копии показываем их сразу — иначе робот увидит текст, который
     по стилям невидим, а это поисковики не любят. */
  html = html.replace(
    /class="((?:[^"]*\s)?cs-(?:reveal|reveal-left|reveal-right|reveal-zoom|stagger)(?:\s[^"]*)?)"/g,
    'class="$1 is-visible"'
  );

  return html;
}

function injectInto(file, html) {
  const full = path.join(ROOT, file);
  const src = fs.readFileSync(full, 'utf8');
  const re = /(<!--prerender-->)[\s\S]*?(<!--\/prerender-->)/;
  if (!re.test(src)) {
    console.warn(`  ! ${file}: не найдены метки <!--prerender-->…<!--/prerender-->, пропускаю`);
    return 0;
  }
  fs.writeFileSync(full, src.replace(re, `$1${html}$2`), 'utf8');
  return Buffer.byteLength(html);
}

try {
  const html = prerender();
  const size = injectInto('index.html', html);
  if (size) {
    console.log(`Пререндер: ${(size / 1024).toFixed(1)} КБ разметки записано в index.html`);
  }
} catch (err) {
  console.error('Пререндер не удался (сайт продолжит работать, но робот увидит пустую страницу):');
  console.error('  ' + err.message);
  process.exitCode = 1;
}

console.log('');
console.log('Готово. Выкладывайте вместе с сайтом: index.html, ui_kits/website/dist/, vendor/');
