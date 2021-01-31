export const View = () =>
  ExhibitionWrapper({
    title: ['WILLKOMMEN IN DER', br(), 'METZGEREI MOPS!'],
    id: 'metzgereimops',
    img: {
      src: '/thesystem-zirkusmops-familiemops.jpg',
      height: 640,
      width: 718,
    },
    exhibitionImages: [
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-02.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-03.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-04.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-05.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-06.jpg',
        height: 1600,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-07.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-08.jpg',
        height: 1600,
        width: 1200,
      },
    ],

    photographer: 'TheSystemCollective',

    presents: {
      artists: 'Familie Mops',
      collective: {
        text: 'Zirkus Mops',
        to: 'http://www.mysoundofmusic.at/',
      },
      date: ['Exhibition', '22.09. – 14.10.2020'],
    },

    description: [
      'Unser Traditionshaus produziert feinste Fleisch und Wurstwaren nach eigenen Familienrezepten.',
      ' Wir verarbeiten ausschließlich Fleisch von seltenen Wildtierarten.',
      ' Ob saftigen Beinschinken, gut durchzogenes T-Bone Steak oder feinsten Filetspitz –',
      ' genießen Sie exklusive Gaumenfreuden bis zum letzten Bissen.',
      ' Eine besondere Spezialität des Hauses ist unsere berühmte Lemurenwurst,',
      ' die schon Erzherzog Franz Joseph Karl I. Kaiser von Österreich zu schätzen wusste.',
      ' Nur für kurze Zeit am Yppenplatz 5.',
    ],
  })
