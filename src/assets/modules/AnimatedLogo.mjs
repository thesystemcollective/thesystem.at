export const View = (state) => {
  return div({ class: 'AnimatedLogo' }, [
    img({ class: 'HeroLogo', onload: actions.animateLogo, src: '/hero-logo.svg', height: 400, width: 400 }),
    canvas({ class: 'HeroCanvas' }),
  ])
}

export const actions = {
  animateLogo: state => {
    console.log('animate Logo')

    lib.animatedLogo()

    state.clicked = true

    return { ...state }
  }
}

export const global = {
  actions: {
    animateLogo: true,
  },
}

export const style = {
  canvas: {
    position: 'absolute',
  },
}