export const View = state => {
  if (state.artists && !Array.isArray(state.artists)) {
    state.artists = [state.artists]
  }

  const { artists = [], collective, date, type } = state

  return section({ class: 'presents' }, [
    artists.length > 0 && h3(artists.map(a => (a.to ? Link(a) : a))),
    collective && h4(collective.to ? Link(collective) : collective),
    type && p(type),
    date && Array.isArray(date) ? date.map(d => p(d)) : p(date),
  ])
}
