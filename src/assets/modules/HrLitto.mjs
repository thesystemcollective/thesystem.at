export const View = () =>
  ExhibitionWrapper({
    title: 'Fake Mirror',
    id: 'fake-mirror',
    img: {
      src: '/thesystem-litto-thebody.jpg',
      height: 900,
      width: 1200,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/hrlitto/thesystem-mslitto-hrlitto-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/hrlitto/thesystem-mslitto-hrlitto-02.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/hrlitto/thesystem-mslitto-hrlitto-03.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/hrlitto/thesystem-mslitto-hrlitto-04.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/hrlitto/thesystem-mslitto-hrlitto-05.jpg',
        height: 1600,
        width: 1200,
      },
    ],

    presents: {
      artists: [
        p(
          Link({
            text: 'Ms. Litto',
            to: 'https://litto.work',
          }),
        ),
        p('presents'),
        p(Link({ to: 'https://www.instagram.com/hr.litto/', text: 'Hr. Litto' })),
      ],
      collective: 'Villa Schapira',

      date: ['Performance', '11.08.2020'],
    },
    description: [
      'An AI, sourced from a drawing, tells us what it learned',
      ' about material properties of the human body.',
    ],

    video: 'Dy36d_cNQq4',

    photographer: 'Sebastian Kreuzer & Marija Nujic',
  })
