export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Container' }, [
      div({ class: 'Branding' }, [
        img({ class: 'Logo', src: '/hero-logo.svg' }),

        div({ class: 'Slogan' }, [p(b('hello world')), p('we are the SystemKollektiv')]),
      ]),

      menu && Menu({ url, hash, menu }),
    ]),
  ])
}

export const style = vars => ({
  width: '100%',
  zIndex: 1,
  fontSize: '15px',

  '.Container': {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 5vw 0 0',
  },

  '.Branding': {
    display: 'inline-block',
  },

  '.Logo': {
    float: 'left',
    height: '2.5vw',
    margin: '0 1vw 0 1.5vw',
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
    margin: '0.5em 0 0 5vw',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    '.Branding': {
      float: 'left',
    },
    '.Menu': {
      float: 'right',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    position: 'sticky',
    top: 0,
    backgroundColor: vars.background.dark,
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
