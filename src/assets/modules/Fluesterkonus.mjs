export const View = () =>
  ExhibitionWrapper({
    title: ['fluesterkonus', br(), 'inter.aktion'],
    id: 'fluesterkonus',
    img: {
      src: '/thesystem-mariakoller-fluesterkonus.jpg',
      height: 1200,
      width: 800,
    },
    exhibitionImages: [
      {
        src: '/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-03.jpg',
        height: 1600,
        width: 1200,
      },
    ],
    presents: {
      artists: 'chora malik',
      collective: {
        text: 'Setzkasten Wien',
        to: 'https://setzkastenwien.at/',
      },
      date: ['Performance', '19.09.2020'],
    },
    description: [
      'reflexionen isolierter stimmen einer schönen neuen welt',
      br(),
      ' ganz nah',
      p({ class: 'subcredits', title: 'Supported by Kultur Ottakring' }, [
        Img('/social/ottakring-kultur.jpg'),
        Img('/social/ottakring-wappen.jpg'),
      ]),
    ],

    photographer: 'TheSystemCollective',
  })
