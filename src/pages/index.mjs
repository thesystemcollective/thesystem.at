export const state = {
  logotext: 'Collective',
}

export const View = ({ artists, collectives }) => [
  div({ class: 'content' }, [
    Picture({ src: '/img/hero', type: 'jpg', height: 707, width: 1000 }),

    div({ class: 'manifest' }, [
      div({ class: 'Slogan' }, [
        "We don't need space, time is irrelevant, objects stay as useful as the user.",
      ]),

      p([
        'We are ',
        i('TheSystemCollective'),
        ', a syndicate of independent',
        ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
        ' collectively using art and technology to transform our world.',
      ]),
      p([
        'We believe in a literal definition of “common goods”',
        ' and transform public space into a bearer of art,',
        ' turning those works of art into an integral part of urban culture.',
      ]),

      Picture({ src: '/img/artificialmuseum_map', type: 'jpg', height: 500, width: 1000 }),

      div({ class: 'Slogan' }, 'We are timeless, have unlimited space and are always open to the public.'),

      p([
        'The cultural mission of ',
        i('TheSystemCollective'),
        ' is the creation, procurement, research, dissemination and conservation of (digital) art for the ',
        b(Link({ to: 'https://artificialmuseum.com/', text: 'Artificial Museum' })),
        ', a time space continuum made ',
        b('manifest'),
        ', created to make art accessible to everyone, both at home and abroad.',
      ]),

      p('The intermixture of virtual, imaginary worlds with reality is our method, allowing works of art to freely be placed in public spaces.'),

      p(i('“Art is not the way to more democracy and equality, but art can be the impetus to think.”')),

      Picture({ src: '/img/artificialmuseum_preview_litto_hrlitto', type: 'jpg', height: 360, width: 1000 }),

      Picture({ src: '/img/artificialmuseum_preview_zirkusmops_metzgereimops', type: 'jpg', height: 360, width: 1000 }),
      Picture({ src: '/img/artificialmuseum_preview_stefansturzer_systemsandhumans', type: 'jpg', height: 360, width: 1000 }),

      // Agenda2021(),
    ]),

    Partners(),
  ]),
]
