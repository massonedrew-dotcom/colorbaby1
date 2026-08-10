/* Color Baby House — Отзывы родителей */
function Testimonials() {
  const { SectionHeading, Card, Avatar, Badge } = window.DesignSystem_52b7c1;
  const { Ic } = window;

  // ← Редактируйте отзывы здесь. name — имя родителя, role — кто,
  //   text — отзыв, color — цвет аватара, stars — оценка (1–5).
  const reviews = [
    {
      name: 'Дилноза', role: 'мама Амира, 4 года', color: 'pink', stars: 5,
      text: 'Сын идёт в садик с радостью и не хочет уходить вечером! Каждый день фото и отчёт в Telegram — я всегда спокойна за малыша. ✨',
    },
    {
      name: 'Шахзод', role: 'папа Зухры, 3 года', color: 'sky', stars: 5,
      text: 'Дочка заговорила на английском первыми словами уже через пару месяцев. Педагоги внимательные, тёплая домашняя атмосфера.',
    },
    {
      name: 'Гулнора', role: 'мама Тимура, 5 лет', color: 'mint', stars: 5,
      text: 'Очень нравится разнообразие занятий — шахматы, танцы, робототехника. Ребёнок развивается и при этом счастлив. Спасибо вам! 💛',
    },
    {
      name: 'Бекзод', role: 'папа Малики, 2 года', color: 'orange', stars: 5,
      text: 'Искали садик с заботой для самых маленьких — и нашли. Пятиразовое питание, маленькие группы, всё как дома.',
    },
    {
      name: 'Нилуфар', role: 'мама Сардора, 6 лет', color: 'purple', stars: 5,
      text: 'Логопед помог сыну с речью буквально за курс. Видно, что к каждому ребёнку индивидуальный подход. Рекомендую от души!',
    },
    {
      name: 'Жасур', role: 'папа Камилы, 4 года', color: 'sky', stars: 5,
      text: 'Дочка обожает утреннюю гимнастику и прогулки. Приятно видеть её улыбку каждый вечер. Лучший садик в районе! ☀️',
    },
  ];

  const Stars = ({ n }) => (
    <span style={{ display: 'inline-flex', gap: '2px', color: 'var(--yellow-400)' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ic key={i} n="star" size={16} style={{ fill: i < n ? 'var(--yellow-400)' : 'transparent' }} />
      ))}
    </span>
  );

  return (
    <section id="reviews" className="cs-reveal" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Отзывы" title="Что говорят родители" gradient>
          Нам доверяют самое дорогое — и это лучшая награда. Вот несколько тёплых слов от наших семей.
        </SectionHeading>

        <div className="cs-reviews-grid cs-stagger cs-cards" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
          margin: '40px 0 0',
        }}>
          {reviews.map((r) => (
            <Card key={r.name} bordered style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Stars n={r.stars} />
                <Ic n="quote" size={22} style={{ color: 'var(--pink-200)' }} />
              </div>
              <p style={{ font: 'var(--font-body-r)', color: 'var(--ink-700)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                {r.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                <Avatar name={r.name} color={r.color} size="md" />
                <div style={{ lineHeight: 1.25 }}>
                  <b style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--ink-900)', display: 'block' }}>{r.name}</b>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>{r.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <Badge color="success" variant="soft" size="lg" iconLeft={<Ic n="heart" size={16} />}>
            Более 200 счастливых семей с нами
          </Badge>
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
