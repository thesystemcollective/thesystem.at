export const View = () =>
  ExhibitionWrapper({
    title: 'Systeme & Menschen',
    id: 'systeme-und-menschen',
    img: {
      src: '/thesystem-stizz-systemeundmenschen.jpg',
      height: 1200,
      width: 900,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-02.jpg',
        height: 675,
        width: 1200,
      },
      {
        src: '/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-03.jpg',
        height: 900,
        width: 1200,
      },
    ],
    presents: {
      artists: {
        text: 'Stefan Stürzer',
        to: 'https://absturz.info',
      },
      collective: 'Villa Schapira',
      date: ['Exhibition', '1.09. – 7.09.2020'],
    },
    description: [
      'Wir leben in einer Zeit in der Menschen',
      ' viel zu oft für die Erhaltung von Systemen arbeiten.',
      ' Systeme die von Menschen erfunden wurden!',
      ' Systeme sollten eigentlich für die Menschen existieren und nicht umgekehrt.',
      ' Eine philosophische Auseinandersetzung.',
    ],

    video: 'grRgMJi3htE',

    photographer: 'TheSystemCollective',
  })
