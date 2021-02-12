export const View = (props, children) => {
  if (!children) {
    children = props
    props = {
      class: 'Content',
    }
  }

  props.class =
    props.class && !props.class.includes('Content') ? `Content ${props.class}` : 'Content'

  return div(props, children)
}

export const style = v => ({
  clear: 'both',
  margin: '0 1em 3em',
  padding: '2em 0.5em 2em 1em',
  margin: '0 auto',

  p: {
    lineHeight: 1.4,
    margin: '0.5em 0',
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    padding: '4em 0 0 2em',
  },
})
