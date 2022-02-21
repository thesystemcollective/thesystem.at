export const View = (state) => {
  let cl = 'HeroLogo'
  console.log({ lib })

  if (typeof navigator !== 'undefined' && lib.isIos()) {
    cl += ' ios'
  }

  return div({ class: 'AnimatedLogo' }, [
    img({ class: cl, onload: actions.animateLogo, src: '/hero-logo.svg', height: 400, width: 400 }),
    canvas({ class: 'HeroCanvas', height: 400, width: 400 }),
  ])
}

export const actions = {
  animateLogo: state => {
    if (!lib.isIos()) {
      console.log('animate')
      lib.animatedLogo()
    }

    return state
  }
}

export const style = v => ({
  position: 'relative',

  '.HeroCanvas, .HeroLogo.ios': {
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

  [`@media screen and (min-width: ${v.widths.tablet})`]: {
    '.HeroCanvas, .HeroLogo.ios': {
      float: 'left',
      margin: '0 2em 0 0',
      width: '30%',
    },
  }
})

export const global = {
  actions: {
    animateLogo: true,
  },
}

