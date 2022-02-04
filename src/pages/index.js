export const View = state => [
  div({ class: 'PageHeader' }, [Slogan({ subTitle: 'Kollektiv' }), ArtificialMuseumLink()]),

  div({ class: 'Game' }, [
    'Our Game with artificial museum logo',
  ]),

  div({ id: 'manifest', class: 'Manifest' }, [
    h2('Manifest'),

    p([
      'The ',
      i('SystemKollectiv'),
      ' is a syndicate of independent',
      ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
      ' collectively using art and technology to transform our world.',
      ' We believe in a literal definition of "common goods",',
      ' and convert public spaces into an ',
      Link({ to: 'https://artificialmuseum.com', text: 'Artificial Museum' }),
      ', ready for artists to freely position their art.',
    ]),

    p('Our method is an intermixture of universes, physical, virtual and imaginary.'),

    p(i("We don't need space, time is irrelevant, objects stay as useful as the user.")),

    p('To fulfill this obligation, we:'),

    h3('Create:'),
    p('We manifest art as digital expression and representation of real and imagined phantasms.'),
    p('These artifacts are not meant to be replicas, by using the unique possibilities of mixed reality, art can come alive and allow a multi - dimensional experience to the beholder.'),

    h3('Procure:'),
    p('To commission works for our collection, we actively engage and collaborate with artists, collectives and institutions.'),
    p('We host regular educational workshops, teaching the fundamentals needed to create artifacts for the metaverse.'),
    p('We support our collaboration partners, both institutions and artists, in the procurement of public and / or private funding for their art projects and exhibitions.'),

    h3('Research:'),
    p('There is a constant flow of new concepts to explore when you build something that does not exist.Our research covers a host of topics, including novel artistic techniques, game theory regarding user retention and monetization, censorship resistance for our platform and artifacts and many more.'),

    h3('Distribute:'),
    p(['Our ', Link({ to: 'https://artificialmuseum.com', text: 'web app' }), ' is our portal hub, providing visitors, artists, collectives and institutions with ways to collaborate, contribute, connect, create and collect.']),

    h3('Preserve:'),
    p('The Artificial Museum aims to create a public and permanent record, preserving moments and objects in time and space.'),

  ]),

  Partners(),

  BigPic({ name: '/bigpic', type: 'png' }),

  div({ id: 'collaborations', class: 'Collaborations' }, [
    h2('Call for Collaboration'),
    h3('2030: Game over or Replay?'),
    p('This is our final chance to act.'),

    b('Hello world.'),
    p('We are the SystemKollektiv.'),
    p('Our mission is to create, procure, research, distribute, and preserve digitized art in the Artificial Museum.'),

    h3('Mission'),
    p('We collaborate with artists, curators, organizers, collectives and institutions, expanding our network and helping us in our mission: augmenting our world with new ideas for change and forming the cultural heritage of the future.'),

    p('We invite artists of all trades, both analog and digital, to create a digital augmented reality artifact and become a permanent part of our museum.'),

    h3('Motivation'),
    p('We are already, more than ever, communicating and interacting in spaces that try to emulate an imaginary reality, and the experience of virtual reality seems to be coming closer and closer to something indistinguishable from and interwoven with our material spaces, an inevitable future of humanity.'),

    p('Whatever the future may actually bring, we believe that we should try to shape technologies, social revolutions, ideas and spaces, so that humankind will be enabled to reimagine itself.'),
    p('We want to finally be able to process changes to society by representing ideas and critiques and taking a stance on them.'),

    p('There is not much time left until the beginning of 2030. Creative eyes can already catch a glimpse of the needed changes, a vision for humanity’s future that is reachable, sustainable and, frankly, better than what we have now.Those same eyes also see the alternative future of climate disasters, social disarray and division, markets completely detached from reality and humanity enslaved by the machine.'),

    p(['There are only two possible endings to this scenario: ', b('Game Over or Replay.')]),

    p('Our obligation as artists, technologists, scientists and other creatives is displaying those visions and making the needs for change obvious and ubiquitous.'),
    p('By adding Imaginariums to reality we are not only enabled to connect people all over the world, we can facilitate the sharing of artistic work on an unlimited virtual version of earth.'),
    p('It allows the visitor to partake in exhibitions all over the earth, and soon maybe even on other planets, while the artists are not being limited by choice of venue, budget or other real world problems negatively interfering with the display of art'),

    h2('Participate'),

    p([
      'We are looking for institutional partners. ',
      ' Universities, museums, hackspaces and artist collectives are invited to shape the future of the Artificial Museum with us.',
    ]),

    p([
      'We can help with funding applications and handle the technical realisation of exhibitions,',
      ' our partners handle the local open calls and coordinate with the artists.',
    ]),
  ]),

  div({ class: 'Participate' }, [
    h2('How to participate'),

    p('blabla'),
    p('blabla'),
    p('blabla'),
  ]),

  Commissioned(),

]
