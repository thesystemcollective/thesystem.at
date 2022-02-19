export const View = () =>
  Section({ class: 'Commissioned' }, [
    h2('Commissioned by:'),

    div([
      Link({ title: 'commissioned by kör', to: 'https://www.koer.or.at/' }, [
        Img({
          class: 'koer',
          alt: 'KÖR Wien',
          src: 'https://static.artificialmuseum.com/support/koer.svg',
          width: 255,
          height: 100,
        }),
        Img({
          class: 'koer',
          alt: 'Wien Kultur',
          src: 'https://static.artificialmuseum.com/support/wien-kultur.svg',
          width: 242,
          height: 100,
        }),
      ]),

      Link({ to: 'https://wirtschaftsagentur.at', title: 'Wirtschaftsagentur Wien' }, [
        Img({
          alt: 'Wirtschaftsagentur Wien',
          src: 'https://static.artificialmuseum.com/support/wirtschaftsagenturwien.png',
          height: 100,
          width: 100,
        }),
      ]),

      // Img({
      //   src: 'https://static.artificialmuseum.com/support/petmanfoundation.png',
      //   title: 'Petman Foundation',
      //   height: 100,
      //   width: 100,
      // }),
    ]),
  ])

export const style = vars => ({
  padding: '3em 0',
  position: 'relative',
  margin: '4em 0 0',
  width: 'auto',

  background: `
      linear-gradient(0deg,
        ${vars.background.dark} 0%,
        ${vars.replayColor} 40%,
        ${vars.replayColor} 60%,
        ${vars.background.dark} 100%
      )`,

  '.light &&': {
    background: `
      linear-gradient(0deg,
        ${vars.background.light} 0%,
        ${vars.replayColor} 40%,
        ${vars.replayColor} 60%,
        ${vars.background.light} 100%
      )`,
  },

  a: {
    display: 'inline-block',
  },

  img: {
    height: 'auto',
    margin: '0 5vw 0 0',
    maxWidth: '80vw',
  },

  '.koer': {
    display: 'block',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    '.koer': {
      display: 'inherit',
    },
  },
})
