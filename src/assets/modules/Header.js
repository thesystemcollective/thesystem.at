export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Branding' }, [
      div(
        { class: 'Logo' },
        svg({ class: 'logo', viewBox: '0 0 54 60', width: '60', height: '54' }, [
          path({ d: 'M0 0v60h18V50H9V10h9V0z', fill: '#ffffff' }),
          path({ d: 'M36 0v10h9v40h-9v10h18V0z', fill: '#ffffff' }),
        ]),
      ),

      div({ class: 'Slogan' }, [p(b('hello world')), p('we are the SystemKollektiv')]),
    ]),

    menu && Menu({ url, hash, menu }),
  ])
}

export const style = vars => ({
  width: '100%',

  '.Branding': {
    display: 'inline-block',
  },

  '.Logo': {
    float: 'left',
    height: '2em',
    margin: '0 0.3em 0 0',

    svg: {
      maxHeight: '100%',
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
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
    margin: '0.5em 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    '.Branding': {
      float: 'left',
    },
    '.Menu': {
      float: 'right',
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
