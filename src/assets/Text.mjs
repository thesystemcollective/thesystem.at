export const View = children => div({ class: 'Text' }, children)

export const style = v => ({
  clear: 'both',
  padding: '1em 1em 0',
  margin: '0 auto 3em',

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    margin: '0 auto 6em',
  },
})
