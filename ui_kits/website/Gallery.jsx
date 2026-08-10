/* Color Baby House — Галерея занятий (реальные фото) */
function Gallery() {
  const { SectionHeading } = window.DesignSystem_52b7c1;
  const { imgProps } = window;

  // ← Фото лежат в assets/photos. alt — описание для доступности/SEO.
  const photos = [
    { src: 'assets/photos/dance.jpg',       alt: 'Танцы в детском саду Color Baby House, Ташкент' },
    { src: 'assets/photos/taekwondo.jpg',   alt: 'Тхэквондо для детей в садике, Ташкент' },
    { src: 'assets/photos/robotics.jpg',    alt: 'Робототехника для дошкольников в Color Baby House' },
    { src: 'assets/photos/gymnastics.jpg',  alt: 'Гимнастика для малышей в детском саду' },
    { src: 'assets/photos/massage.jpg',     alt: 'Оздоровительный детский массаж в садике' },
    { src: 'assets/photos/summer-pool.jpg', alt: 'Летний сезон с бассейном в Color Baby House' },
  ];

  const [lifted, setLifted] = React.useState(-1);

  return (
    <section id="gallery" className="cs-reveal" style={{
      padding: 'var(--section-y) 0',
      /* полупрозрачно: под секцией должен просвечивать живой фон страницы */
      background: 'linear-gradient(180deg, rgba(255,255,255,0.55), rgba(254,237,245,0.55))',
      scrollMarginTop: '92px',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Галерея" title="Моменты из жизни садика" gradient>
          Каждый день — это игры, занятия и маленькие открытия. Загляните, как у нас проходит время. ✨
        </SectionHeading>

        {/* alignItems: start обязателен: по умолчанию grid растягивает детей на
            высоту ряда, а ряд меряется по собственной высоте фото (1200px из
            атрибута height) — и aspect-ratio 3/4 переставал работать: полосы
            вытягивались на весь экран и обрезали подписи. */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '18px', margin: '40px 0 0', alignItems: 'start',
        }}>
          {photos.map((p, i) => (
            <img
              key={p.src}
              {...imgProps(p.src)}
              alt={p.alt}
              onMouseEnter={() => setLifted(i)}
              onMouseLeave={() => setLifted(-1)}
              style={{
                /* height: auto обязателен: атрибут height="1200" (нужен против
                   скачков вёрстки) работает как CSS-высота, а aspect-ratio
                   действует только при автоматической высоте. Без этого фото
                   вытягивались до 1200px и обрезали подписи по бокам. */
                display: 'block', width: '100%', height: 'auto', aspectRatio: '3 / 4', objectFit: 'cover',
                borderRadius: 'var(--radius-lg)',
                border: '4px solid #fff',
                boxShadow: lifted === i ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                transform: lifted === i ? 'translateY(-4px)' : 'none',
                transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Gallery = Gallery;
