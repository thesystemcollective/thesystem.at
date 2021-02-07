export const View = ({ title, list }) =>
  div({ class: 'List text' }, [
    title && h2(title),

    div(list.map((item, i, list) => [
      item.to ? Link(item) : item,
      i + 1 < list.length ? ', ' : '.',
    ])),
  ])

export const style = {
  li: {
    float: 'left',
  },
}
