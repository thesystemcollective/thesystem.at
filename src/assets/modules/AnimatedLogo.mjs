export const View = (state) => {
  const props = {
    class: 'AnimatedLogo',
  }

  if (lib.isIos()) {
    props.class += ' ios'
  }

  return div(props, [
    img({ class: 'HeroLogo', onload: actions.animateLogo, src: '/hero-logo.svg', height: 400, width: 400 }),
    canvas({ class: 'HeroCanvas', height: 400, width: 400 }),
  ])
}

export const actions = {
  animateLogo: state => {
    if (!lib.isIos()) {
      lib.animatedLogo()
    }

    return state
  }
}

export const style = v => ({
  position: 'relative',

  '.HeroCanvas': {
    maxWidth: '100%',
    width: '250px',
    height: 'auto',
    margin: '0 auto 1em',
    display: 'block',
  },

  '.HeroLogo': {
    height: 'auto',
    left: 'auto',
    maxHeight: 'inherit',
    maxWidth: 'inherit',
    position: 'absolute',
    right: '100vw',
    width: '300px',
  },

  '&.ios': {
    '.HeroCanvas': {
      display: 'none',
    },

    '.HeroLogo': {
      maxWidth: '100%',
      width: '250px',
      height: 'auto',
      margin: '0 auto 1em',
      display: 'block',
      position: 'relative',
      right: 'auto',
    },
  },

  [`@media screen and (min-width: ${v.widths.tablet})`]: {
    '.HeroCanvas': {
      float: 'left',
      margin: '-4vw 2em 0 -3vw',
      width: '30%',
    },
    '&.ios': {
      '.HeroLogo': {
        float: 'left',
        margin: '0 2em 0 0',
        width: '30%',
      },
    },
  },
  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    '.HeroCanvas': {
      margin: '-4vw 2em 0 -40px',
    },
  },
})

export const global = {
  actions: {
    animateLogo: true,
  },
}

