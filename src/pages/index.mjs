export const View = ({ artists, collectives }) => [
  PageHeader('Collective'),

  div({ class: 'content' }, [
    div({ class: 'manifest' }, [
      p([
        i('TheSystemCollective'),
        ' is a syndicate of independent',
        ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
        ' collectively using art and technology to transform our world.',
        ' We believe in a literal definition of "common goods",',
        ' and convert public spaces into a museum,',
        ' ready for artists to freely position their art.',
      ]),

      p('Our method is an intermixture of universes, physical, virtual and imaginary.'),

      p(i("We don't need space, time is irrelevant, objects stay as useful as the user.")),

      p([
        'Our main purpose is the creation, procurement, research, dissemination and conservation of (digital) art in the ',
        b(Link({ to: 'https://artificialmuseum.com/', text: 'Artificial Museum' })),
        ', a time space continuum made ',
        b('manifest'),
        ', created to  make art accessible to everyone, both at home and abroad.',
      ]),

      h2('Agenda 2021'),

      h3('February: Opening'),
      p('We opened the Artificial Museum on the 1st of February.'),

      h3('No Walls'),
      p('The exhibition "No Walls" aims to create a decentralized, localized exhibition all over Vienna and other cities.'),
      p('This includes multiple exhibitions, interventions and collaborations that will get executed over the next year.'),
      p('We will focus on all areas of life in which our freedoms are restricted, on retracing of power structures and on dissolving them.'),

      h3('No Walls For Artists'),
      p('Starting in may, we will feature artists and their artworks. Featured artworks can be positioned anywhere.'),

      h3('No Walls for Education / Science'),
      p('We will collaborate with institutions, exhibitions and collectives, working together to represent our shared visions.'),

      h3('No Walls for Museums'),
      p([
        'Beginning in October ("Lange Nacht der Museen", "Tag des Museums") and running until November 9th ("Visit an Art Museum day"),',
        ' "No Walls for Museums" will position artworks around austrian museums and close to art exhibitions, institutions and other art and culture related places.',
        ' These artworks will be a permanent commemoration to those important places of culture and history.',
      ]),

      h3('No Walls for …'),
      p('We are planning interventions and exhibitions throughout the year.'),

      List({ list: collectives, title: 'Involved Collectives' }),

      List({ list: artists, title: 'Represented Artists' }),
    ]),

    Partners(),
  ]),
]
