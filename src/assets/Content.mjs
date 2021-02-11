export const View = children => div({ class: 'Content' }, children)

export const style = v => ({
  clear: 'both',
  margin: '0 1em 3em',
  padding: '4em 0 0 1em',
  margin: '0 auto',

  p: {
    lineHeight: 1.4,
    margin: '0.5em 0',
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    padding: '4em 0 0 2em',
  },
})
