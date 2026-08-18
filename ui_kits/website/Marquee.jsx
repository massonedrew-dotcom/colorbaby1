/* Color Baby House — бегущая строка с направлениями занятий.
   Дорожка содержит две одинаковые копии списка: CSS сдвигает её ровно
   на половину ширины, поэтому цикл получается бесшовным (см. motion.css).
   Полоса чисто декоративная и дублирует секцию «Занятия» — скрываем её
   от скринридеров, чтобы список не читался дважды. */
function Marquee() {
  const items = [
    'Английский язык', 'Танцы', 'Шахматы', 'Робототехника', 'Рисование',
    'Тхэквондо', 'Гимнастика', 'ЛФК', 'Актёрское мастерство', 'Логопед-дефектолог',
    'Мастер-классы', 'Подготовка к школе', 'Развивающие игры',
  ];

  const row = (copy) => (
    <span className="cs-marquee-row" key={copy}>
      {items.map((t) => (
        <span className="cs-marquee-item" key={copy + t}>{t}</span>
      ))}
    </span>
  );

  return (
    <div className="cs-marquee" aria-hidden="true">
      <div className="cs-marquee-track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
