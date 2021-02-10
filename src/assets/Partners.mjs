export const View = (_, children) =>
  div({ class: 'Partners' }, [
    div({ class: 'Commissioned' }, [
      h3('Commissioned by:'),

      Link({ title: 'commissioned by kör', to: 'https://koer.or.at' }, [
        Img({
          class: 'koer',
          alt: 'kör',
          src: 'https://static.artificialmuseum.com/support/koer-red.svg',
          width: '255',
          height: '100',
        }),
        Img({
          class: 'koer',
          alt: 'wien kultur',
          src: 'https://static.artificialmuseum.com/support/wien-kultur.svg',
          width: '242',
          height: '100',
        }),
      ]),
    ]),

    div({ class: 'Support' }, [
      h3('Support:'),

      Link(
        { to: 'https://usus.wien' },
        Img({
          title: 'yppshop provided by usus.wien',
          src: 'https://static.artificialmuseum.com/support/usus.svg',
          width: '80',
          height: '35',
        }),
      ),

      Link(
        { to: 'https://magic.github.io' },
        Img({
          title: 'made with a few bits of magic',
          src: 'https://static.artificialmuseum.com/support/magic.svg',
          width: '40',
          height: '35',
        }),
      ),

      children,
    ]),
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
    width: 'auto',
    margin: '0 2em 0 0',
    maxWidth: '90vw',
    maxHeight: '62px',
  },

  '.Support': {
    img: {
      maxHeight: '24px',
      margin: '0 0.5em 0 0',
    },
  },

  '.koer': {
    display: 'block',
    margin: '0 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    '.koer': {
      display: 'inherit',
    },
  },
})
