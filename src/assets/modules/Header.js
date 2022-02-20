export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Container' }, [
      div({ class: 'Branding' }, [
        img({ class: 'Logo', src: '/hero-logo.svg', height: 400, width: 400 }),

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

    '.Hamburger': {
      display: 'none',
    },

    '.Menu': {
      float: 'right',

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
