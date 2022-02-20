export const vars = {
  text: {
    dark: '#fafafa',
    light: '#0c0c0c',
  },

  background: {
    dark: '#0c0c0c',
    light: '#fafafa',
  },

  gameoverColor: '#f03f4b',
  replayColor: '#06e3f3',

  neutral: '#0c0c0c',

  paddingLeft: '25px',

  link: {
    dark: '#fafafa',
    light: '#0c0c0c',

    hover: {
      dark: '#fafafa',
      light: '#0c0c0c',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.artificialmuseum.com/font/',

      styles: {
        normal: {
          400: ['Noto Sans', 'NotoSans'],
          700: ['Noto Sans Black', 'NotoSans-Black'],
        },
        italic: {
          400: ['Noto Sans Italic', 'NotoSans-Italic'],
        },
      },
    },

    body: {
      fontSize: '18px',
      fontFamily: 'notosans, sans-serif',
      overflowX: 'initial',
      lineHeight: 1.4,
    },

    a: {
      color: v.link.dark,

      '&.Button': {
        backgroundColor: v.background.dark,
        border: `2px solid ${v.background.light}`,
        display: 'inline-block',
        margin: '1em 0',
        padding: '0.5em 0',
        textAlign: 'center',
        width: '90%',
        textDecoration: 'none',
        fontWeight: 'bold',
        letterSpacing: '1px',

        '&:hover': {
          backgroundColor: v.background.dark,
        },
      },

      '.light &&': {
        color: v.link.light,

        '&.Button': {
          border: `2px solid ${v.background.dark}`,
          color: v.text.light,
          backgroundColor: v.background.light,

          '&:hover': {
            color: v.text.light,
            backgroundColor: v.background.light,
          },
        },

        '&:hover': {
          color: v.link.hover.light,
        },
      },

      '&:hover': {
        color: v.link.hover.dark,
      },
    },

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    h2: {
      fontSize: '15px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      margin: '0 auto 2em',
      letterSpacing: '1px',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },

      '.icon': {
        width: '1em',
      },
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'auto',
    },

    '.PageHeader': {
      display: 'inline-block',
      width: '100%',
    },

    '.month-title': {
      margin: '2em 5vw',
      fontWeight: '700',
    },

    '.sections': {
      display: 'inline-block',
      margin: '0 0 0 1em',

      h2: {
        padding: 0,
      },

      section: {
        clear: 'both',
        margin: '0 3vw 1em 0',
      },

      '.description, .location': {
        fontSize: '0.9em',
      },
    },

    '.subcredits': {
      width: '80%',
      maxWidth: '500px',

      img: {
        height: '100px',
        '&:first-child': {
          maxWidth: '66%',
        },
        '&:last-child': {
          maxWidth: '33%',
        },
      },
    },

    '.NoSpy': {
      left: 'auto',
      right: '0.5em',

      '.icon': {
        left: 'auto',
        right: 0,
        width: '1em',
      },

      '.ShowHide': {
        left: 'auto',
        right: 0,
        bottom: '0.5em',
        height: '0.8em',
      },

      '.Container': {
        right: 0,
        left: 'auto',
        fontSize: '0.7em',
      },
    },

    '.LightSwitch': {
      left: 'auto',
      right: '0.5em',
      bottom: '2em',
    },

    '.content': {
      margin: '0 1em 3em',

      p: {
        lineHeight: 1.4,
        margin: '0.5em 0',
      },
    },

    section: {
      clear: 'both',
      margin: '2em 0',

      '.Container': {
        margin: '0 auto',
        maxWidth: '1300px',
        padding: '0 5vw',
      },

      '.SubSection': {
        margin: 0,
        maxWidth: 'inherit',
        padding: 0,

        '> h2': {
          margin: '0 auto 2em',
        },
      },

      '&.Mission': {
        padding: 0,

        '.GameOver': {
          background: `linear-gradient(180deg, ${v.background.dark} 0%, ${v.gameoverColor} 99%, #7e909e 100%)`,

          '.light &&': {
            background: `linear-gradient(180deg, ${v.background.light} 0%, ${v.gameoverColor} 99%, #7e909e 100%)`,
          },
        },
        '.Replay': {
          background: `linear-gradient(180deg, #7e909e 0%, ${v.replayColor} 1%, ${v.background.dark} 50%)`,

          '.light &&': {
            background: `linear-gradient(180deg, #7e909e 0%, ${v.replayColor} 1%, ${v.background.light} 50%)`,
          },
        },
      },
    },

    figcaption: {
      fontSize: '0.5em',
      padding: '0 0.5em',

      '&.Right': {
        textAlign: 'right',
      }
    },

    '.Hero': {
      '.HeroLogo': {
        maxWidth: '100%',
        width: '250px',
        height: 'auto',
        margin: '0 auto 1em',
        display: 'block',
      },

      h1: {
        padding: 0,
        lineHeight: 1,
        fontSize: '11.5vw',
      },

      'a.Button': {
        clear: 'both',
      },
    },

    '.MoonBase': {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      clear: 'both',

      '.MoonContainer': {
        display: 'block',
        margin: '0 auto',
      },
    },

    '.Picture.Moon': {
      img: {
        display: 'block',
        margin: '0 auto',
      },
    },

    '.Spacer': {
      fontSize: '18px',
      margin: '3.7em 0 0',
    },

    '.Medium': {
      fontSize: '24px',
    },

    '.Big': {
      display: 'inline-block',
      fontSize: '2em',
      margin: '1em auto',
      lineHeight: 1,
    },

    '.Huge': {
      fontSize: '14vw',
      fontWeight: 'bold',
      lineHeight: 1.2,
      textAlign: 'center',
    },

    '.Right': {
      textAlign: 'right',
    },

    '.GameOver': {
      '.Huge': {
        padding: '0 0 10px',
      },
    },

    '.Partners': {
      color: v.replayColor,
      margin: '2em 0',
      padding: '5em 0',

      li: {
        color: v.replayColor,
        fontSize: '1.2em',
        lineHeight: '1.4em',
        whiteSpace: 'normal',

        a: {
          color: v.replayColor,
        },
      },

      background: `
      linear-gradient(0deg,
        ${v.background.dark} 0%,
        ${v.gameoverColor} 40%,
        ${v.gameoverColor} 60%,
        ${v.background.dark} 100%
      )`,

      '.light &&': {
        background: `
      linear-gradient(0deg,
        ${v.background.light} 0%,
        ${v.gameoverColor} 40%,
        ${v.gameoverColor} 60%,
        ${v.background.light} 100%
      )`,
      },
    },

    '.MapArea': {
      display: 'inline-block',
      width: '100%',
      margin: '3em 0 0',
      clear: 'both',
    },

    '.MapImage': {
      height: 'auto',
      width: '100%',

      img: {
        height: 'auto',
        width: '100%',
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'block',
      },
    },
    '.ArtifactImage1': {
      float: 'right',
      height: 'auto',
      position: 'relative',
      top: '-17vw',
      width: '33%',

      img: {
        height: '100%',
        width: '100%',
      },
    },
    '.ArtifactImage2': {
      float: 'left',
      height: 'auto',
      position: 'relative',
      top: '-5vw',
      width: '55%',

      img: {
        height: '100%',
        width: '100%',
      },
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '22px',
      },

      a: {
        '&.Button': {
          padding: '0.5em 3.2em',
          width: 'auto',
        },
      },

      '.Hero': {
        '.HeroLogo': {
          float: 'left',
          margin: '0 2em 0 0',
          width: '30%',
        },

        '.HeroBranding': {
          float: 'left',
        },

        h1: {
          float: 'left',
          fontSize: '50px',
          margin: '-8px 0 0',

          span: {
            display: 'block',
          },
        },
      },

      '.sections': {
        section: {
          margin: '0 4vw 0 0',
        },
        '.presents, .location': {
          marginBottom: '2em',
        },
        '.description': {
          marginTop: 0,
        },
      },

      '.Spacer': {
        width: '70vw',
      },

      '.Medium': {
        width: '75vw',
      },

      '.Big.Narrow': {
        width: '70vw',
      },

      '.Left': {
        float: 'left',
      },
      '.Right': {
        float: 'right',
      },

      '.Partners': {
        li: {
          fontSize: '2em',
        },
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      '.sections': {
        float: 'right',
        width: '47vw',

        section: {
          clear: 'none',
        },
      },

      '.Spacer': {
        width: '40vw',
      },

      '.Medium': {
        width: '45vw',
      },

      '.Big': {
        width: '55vw',

        '&.Narrow': {
          width: '40vw',
        },
      },

      '.content': {
        width: '70vw',
        margin: '0 auto 6em',
      },

      '.Hero': {
        '.HeroBranding': {
          float: 'left',
          width: '40%',
        },

        h1: {
          span: {
            display: 'inline',
          },
        },
      },

      '.Mission': {
        '.GameOver, .Replay': {
          '.Huge': {
            fontSize: '4.5em',
          },
        },
      },

      '.Partners': {
        li: {
          fontSize: '2.5em',
        },
      },
    },

    [`@media screen and (min-width: ${v.widths.desktop})`]: {
      '.sections': {
        section: {
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
      '.Big': {
        width: '45vw',
      },
    },

    [`@media screen and (min-width: ${v.widths.agency})`]: {
      'section.Mission': {
        '.GameOver, .Replay': {
          '.Huge': {
            fontSize: '8em',
          },
        },
      },
    },
  }
}
