export const View = () => [
  PageHeader('Projects'),

  div({ class: 'content' }, [
    h2('Artificial Museum'),

    p('The Artificial Museum is our main project.'),
    Link({
      to: 'https://artificialmuseum.com',
      text: 'Click here to learn more about the Artificial Museum',
    }),

    h2('Exhibitions'),

    h3('2020'),

    h4([
      Link({ to: '/2020/phase1/', text: 'TheSystem Phase.1' }),
      ' - Manifestation in physical space',
    ]),

    Img('/auslage.jpg'),

    p(
      'In August and September of 2020, Phase.1 of "TheSystem" manifested itself on the Yppenplatz in Vienna, Austria.',
    ),

    Partners(),
  ]),
]
