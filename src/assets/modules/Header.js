export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div(
      { class: 'Logo' },
      svg({ class: 'logo', viewBox: '0 0 54 60', width: '60', height: '54' }, [
        path({ d: 'M0 0v60h18V50H9V10h9V0z', fill: '#ffffff' }),
        path({ d: 'M36 0v10h9v40h-9v10h18V0z', fill: '#ffffff' }),
      ]),
    ),

    div({ class: 'Slogan' }, [p(b('hello world')), p('we are the SystemKollektiv')]),

    menu && Menu({ url, hash, menu }),
  ])
}

export const style = {
  width: '100%',

  '.Logo': {
    float: 'left',
    height: '2em',
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '0.5em 0 1em',
  },
}

export const propTypes = {
  Header: [
    { key: 'hash', type: 'string' },
    { key: 'url', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
