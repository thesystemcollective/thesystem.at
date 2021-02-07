export const View = ({ title, list }) =>
  div({ class: 'List text' }, [
    title && h2(title),

    div(list.map(ListItem)),
  ])

export const style = {
  li: {
    float: 'left',
  },
}
