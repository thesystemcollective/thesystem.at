export const View = state => [
  section({ class: 'Hero' }, [
    // p(b('Hello World.')),
    // p('We are the SystemKollektiv'),

    p({ class: 'Branding' }, [
      'Our mission is to create, procure, research, distribute,',
      ' and preserve digitized art in the Artificial Museum.',
    ]),

    div(Link({ class: 'Button', to: 'https://artificialmuseum.com', text: 'VISIT OUR MUSEUM' })),
  ]),

  div({ class: 'MapArea' }, [
    Picture({ class: 'MapImage', name: '/map', extension: 'jpg', height: 434, width: 900 }),
    Picture({
      class: 'ArtifactImage1',
      name: '/art_01',
      extension: 'jpg',
      height: 800,
      width: 600,
    }),
    Picture({
      class: 'ArtifactImage2',
      name: '/art_02',
      extension: 'jpg',
      height: 600,
      width: 800,
    }),
  ]),

  section({ id: 'manifest', class: 'Manifest' }, [
    h2('MANIFEST'),

    p([
      'The ',
      i('SystemKollektiv'),
      ' is a syndicate of independent',
      ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
      ' collectively using art and technology to transform our world.',
      ' We believe in a literal definition of "common goods"',
      ' and convert public spaces into an ',
      Link({ to: 'https://artificialmuseum.com', text: 'Artificial Museum' }),
      ', ready for artists to freely position their art.',
    ]),

    p('Our method is an intermixture of universes, physical, virtual and imaginary.'),

    p(
      { class: 'Big' },
      "We don't need space, time is irrelevant, objects stay as useful as the user.",
    ),

    // div(Link({ class: 'Button', to: '/manifest/', text: 'Read our manifest' })),
  ]),

  section({ id: 'mission', class: 'Mission' }, [
    div({ class: 'GameOver SubSection' }, [
      h2('MISSION'),

      p([
        'We collaborate with artists, curators, organizers, collectives and institutions,',
        ' expanding our network and achieving our shared objective:',
      ]),

      p({ class: 'Big' }, [
        'Augmenting our world with new ideas for change',
        ' and forming the cultural heritage of the future.',
      ]),

      // p([
      //   'We invite artists of all trades, both analog and digital,',
      //   ' to create an augmented reality artifact and become a permanent part of our museum.',
      // ]),

      p([
        'We are already, more than ever,',
        ' communicating and interacting in spaces that try to emulate an imaginary reality,',
        // ' and the experience of virtual reality seems to be coming closer and closer to',
        ' something indistinguishable from and interwoven with our material spaces,',
        ' an inevitable future of humanity.',
      ]),

      p([
        'Whatever the future may actually bring,',
        ' we believe that we should try to shape',
        ' technologies, social revolutions, ideas and spaces,',
        ' so that humankind will be enabled to reimagine itself.',
      ]),

      // p([
      //   'We want to finally be able to process changes to society',
      //   ' by representing ideas and critiques and taking a stance on them.',
      // ]),

      p([
        'There is not much time left until the beginning of 2030.',
        ' Creative eyes can already catch a glimpse of the needed changes,',
        ' a vision for humanity’s future that is reachable, sustainable and,',
        ' frankly, better than what we have now.',
      ]),
      p([
        ' Those same eyes also see the alternative future of climate disasters,',
        ' social disarray and division,',
        ' markets completely detached from reality and humanity enslaved by the machine.',
      ]),

      p({ class: 'Big' }, 'There are only two possible endings to this scenario:'),

      p({ class: 'Huge' }, 'GAME OVER'),
    ]),

    div({ class: 'Replay SubSection' }, [
      p({ class: 'Huge' }, 'REPLAY'),

      div({ class: 'left' }, [
        p(
          'Our obligation as artists, technologists, scientists and other creatives is displaying those visions and making the needs for change obvious and ubiquitous.',
        ),
        p([
          'By adding imaginariums to reality we are able to connect people all over the world,',
          ' and facilitate the sharing of artistic work on a virtual version of earth.',
        ]),

        p(
          'It allows the visitor to partake in exhibitions all over the earth, and soon maybe even on other planets, while the artists are not being limited by choice of venue, budget or other real world problems negatively interfering with the display of art',
        ),
      ]),

      div({ class: 'Big right' }, 'This is our final chance to act.'),

      Picture({ class: 'Moon', name: '/moon', extension: 'jpg' }),
    ]),
  ]),

  section({ id: 'partners', class: 'Partners' }, [
    h2('PARTNERS'),

    [
      { text: 'Barbis Ruder, AT', to: 'https://barbisruder.com/' },
      { text: 'CZIRP CZIRP, AT', to: 'http://www.czirpczirp.cc/' },
      { text: 'Echoræume, AT', to: 'https://echoraeume.klingt.org/' },
      { text: 'Experimental Game Cultures, AT' },
      {
        text: 'FH St. Poelten, AT',
        to: 'https://www.dieangewandte.at/jart/prj3/angewandte-2016/main.jart?rel=en&content-id=1621228720776',
      },
      { text: 'Hellerau, DE', to: 'https://www.hellerau.org/' },
      { text: 'Klub Solitaer, DE', to: '' },
      { text: 'Koli, TR' },
      { text: 'Medienwerkstatt006, AT', to: 'https://www.medienwerkstatt006.at/' },
      { text: 'PIXFILM Gallery, CA' },
    ].map(partner => p(Link(partner))),
    p('and more to come...'),
  ]),

  section({ id: 'participate', class: 'Participate' }, [
    h2('PARTICIPATE'),

    p([
      'We are looking for institutional partners. ',
      ' Universities, museums, hackspaces and artist collectives are invited to shape the future of the Artificial Museum with us.',
    ]),

    p([
      'We can help with material for the funding application and provide the technical infrastructure for exhibitions,',
      ' our partners handle the local open calls and coordinate with the artists.',
    ]),

    div(Link({ class: 'Button', text: 'CONTACT US', to: 'mailto:thesystemcollective@gmail.com' })),
  ]),

  Commissioned(),
]

