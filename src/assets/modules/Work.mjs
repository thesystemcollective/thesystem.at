export const View = () =>
  ExhibitionWrapper({
    title: '"Work"',
    id: 'work',
    img: {
      src: '/thesystem-zirkusmops-work.jpg',
      height: 1200,
      width: 1028,
    },
    presents: {
      artists: [
        [p(Link({ text: 'Marco Otoya', to: 'https://culturaespiral.com/marco-otoya/' }))],
        [p(Link({ text: 'Adam Lebesmühlbacher', to: 'http://www.mysoundofmusic.at/' }))],
        [p(Link({ text: 'Sebastian Schmid', to: 'https://zirkusabnormal.at/' }))],
      ],

      collective: 'Villa Schapira',
      date: ['Exhibition', '3.09. – 7.09.2020'],
    },

    exhibitionImages: [
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-02.jpg',
        height: 679,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-03.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-04.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-05.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-06.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-07.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/work/thesystem-zirkusmops-work-08.jpg',
        height: 1600,
        width: 1200,
      },
    ],

    description: [
      'Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ',
      'Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ',
      'Angst vor einem Risiko und vor einer Änderung paralysieren? Kann die Routine uns in ',
      'ein Möbelstück verwandeln? Ist die Routine etwas positives oder nicht, oder aber ',
      'könnten wir die Routine ändern oder transformieren? Oder besser nicht?',
      br(),
      br(),

      p('Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5'),
      p('John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra'),
    ],

    video: 'tzPXBR5AYJs',

    photographer: 'Kris Kalika & TheSystemCollective',
  })
