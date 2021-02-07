export const View = state => [
  PageHeader('2020'),

  Phase1(),

  div({ class: 'Physical' }, [
    h2('Manifestation in physical space'),

    p([
      'In August and September of 2020,',
      ' Phase.1 of "TheSystem" manifested itself on the Yppenplatz in Vienna, Austria.',
    ]),

    p([
      `${state.artists.length} artists, representing ${state.collectives.length} collectives `,
      '(',
      state.collectives.map((item, i, list) => [
        item.to ? Link(item) : item,
        i + 1 < list.length ? ', ' : '.',
      ]),
      ')',
      ' performed and/or exhibited in those two months.',
    ]),
    p([
      'The artists showed paintings,',
      ' multimedia installations, sculptures,',
      ' and audio-visual concepts.',
    ]),
  ]),

  TheGarden(),
  HrLitto(),
  HeartbreakHotel(),
  TheWound(),
  SandkastenSyndikat(),
  SystemeUndMenschen(),
  Work(),
  MaxMustermann(),
  Fluesterkonus(),
  Setzkasten(),
  MetzgereiMops(),

  h5([
    'Concept and Organisation: ',
    Link({ text: 'Litto / Daniela Weiss', to: 'https://litto.work' }),
  ]),

  h5(['Development: ', Link({ text: 'Jascha Ehrenreich', to: 'https://jaeh.at' })]),
]
