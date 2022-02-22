export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Container' }, [
      div({ class: 'Branding' }, [
        svg({
          class: 'Logo',
          width: 20,
          height: 20,
          viewBox: '0 0 400 400',
        }, [
          path({ d: "M279 0v64h57v273h-57v63h121V0ZM121 400v-64H64V64h57V0H0v400z", fill: "#f0f0f0" }),
          path({ d: "M135 231v-9a51 51 0 0 1 4-21 59 59 0 0 1 14-18 77 77 0 0 0 12-15 30 30 0 0 0 4-15 17 17 0 0 0-5-12 17 17 0 0 0-12-5 44 44 0 0 0-16 3 103 104 0 0 0-16 9l-12-27a105 106 0 0 1 23-11 73 73 0 0 1 24-4 49 50 0 0 1 36 12 43 43 0 0 1 12 32 52 52 0 0 1-6 27 101 101 0 0 1-18 22 99 99 0 0 0-9 10 25 25 0 0 0-4 7 35 35 0 0 0-1 9v6zm-6 42a21 21 0 0 1 6-16 22 22 0 0 1 15-5 21 21 0 0 1 15 5 21 21 0 0 1 6 16 21 21 0 0 1-6 16 20 20 0 0 1-15 5 22 22 0 0 1-14-5 20 20 0 0 1-7-16zm128-42h-30l-5-123h41zm-35 42a21 21 0 0 1 6-16 21 21 0 0 1 15-5 19 19 0 0 1 20 21 21 21 0 0 1-6 16 21 21 0 0 1-15 5 19 19 0 0 1-20-21z", fill: "#f0f0f0" }),
        ]),

        // img({ class: 'Logo', src: '/hero-logo.svg', height: 400, width: 400 }),

        div({ class: 'Slogan' }, [p(b('hello world')), p('we are the SystemKollektiv')]),
      ]),

      div({ class: 'Hamburger', onclick: actions.header?.toggle }, img({ src: '/hamburger.svg', height: 40, width: 40 })),

      menu && Menu({ class: props.menuVisible ? 'visible' : 'no', url, hash, menu }),
    ]),
  ])
}

export const actions = {
  toggle: state => {
    return {
      ...state,
      menuVisible: !state.menuVisible,
    }
  }
}

export const style = vars => ({
  width: '100%',
  zIndex: 1,
  fontSize: '15px',
  position: 'sticky',
  top: 0,
  backgroundColor: vars.background.dark,
  padding: '1vw 0 0.5vw',

  '.Container': {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2vw 0 0',
  },

  '.Branding': {
    display: 'inline-block',
  },

  '.Hamburger': {
    float: 'right',
    cursor: 'pointer',
    height: '2em',
    width: '2em',
  },

  '.Logo': {
    float: 'left',
    height: '2.5vw',
    margin: '0 2vw',
    width: 'auto',
    minHeight: '2em',
  },

  '.Slogan': {
    float: 'left',

    p: {
      lineHeight: 1,
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '1em 0 1em 5vw',

    '&.visible': {
      display: 'inherit',
    },

    '&.no': {
      display: 'none',
    },
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    // '.Container': {
    //   margin: '0 5vw 0 0',
    // },

    '.Logo': {
      margin: '0 1.25vw',
    },

    '.Hamburger': {
      display: 'none',
    },

    '.Menu': {
      float: 'right',
      margin: '0.5em 0 0 5vw',

      '&.no': {
        display: 'inherit',
      },
    },

    '.Branding': {
      float: 'left',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    padding: '0.5em 0',

    '.light &&': {
      backgroundColor: vars.background.light,
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'hash', type: 'string' },
    { key: 'url', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
