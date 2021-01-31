export const View = () =>
  ExhibitionWrapper({
    title: 'HeartBreakHotel',
    id: 'heartbreakhotel',
    img: {
      src: '/thesystem-dagmarrohm-heartbreakhotel.jpg',
      height: 1020,
      width: 1013,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-03.jpg',
        height: 900,
        width: 1200,
      },
    ],

    presents: {
      artists: {
        text: 'Dagmar Rohm',
        to: 'http://www.dagmarrohm.at/',
      },

      collective: 'Dachsbau',
      date: ['Exhibition', '14.08. – 17.08.2020'],
    },
    description: [
      'Series framing my work for de-colonialism. ',
      'Colour is no available fund for distinguishing anything. ',
      'What is prefered tells a story about the individual person and nothing else. ',
      'Looking after historical perspectives is looking for unfairness. ',
      'This work examines the beginning of Rock‘n Roll, which came out of the rhythm of Black music. ',
      'It‘s Elvis, who won a „game“, because he had the right colour of skin. ',
      'The hidden winner could have been the black people, who still are persecuted by lot‘s of whites',
      ' thinking, they‘ve got to fight a war, full of hostility.',
    ],

    video: 'qwLkYQc8Pn0',

    photographer: 'Walter Roschnik',
  })
