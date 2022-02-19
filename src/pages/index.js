export const View = state => [
  Section({ class: 'Hero' }, [
    // p(b('Hello World.')),
    // p('We are the SystemKollektiv'),

    p({ class: 'Branding Big' }, [
      'Our mission is to create, procure, research, distribute,',
      ' and preserve digitized art in the Artificial Museum.',
    ]),

    div(Link({ class: 'Button', to: 'https://artificialmuseum.com', text: 'VISIT OUR MUSEUM' })),
  ]),

  div({ class: 'MapArea' }, [
    Picture({ class: 'MapImage', name: 'map', extension: 'jpg', height: 434, width: 900 }),
    Picture({
      class: 'ArtifactImage1',
      name: 'art_01',
      extension: 'jpg',
      height: 800,
      width: 600,
    }),
    Picture({
      class: 'ArtifactImage2',
      name: 'art_02',
      extension: 'jpg',
      height: 600,
      width: 800,
    }),
  ]),

  section({ id: 'mission', class: 'Mission' }, [
    div({ class: 'GameOver SubSection' }, [
      div({ class: 'Container' }, [
        h2('MISSION'),

        p({ class: 'Medium' }, [
          'We collaborate with artists, curators, organizers, collectives and institutions,',
          ' expanding our network and achieving our shared objective:',
        ]),

        p({ class: 'Big' }, [
          'Augmenting our world with new ideas for change',
          ' and forming the cultural heritage of the future.',
        ]),

        p({ class: 'Medium' }, [
          'We invite artists of all trades, both analog and digital,',
          ' to create an augmented reality artifact and become a permanent part of our museum.',
        ]),

        div({ class: 'Spacer' }, [
          p([
            'We are already, more than ever,',
            ' communicating and interacting in spaces that try to emulate an imaginary reality,',
            // ' and the experience of virtual reality seems to be coming closer and closer to',
            ' something indistinguishable from and interwoven with our material spaces,',
            ' an inevitable future of humanity.',
          ]),

          p([
            'Whatever the future may actually bring,',
            ' we believe that we should try to shape',
            ' technologies, social revolutions, ideas and spaces,',
            ' so that humankind will be enabled to reimagine itself.',
          ]),

          // p([
          //   'We want to finally be able to process changes to society',
          //   ' by representing ideas and critiques and taking a stance on them.',
          // ]),

          p([
            'There is not much time left until the beginning of 2030.',
            ' Creative eyes can already catch a glimpse of the needed changes,',
            ' a vision for humanity’s future that is reachable, sustainable and,',
            ' frankly, better than what we have now.',
          ]),
          p([
            ' Those same eyes also see the alternative future of climate disasters,',
            ' social disarray and division,',
            ' markets completely detached from reality and humanity enslaved by the machine.',
          ]),
        ]),

        p({ class: 'Big Narrow' }, 'There are only two possible endings to this scenario:'),

        p({ class: 'Huge' }, 'GAME OVER'),
      ]),
    ]),

    div(
      { class: 'Replay SubSection' },
      div({ class: 'Container' }, [
        p({ class: 'Huge' }, 'REPLAY'),

        div({ class: 'Spacer Left' }, [
          p(
            'Our obligation as artists, technologists, scientists and other creatives is displaying those visions and making the needs for change obvious and ubiquitous.',
          ),
          p([
            'By adding imaginariums to reality we are able to connect people all over the world,',
            ' and facilitate the sharing of artistic work on a virtual version of earth.',
          ]),

          p(
            'It allows the visitor to partake in exhibitions all over the earth, and soon maybe even on other planets, while the artists are not being limited by choice of venue, budget or other real world problems negatively interfering with the display of art',
          ),
        ]),

        div({ class: 'Big Narrow Right' }, 'This is our final chance to act.'),

        div({ class: 'MoonBase' }, [
          Picture({ class: 'Moon', name: 'moon', extension: 'jpg', width: 1024, height: 1024 }),

          Countdown({ until: 'March 04, 2022 00:00:00', title: 'To the moon!' }, [
            h2('Countdown done!'),
            p('Show start game button here...'),
          ]),
        ]),
      ]),
    ),
  ]),

  Section({ id: 'manifest', class: 'Manifest' }, [
    h2('MANIFEST'),

    div({ class: 'Spacer' }, [
      p([
        'The ',
        i('SystemKollektiv'),
        ' is a syndicate of independent',
        ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
        ' collectively using art and technology to transform our world.',
        ' We believe in a literal definition of "common goods"',
        ' and convert public spaces into an ',
        Link({ to: 'https://artificialmuseum.com', text: 'Artificial Museum' }),
        ', ready for artists to freely position their art.',
      ]),

      p('Our method is an intermixture of universes, physical, virtual and imaginary.'),
    ]),

    p(
      { class: 'Big' },
      "We don't need space, time is irrelevant, objects stay as useful as the user.",
    ),

    // div(Link({ class: 'Button', to: '/manifest/', text: 'Read our manifest' })),
  ]),

  Section({ id: 'partners', class: 'Partners' }, [
    h2('PARTNERS'),

    ul(
      [
        { text: 'Barbis Ruder, AT', to: 'https://barbisruder.com/' },
        { text: 'CZIRP CZIRP, AT', to: 'http://www.czirpczirp.cc/' },
        { text: 'Echoræume, AT', to: 'https://echoraeume.klingt.org/' },
        { text: 'Experimental Game Cultures, AT' },
        {
          text: 'FH St. Poelten, AT',
          to: 'https://www.dieangewandte.at/jart/prj3/angewandte-2016/main.jart?rel=en&content-id=1621228720776',
        },
        { text: 'Hellerau, DE', to: 'https://www.hellerau.org/' },
        { text: 'Klub Solitaer, DE', to: 'https://www.klub-solitaer.de/' },
        // { text: 'Koli, TR' },
        { text: 'Medienwerkstatt006, AT', to: 'https://www.medienwerkstatt006.at/' },
        { text: 'PIXFILM Collective, CA', to: 'https://www.pixfilmcollective.com/' },
      ].map(partner => (partner.to ? li(Link(partner)) : li(partner.text))),
    ),
    p('and more to come...'),
  ]),

  Section({ class: 'Vr' }, Picture({ name: 'vr', extension: 'jpg', height: 720, width: 1300 })),

  Section({ id: 'participate', class: 'Participate' }, [
    h2('PARTICIPATE'),

    div({ class: 'Spacer' }, [
      p([
        'We are looking for institutional partners. ',
        ' Among others, collectives, hackspaces, universities, and museums',
        ' are invited to shape the future of the Artificial Museum with us.',
      ]),

      p([
        'We provide the technical infrastructure for artifacts and exhibitions,',
        ' our partners handle the open calls and coordinate with the artists.',
        // ' 95% of our collaborative funding applications in 2021 were successful.',
      ]),
    ]),

    div(Link({ class: 'Button', text: 'CONTACT US', to: 'mailto:thesystemcollective@gmail.com' })),
  ]),

  Commissioned(),
]
