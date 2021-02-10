export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logotext, menu, root, theme, hash, url } = props

  const fill = theme === 'dark' ? '#fafafa' : '#0c0c0c'

  return header({ class: 'Header' }, [
    Link({ class: 'Branding', to: root }, [
      svg({ viewBox: '0 0 54 60' }, [
        path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill }),
      ]),
      h1('TheSystem'),
      h2(logotext),
    ]),
    menu && Menu({ url, hash, root, menu }),
  ])
}

export const style = vars => ({
  width: '100%',
  margin: '0 0 2em',
  zIndex: 1,

  a: {
    textDecoration: 'none',
  },

  svg: {
    height: '3.3em',
    width: 'auto',
    float: 'left',
    margin: '0.25em',
  },

  'h1, h2': {
    lineHeight: 1,
    padding: 0,
    fontWeight: 500,
  },
  h1: {
    fontSize: '2em',
  },
  h2: {
    fontSize: '1.7em',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    position: 'fixed',
    backgroundColor: vars.background.dark,

    '.light &&': {
      backgroundColor: vars.background.light,
    },

    '.Branding': {
      float: 'left',
    },
    '.Menu': {
      float: 'right',
      width: 'auto',
      textAlign: 'right',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