export const style = vars => ({
  section: {
    clear: 'both',
    margin: '2em 0',

    '> p, > div, > h1, > h2, > h3, > h4, > h5': {
      margin: '0 auto',
      maxWidth: '1300px',
      padding: '0 5vw',
    },

    '.SubSection': {
      margin: 0,
      maxWidth: 'inherit',
      padding: 0,

      '> p, > div, > h1, > h2, > h3, > h4, > h5': {
        margin: '0 auto',
        maxWidth: '1300px',
        padding: '0 5vw',
      },
    },

    h2: {
      fontSize: '15px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },

    '&.Mission': {
      padding: 0,

      '.GameOver': {
        background: `linear-gradient(180deg, ${vars.background.dark} 60%, ${vars.gameoverColor} 99.5%, #6d9eac 100%)`,

        '.light &&': {
          background: `linear-gradient(180deg, ${vars.background.light} 60%, ${vars.gameoverColor} 99.5%, #6d9eac 100%)`,
        },
      },
      '.Replay': {
        background: `linear-gradient(180deg, #6d9eac 0%, ${vars.replayColor} 0.5%, ${vars.background.dark} 40%)`,

        '.light &&': {
          background: `linear-gradient(180deg, #6d9eac 0%, ${vars.replayColor} 0.5%, ${vars.background.light} 40%)`,
        },
      },
    },
  },

  '.Picture.Moon': {
    img: {
      display: 'block',
      margin: '0 auto',
    },
  },

  a: {
    '&.Button': {
      backgroundColor: vars.background.dark,
      border: `2px solid ${vars.background.light}`,
      color: vars.text.dark,
      display: 'inline-block',
      margin: '1em 0',
      padding: '5px',
      textDecoration: 'none',

      '&:hover': {
        backgroundColor: vars.background.dark,
        color: vars.text.dark,
      },
    },
  },

  '.light &&': {
    a: {
      '&.Button': {
        border: `2px solid ${vars.background.dark}`,
        color: vars.text.light,
        backgroundColor: vars.background.light,

        '&:hover': {
          color: vars.text.light,
          backgroundColor: vars.background.light,
        },
      },
    },
  },

  'body section .Big': {
    fontSize: '2em',
    margin: '1em auto',

    '&.Left': {
      float: 'left',
      width: '45%',
    },
    '&.Right': {
      float: 'right',
      width: '45%',
    },
  },

  '.Huge': {
    fontSize: '14vw',
    fontWeight: 'bold',
    lineHeight: 1.2,
    textAlign: 'center',
  },

  '.Partners': {
    color: vars.replayColor,
    margin: '2em 0',
    padding: '5em 0',

    a: {
      color: vars.replayColor,
      fontSize: '1.5em',
      lineHeight: '1.4em',
      whiteSpace: 'normal',
    },

    background: `
      linear-gradient(0deg,
        ${vars.background.dark} 0%,
        ${vars.gameoverColor} 40%,
        ${vars.gameoverColor} 60%,
        ${vars.background.dark} 100%
      )`,

    '.light &&': {
      background: `
      linear-gradient(0deg,
        ${vars.background.light} 0%,
        ${vars.gameoverColor} 40%,
        ${vars.gameoverColor} 60%,
        ${vars.background.light} 100%
      )`,
    },
  },


  '.MapArea': {
    display: 'inline-block',
  },
  '.MapImage': {
    height: 'auto',
    width: '100%',

    img: {
      height: 'auto',
      width: '100%',
    },
  },
  '.ArtifactImage1': {
    float: 'right',
    height: 'auto',
    position: 'relative',
    top: '-10vw',
    width: '30%',
  },
  '.ArtifactImage2': {
    float: 'left',
    height: 'auto',
    position: 'relative',
    top: '-5vw',
    width: '55%',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    'section.Mission': {
      '.GameOver, .Replay': {
        '.Huge': {
          fontSize: '4.5em',
        },
      },
    },
  },
})
