export const View = () =>
  div(
    { class: 'Phase1' },
    div([
      div({ class: 'address' }, [
        h2('Phase.1: Source'),
        p('Yppenplatz 5'),
        p('1160 Wien'),
        p('11.08. - 14.10.2020'),
      ]),

      Img({ src: '/auslage.jpg', height: '709', width: '1200' }),
    ]),
  )

export const style = vars => ({
  margin: '0 1em 3em',

  '> div': {
    display: 'inline-block',
  },

  h2: {
    paddingTop: 0,
  },

  '.address': {
    margin: '0 0 1em',
  },

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: 'auto',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: '70vw',
    margin: '0 auto 3em',

    '.address': {
      float: 'left',
      width: '34vw',
    },
    img: {
      float: 'right',
      width: '35vw',
    },
  },
})
