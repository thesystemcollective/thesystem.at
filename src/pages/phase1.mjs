export const state = {
  logotext: 'Phase.1',
}

export const View = state => [
  Content({ class: 'Phase1' }, [
    Slogan('Source: 2020'),

    Text([
      div({ class: 'address' }, [p('Yppenplatz 5'), p('1160 Wien'), p('11.08. - 14.10.2020')]),

      Picture({ src: '/auslage', type: 'jpg', height: '709', width: '1200' }),
    ]),
  ]),

  Content({ class: 'Physical' }, [
    Slogan('Manifestation in physical space'),

    Text([
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
