export const state = {
  logotext: 'NoWalls',
}

export const View = () => [
  Content([
    Slogan('No Walls: 2021'),

    Text([
      p([
        'The exhibition series ',
        Quote('No Walls for ...'),
        ' creates decentralized, localized art experiences all over Vienna and beyond.',
      ]),
      p([
        'This includes multiple exhibitions, interventions and collaborations',
        ' which will happen throughout 2021.',
      ]),
      p([
        'We will put our focus on all areas of life in which our freedoms are restricted,',
        ' on retracing of power structures and on dissolving them.',
      ]),
    ]),
  ]),

  Content(VideoEmbed({ src: 'D6i50aYe-X8' })),

  Content([
    Slogan('No Walls For Artists'),

    Text([
      p([
        'Starting on the 1st of May 2021,',
        ' we will feature artists and their artworks.',
        ' Featured artworks can be positioned worldwide.',
      ]),
    ]),
  ]),

  Content([
    Slogan('No Walls for Education / Science'),

    Text([
      p([
        'We will collaborate with institutions, exhibitions and collectives,',
        ' working together to represent our shared visions.',
      ]),
    ]),
  ]),

  Content([
    Slogan('No Walls for Museums'),

    Text([
      p([
        'Beginning on October 1st ("Lange Nacht der Museen", "Tag des Museums")',
        ' and ongoing until November 9th ("Visit an Art Museum day"),',
        ' "No Walls for Museums" will position artworks around austrian museums and close to art exhibitions, institutions and other art and culture related places.',
        // ' These artworks will be a permanent commemoration to those important places of culture and history.',
      ]),
    ]),
  ]),
]
