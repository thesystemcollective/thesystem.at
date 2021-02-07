export const View = state => [
  PageHeader('Partners'),

  div({ class: 'content' }, [
    div('We are proud to have worked with the following collectives and artists'),

    List({ list: state.collectives, title: 'Collectives' }),

    List({ list: state.artists, title: 'Artists' }),

    Partners(),
  ]),
]
