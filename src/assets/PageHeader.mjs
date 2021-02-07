export const View = text =>
  div({ class: 'PageHeader' }, [h1(['THE', br(), 'SYSTEM']), h2(text)])

export const style = vars => ({
  fontWeight: 500,
  width: '100%',
  margin: '0 0 2em',

  h1: {
    fontSize: '2em',
    lineHeight: 1,
    padding: 0,
  },
  h2: {
    fontSize: '1.2em',
    lineHeight: 1,
    padding: 0,
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: 'auto',
    margin: 0,

    h1: {
      fontSize: '5vw',
    },
    h2: {
      fontSize: '2.7vw',
    },
  },
})
