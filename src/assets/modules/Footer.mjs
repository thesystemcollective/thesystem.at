import { vars } from '../themes/thesystem/index.mjs'

export const View = state =>
  footer({ id: 'contact', class: 'Footer' }, [
    div({ class: 'Container' }, [
      svg({ class: 'logo', viewBox: '0 0 54 60', width: '60', height: '54' }, [
        path({ d: 'M0 0v60h18V50H9V10h9V0z', fill: '#ffffff' }),
        path({ d: 'M36 0v10h9v40h-9v10h18V0z', fill: '#ffffff' }),
      ]),

      div([
        h2('Impressum'),

        h3('Address:'),
        p('SystemKollektiv, z.H. Daniela Weiss'),
        p('Rembrandtstrasse 10'),
        p('1020 Wien'),
        p('Austria'),
      ]),

      h3('Represented by:'),
      p(Link({ to: 'https://litto.work', text: 'Litto / Daniela Weiss' })),
      p(Link({ to: 'https://jaeh.at', text: 'Jascha Ehrenreich' })),
      p(Link({ to: 'http://klauskrobath.com', text: 'Klaus Krobath' })),

      h3('Email:'),
      Link({
        class: 'Email',
        to: 'mailto:thesystemcollective@gmail.com',
        text: 'thesystemcollective@gmail.com',
      }),

      div({ class: 'Social' }, [
        Link(
          {
            to: 'https://www.instagram.com/theartificialmuseum/',
          },
          [
            svg({ viewBox: '0 0 512 512', height: '45' }, [
              path({
                fill: '#fafafa',
                d: 'M256 50l102 1c24 1 38 5 47 9a78 78 0 0129 18 78 78 0 0118 30c4 8 8 22 9 46 1 27 2 35 2 102l-2 102a139 139 0 01-9 47 83 83 0 01-47 47c-9 4-23 8-47 9-27 1-35 2-102 2l-102-2a140 140 0 01-47-9 78 78 0 01-29-18 78 78 0 01-18-29c-4-9-8-23-9-47-1-27-2-35-2-102l2-102c1-24 5-38 9-47a78 78 0 0118-29 78 78 0 0130-18c8-4 22-8 46-9a1750 1750 0 01102-1m0-46c-68 0-77 0-104 2a185 185 0 00-61 11 124 124 0 00-45 29 124 124 0 00-29 45 185 185 0 00-11 61c-2 27-2 36-2 104l2 104c1 27 5 45 11 61a124 124 0 0029 45 124 124 0 0045 29c16 6 34 10 61 11a1831 1831 0 00208 0 185 185 0 0061-11 129 129 0 0074-74c6-16 10-34 11-61 2-27 2-36 2-104l-2-104a185 185 0 00-11-61 124 124 0 00-29-45 124 124 0 00-45-29 185 185 0 00-61-11c-27-2-36-2-104-2z',
              }),
              path({
                fill: '#fafafa',
                d: 'M256 127a129 129 0 10129 129 129 129 0 00-129-129zm0 213a84 84 0 1184-84 84 84 0 01-84 84z',
              }),
              circle({ fill: '#fafafa', cx: '391', cy: '122', r: '30' }),
            ]),
          ],
        ),
        Link(
          {
            to: 'https://www.youtube.com/channel/UCBwKwgk_eU8w-ccmTOFXADQ',
          },
          [
            svg({ class: 'youtube', viewBox: '0 0 156 109', height: '30' }, [
              path({
                d: 'M152 17a20 20 0 00-13-14c-12-3-61-3-61-3S29 0 17 3A20 20 0 003 17C0 39-2 71 3 92a20 20 0 0014 14c12 3 61 3 61 3s49 0 61-3a20 20 0 0014-14c3-21 5-54-1-75z',
                fill: '#fafafa',
              }),
              path({ d: 'M62 78l41-23-41-24z', fill: '#0c0c0c' }),
            ]),
          ],
        ),

        Link({ to: "https://twitter.com/artificialmuseu" }, svg({ class: "twitter", height: 30, viewBox: "0 0 121 100" }, [
          path({ fill: "#fff", d: "M108.06 25.18c.07 1.06.07 2.12.07 3.2 0 32.76-24.73 70.53-69.95 70.53v-.02A69.15 69.15 0 0 1 .48 87.78a49.64 49.64 0 0 0 5.86.36A49.14 49.14 0 0 0 36.88 77.5 24.64 24.64 0 0 1 13.9 60.3c3.68.72 7.48.57 11.1-.43a24.75 24.75 0 0 1-19.73-24.3v-.31a24.25 24.25 0 0 0 11.16 3.1 24.94 24.94 0 0 1-7.6-33.1 69.6 69.6 0 0 0 50.66 25.9 24.93 24.93 0 0 1 7.12-23.68 24.47 24.47 0 0 1 34.78 1.08 49.07 49.07 0 0 0 15.62-6.02 24.82 24.82 0 0 1-10.81 13.7 48.58 48.58 0 0 0 14.12-3.9 50.22 50.22 0 0 1-12.27 12.85Zm0 0" }),
        ])),
      ]),
      // Credits(),
    ]),
  ])

export const style = v => ({
  backgroundColor: v.background.dark,
  clear: 'both',
  color: v.text.dark,
  margin: '2em 0 0',
  padding: '5em 0 .5em',
  position: 'relative',
  fontSize: '0.8em',

  h2: {
    padding: '0 0 0.2em',
  },

  h3: {
    fontSize: '1em',
  },

  '#Magic &&': {
    a: {
      color: v.link.dark,

      '&:hover': {
        color: v.link.hover.dark,
      },
    },
  },

  '.Container': {
    textAlign: 'left',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 5vw',
  },

  '.Credits': {
    textAlign: 'center',
  },

  '.Email': {
    fontSize: '0.9em',
  },

  'svg.logo': {
    float: 'right',
    height: 'auto',
    right: 0,
    width: '50px',

    path: {
      '&:first-child': {
        fill: vars.gameoverColor,
      },
      '&:last-child': {
        fill: vars.replayColor,
      },
    },
  },

  '.Social': {
    margin: '2em 0',

    a: {
      display: 'inline-block',
      margin: '0 20px 0 0',
    },

    svg: {
      '&.youtube, &.twitter': {
        margin: '0 0 8px 0',
      },
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    'svg.logo': {
      width: '100px',
    },
    '.Email': {
      fontSize: '1em',
    },
  },
})
