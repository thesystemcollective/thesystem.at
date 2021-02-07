export const View = (item, i, list) => [
  item.to ? Link(item) : item,
  i + 1 < list.length ? ', ' : '.',
]
