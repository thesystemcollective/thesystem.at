export const View = () =>
  ExhibitionWrapper({
    title: 'System, Struktur & DeFragmentierung',
    id: 'system-struktur-defragmentierung',
    img: {
      src: '/thesystem-sandkasten-syndikat.jpg',
      height: 1380,
      width: 1080,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-03.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-04.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-05.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-06.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/sandkasten/thesystem-sandkastensyndikat-07.jpg',
        height: 900,
        width: 1200,
      },
    ],
    presents: {
      artists: [
        p('System // '),
        p('Markus Liszt'),

        p('Struktur // '),
        p(
          Link({
            text: 'Miss Bubblebliss aka Stephanie Krawinkler',
            to: 'http://missbubblebliss.at',
          }),
        ),

        p('DeFragmentierung // '),
        p(Link({ text: 'elet aka. Je.Jesch', to: 'https://elet.cc/' })),
      ],
      collective: {
        text: 'Sandkasten Syndikat',
        to: 'https://www.facebook.com/sandkastensyndikat/',
      },

      date: ['Exhibition', '26.08. – 30.08.2020'],
    },
    description: [
      p([
        'Konstruktion, Scan, Reflektion, Verortung und Zerlegung',
        ' von Körpern und Objekten im Raum',
        ' an analogen und digitalen Schnittstellen.',
      ]),
      p('Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt. '),
    ],

    video: 'eERg-H03cvY',

    photographer: 'Sandkasten Syndikat & TheSystemCollective',
  })
