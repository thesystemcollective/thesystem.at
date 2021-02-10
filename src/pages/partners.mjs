export const state = {
  logotext: 'Partners',
}

export const View = state => [
  div({ class: 'content' }, [
    div('We are proud to work with the following institutions, collectives and artists.'),

    List({ list: state.collectives, title: 'Collectives' }),

    List({ list: state.artists, title: 'Artists' }),

    Partners(),
  ]),
]
