export const View = () =>
  ExhibitionWrapper({
    title: 'Max Mustermann',
    id: 'maxmustermann',
    img: {
      src: '/thesystem-noemikiss-maxmustermann.jpg',
      height: 1200,
      width: 842,
    },
    presents: {
      artists: {
        text: 'Noémi Kiss',
        to: 'http://www.noemikiss.at/',
      },

      collective: 'Villa Schapira',
      date: ['Exhibition', '09.09. – 13.09.2020'],
    },

    exhibitionImages: [
      {
        src: '/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-03.jpg',
        height: 900,
        width: 1200,
      },
    ],
    description: [
      '"Ez a világ olyan világ, sokat igér, keveset ád…“',
      ' ("Was für eine Welt ist diese Welt, die viel verspricht und wenig hält…“)',
      br(),
      br(),
      ' Erfüllen, sich bewähren, durchhalten aber auch sich durchsetzen, nützlich, tüchtig, brauchbar, fähig und befähigt sein:',
      ' Das ist unsere tägliche Beschäftigung. Immer bestehen und nicht versagen zu dürfen macht müde.',
      ' Im Zwang uns den äußeren Erwartungen anzupassen hoffen wir darauf, dass es uns besser geht. Wir wollen uns  besser fühlen.',
      ' Die Vielfalt um uns herum ist vielversprechend und suggeriert die Möglichkeit der freien Wahl. Doch gibt es überhaupt diese freie Wahl?',
      ' Die Spezialisten der Macht weisen uns mit ihren Empfehlungen im Labyrinth der "freien Wahl" eine einzige Variante als Richtung vor.',
      ' Aus deren Angaben und Anleitungen entstehen dann die Richtlinien, Vorschriften, Instruktionen und Verordnungen.',
    ],

    photographer: 'TheSystemCollective',
  })
