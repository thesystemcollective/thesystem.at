export const View = (props, children) => {
  const { until = 'January 01, 2030 00:00:00 UTC', title } = props

  const waitFor = new Date(until).getTime()
  const now = new Date().getTime()
  let { d, h, m, s } = helpers.dhm(until)

  if (h < 10) {
    h = `0${h}`
  }
  if (m < 10) {
    m = `0${m}`
  }
  if (s < 10) {
    s = `0${s}`
  }

  return div({ class: 'Countdown' }, [
    div({ class: 'Placeholder' }, [
      div({ class: 'Background' }, [
        title && h2(title),
        waitFor <= now && children,

        d > 0 && p({ class: 'Day' }, `${d} DAYS`),
        waitFor > now && p({ class: 'Hour' }, `${h}:${m}:${s}`),
      ]),
    ]),
  ])
}

export const style = vars => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',

  h2: {
    margin: 0,
    padding: 0,
  },

  '.Placeholder': {
    textAlign: 'center',
    top: '28%',
    position: 'relative',
    margin: '0 auto',
  },

  '.Background': {
    background: `${vars.background.dark}80`,
    borderRadius: '1em',
    textAlign: 'center',
    padding: '0.5em',
    fontSize: '1.5em',
    display: 'inline-block',
  },

  '.Day, .Hour': {
    fontWeight: 'bold',
    color: vars.replayColor,
    whiteSpace: 'nowrap',
  },
  '.Day': {
    margin: '0 2% 0 0',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    fontSize: '1.3em',

    '.Placeholder': {
      top: '35%',
    },

    '.Day, .Hour': {
      display: 'inline',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    fontSize: '1.5em',

    '.Placeholder': {
      top: '37%',
    },
  },
  [`@media screen and (min-width: ${vars.widths.desktop})`]: {
    fontSize: '3em',
  },
})

export const helpers = {
  dhm: to => {
    const now = new Date().getTime()

    if (to instanceof Date) {
      to = to.getTime()
    } else if (typeof to === 'string') {
      to = new Date(to).getTime()
    }

    const ms = to - now

    const msInSecond = 1000
    const msInMinute = 60 * msInSecond
    const msInHour = 60 * msInMinute
    const msInDay = 24 * msInHour

    const d = Math.floor(ms / msInDay)

    const dayMod = ms % msInDay
    const h = Math.floor(dayMod / msInHour)

    const hourMod = ms % msInHour
    const m = Math.floor(hourMod / msInMinute)

    const minuteMod = ms % msInMinute
    const s = Math.floor(minuteMod / msInSecond)

    return {
      d,
      h,
      m,
      s,
      ms,
    }
  },

  subscribe: (dispatch, action) => {
    setInterval(() => {
      dispatch(action, { arg: Math.random() * 100 })
    }, 1000)
  },
}

export const actions = {
  onSubscription: (state, e) => ({
    ...state,
    arg: e.arg,
  }),
}

export const subscriptions = [['helpers.subscribe', 'actions.onSubscription']]

export const global = {
  actions: {
    onSubscription: true,
  },
}
