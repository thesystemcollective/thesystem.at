export const View = () =>
  ExhibitionWrapper({
    title: 'SETZKASTEN X TheSystem',
    id: 'setzkasten',
    img: {
      src: '/thesystem_setzkastenwien.jpg',
      height: 1000,
      width: 667,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-03.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-04.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-05.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/setzkasten/thesystem-setzkasten-06.jpg',
        height: 1600,
        width: 1200,
      },
    ],

    presents: {
      artists: [
        p('Stefan Voglsinger'),
        p('TURBO SUPER, 2061 / Installation'),
        br(),
        p('Patrick K.-H. & bestbefore/Andreas Karaoulanis'),
        p('EuLowGui, 2020 |  Video Screening'),
        br(),
        p('Guillermo Tellechea | Projektion'),
        br(),
        p('chora malik | Performance'),
      ],

      collective: {
        text: 'Setzkasten Wien',
        to: 'https://setzkastenwien.at/',
      },

      date: ['Performances', '14.09. – 19.9.2020'],
    },
    description: [
      'Über die Woche verteilt bespielen KünstlerInnen aus dem Umfeld des Setzkasten',
      ' Wien die Auslage am Yppenplatz 5 mit immersiven Performances, Videoarbeiten',
      ' und Skulpturen. TheSystem wird zum wachsenden Labor und ist transformierende',
      ' Installation und performativer Arbeitsraum zugleich.',
    ],

    photographer: 'TheSystemCollective',
  })
