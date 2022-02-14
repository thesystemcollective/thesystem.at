export const View = () => [
  Phase1(),

  div({ class: 'month-title' }, 'Exhibitions'),

  MetzgereiMops(),
  Setzkasten(),
  Fluesterkonus(),
  MaxMustermann(),
  Work(),
  SystemeUndMenschen(),
  SandkastenSyndikat(),
  TheWound(),
  HeartbreakHotel(),
  HrLitto(),
  TheGarden(),

  div({ class: 'manifest' }, [
    h5([
      p([
        'Concept and Organisation: ',
        Link({ text: 'Litto / Daniela Weiss', to: 'https://litto.work' }),
      ]),
      p(['Development: ', Link({ text: 'Jascha Ehrenreich', to: 'https://jaeh.at' })]),
    ]),
  ]),
]
