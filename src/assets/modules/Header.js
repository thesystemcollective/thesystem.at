export const View = (props) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Logo' }, '[]'),

    div({ class: 'Slogan' }, [
      p(b('hello world')),
      p('we are the SystemKollektiv')
    ]),

    menu && Menu({ url, hash, menu }),
  ])
}

export const propTypes = {
  Header: [
    { key: 'hash', type: 'string' },
    { key: 'url', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
