export const View = url =>
  div({ class: 'VideoContainer' }, [
    //Img({ src: '/liveStream.png', height: 388, width: 621 }),
    // VideoEmbed({ src: 'Dy36d_cNQq4' }), // litto
    // VideoEmbed({ src: 'qwLkYQc8Pn0' }), // dagmar
    // VideoEmbed({ src: 'OviYhQ_Lo2Y' }), // selina
    // VideoEmbed({ src: 'eERg-H03cvY' }), // sandkasten
    // VideoEmbed({ src: 'tzPXBR5AYJs' }), // work
    // VideoEmbed({ src: 'd-cfixGDwNQ' }), // demo video
    VideoEmbed({ src: 'D6i50aYe-X8' }), // no walls video
  ])

export const style = vars => ({
  zIndex: 1,
  position: 'relative',
  margin: '0 0 2em',

  img: {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
  },

  '.VideoEmbed': {
    paddingTop: '0',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: '50vw',
    height: '28.125vw',
    float: 'right',
    margin: '2vw 2vw 4em 0',
    top: 0,
    right: 0,

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
})
