export const View = state => [
  div({ class: 'PageHeader' }, [VideoContainer(state), Slogan({ subTitle: 'Collective' }), ArtificialMuseumLink()]),

  div({ class: 'manifest' }, [
    p([
      i('TheSystemCollective'),
      ' is a syndicate of independent',
      ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
      ' collectively using art and technology to transform our world.',
      ' We believe in a literal definition of "open source",',
      ' and convert public spaces into an Artificial Museum, ready for artists to freely position their art.',
    ]),

    p('Our method is an intermixture of universes, physical, virtual and imaginary.'),

    p(i("We don't need space, time is irrelevant, objects stay as useful as the user.")),

    p([
      'TheSystem is a time space continuum made ',
      b('manifest'),
      ', using technology to make gps-anchored art accessible to everyone, both at home and abroad.',
    ]),

    p([
      'Involved collectives:',
      ' Dachsbau, Sandkasten Syndikat, Setzkasten Wien, Zirkus Mops, Villa Schapira.',
    ]),
  ]),

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
    h3('Phase.1 - Manifestation in physical space'),

    p([
      'In August and September of 2020,',
      ' Phase.1 of "TheSystem" manifested itself on the Yppenplatz in Vienna, Austria.',
    ]),
    p([
      '20 artists, representing 5 collectives',
      ' (Sandkasten Syndikat, Villa Schapira, Zirkus Mops, Setzkasten, Dachsbau)',
      ' performed and/or exhibited in those two months.',
    ]),
    p(
      'The artists showed paintings, multimedia installations, sculptures, and audio-visual concepts.',
    ),

    h3('Phase.2 - Manifestation in the virtual world / Artificial Museum'),

    p([
      'The second part of "TheSystem" is the connection between physical, digital, and imaginary worlds,',
      ' transforming the analog art exhibited in Phase.1 into digital experiences.',
    ]),
    p([
      'These "augmented" artworks will form the foundation of an Artificial Museum,',
      ' allowing artists to bridge the chasm between their art and the evolving digitized world around them.',
    ]),
    p([
      'The Artificial Museum is connected to the real world through a web-based augmented reality application - ',
      Link({ to: 'https://thesystem.at', text: 'TheSystem.at' }),
    ]),

    h5([
      p([
        'Concept and Organisation: ',
        Link({ text: 'Litto / Daniela Weiss', to: 'https://litto.work' }),
      ]),
      p(['Development: ', Link({ text: 'Jascha Ehrenreich', to: 'https://jaeh.at' })]),
    ]),
  ]),
]
