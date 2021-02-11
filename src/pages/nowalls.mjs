export const View = () => [
  Content([
    Slogan('No Walls'),

    Text([
      p([
        'The exhibition series "No Walls" aims',
        ' to create a decentralized, localized exhibition all over Vienna and other cities.',
      ]),
      p([
        'This includes multiple exhibitions, interventions and collaborations',
        ' that will happen over the next year.',
      ]),
      p([
        'We will put our focus on all areas of life in which our freedoms are restricted,',
        ' on retracing of power structures and on dissolving them.',
      ]),
    ]),

    VideoEmbed({ src: 'D6i50aYe-X8' }), // demo video

    Slogan('No Walls For Artists'),

    Text([
      p([
        'Starting on the 1st of May,',
        ' we will feature artists and their artworks.',
        ' Featured artworks can be positioned worldwide.',
      ]),
    ]),


    Slogan('No Walls for Education / Science'),

    Text([
      p([
        'We will collaborate with institutions, exhibitions and collectives,',
        ' working together to represent our shared visions.',
      ]),
    ]),

    Slogan('No Walls for Museums'),

    Text([
      p([
        'Beginning on October 1st ("Lange Nacht der Museen", "Tag des Museums")',
        ' and ongoing until November 9th ("Visit an Art Museum day"),',
        ' "No Walls for Museums" will position artworks around austrian museums and close to art exhibitions, institutions and other art and culture related places.',
        // ' These artworks will be a permanent commemoration to those important places of culture and history.',
      ]),
    ])
  ])
]
