export const View = () =>
  div({ class: 'Partners' }, [
    h2('Our Partners:'),

    p('The following institutions and collectives will partner with us in 2022.'),

    Link(
      { to: 'https://usus.wien' },
      Img({
        title: 'yppshop provided by usus.wien',
        src: 'https://thesystem.at/social/usus.png',
        width: '80',
        height: '35',
      }),
    ),

    Link(
      { to: 'https://magic.github.io' },
      Img({
        title: 'made with a few bits of magic',
        src: 'https://thesystem.at/social/magic.png',
        width: '40',
        height: '35',
      }),
    ),
  ])

export const style = vars => ({
  padding: 0,
  position: 'relative',
  margin: '4em 0 0',
  width: 'auto',

  a: {
    display: 'inline-block',
  },

  img: {
    height: 'auto',
    margin: '0 2em 0 0',
    maxWidth: '90vw',
  },
})
