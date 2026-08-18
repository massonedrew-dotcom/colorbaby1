function Marquee() {
  const items = ['Английский язык', 'Танцы', 'Шахматы', 'Робототехника', 'Рисование', 'Тхэквондо', 'Гимнастика', 'Актёрское мастерство', 'Логопед-дефектолог', 'Мастер-классы', 'Подготовка к школе', 'Развивающие игры'];
  const row = copy => React.createElement("span", {
    className: "cs-marquee-row",
    key: copy
  }, items.map(t => React.createElement("span", {
    className: "cs-marquee-item",
    key: copy + t
  }, t)));
  return React.createElement("div", {
    className: "cs-marquee",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "cs-marquee-track"
  }, row('a'), row('b')));
}
window.Marquee = Marquee;