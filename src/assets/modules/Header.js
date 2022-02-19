export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Branding' }, [
      div(
        { class: 'Logo' },
        svg({ viewBox: "0 0 80 80", width: 60, height: 60 }, [
          path({ d: "M50.73,12.94v8.6h7.65V58.46H50.73v8.6H67.11V12.94Z", fill: "#f0f0f0" }),
          path({ d: "M29.27,67.06v-8.6H21.62V21.54h7.65v-8.6H12.89V67.06Z", fill: "#f0f0f0" }),
          path({
            d: "M31.17,44.23V43a6.94,6.94,0,0,1,.53-2.91,8,8,0,0,1,1.86-2.43,10.44,10.44,0,0,0,1.7-2,4,4,0,0,0,.49-2,2.35,2.35,0,0,0-.59-1.71,2.28,2.28,0,0,0-1.67-.58,5.89,5.89,0,0,0-2.1.41,14,14,0,0,0-2.24,1.18l-1.66-3.61a14.29,14.29,0,0,1,3.09-1.52,9.93,9.93,0,0,1,3.29-.56,6.7,6.7,0,0,1,4.84,1.63,5.87,5.87,0,0,1,1.68,4.41,7.09,7.09,0,0,1-.81,3.59,13.72,13.72,0,0,1-2.41,2.93,13.35,13.35,0,0,0-1.25,1.35,3.42,3.42,0,0,0-.56,1.06,4.71,4.71,0,0,0-.14,1.2v.83Zm-.73,5.66a2.79,2.79,0,0,1,.76-2.14A3,3,0,0,1,33.28,47a2.79,2.79,0,0,1,2,.7A2.83,2.83,0,0,1,36,49.89,2.9,2.9,0,0,1,35.28,52a2.76,2.76,0,0,1-2,.73,2.93,2.93,0,0,1-2-.73A2.74,2.74,0,0,1,30.44,49.89Zm17.34-5.66H43.73L43,27.58h5.55ZM43,49.89a2.83,2.83,0,0,1,.75-2.14A2.86,2.86,0,0,1,45.77,47a2.52,2.52,0,0,1,2.74,2.85A2.83,2.83,0,0,1,47.75,52a2.78,2.78,0,0,1-2,.73A2.6,2.6,0,0,1,43,49.89Z",
            fill: "#f0f0f0"
          }),
        ]),
      ),

      div({ class: 'Slogan' }, [p(b('hello world')), p('we are the SystemKollektiv')]),
    ]),

    menu && Menu({ url, hash, menu }),
  ])
}

export const style = vars => ({
  width: '100%',
  zIndex: 1,
  fontSize: '15px',

  '.Branding': {
    display: 'inline-block',
  },

  '.Logo': {
    float: 'left',
    height: '2em',
    margin: '0 1.5em 0 0.5em',

    svg: {
      maxHeight: '100%',
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },

  '.Slogan': {
    float: 'left',

    p: {
      lineHeight: 1,
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    margin: '0.5em 0 0',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    position: 'sticky',
    top: 0,
    backgroundColor: vars.background.dark,
    padding: '0.5em 0',

    '.light &&': {
      backgroundColor: vars.background.light,
    },

    '.Branding': {
      float: 'left',
    },
    '.Menu': {
      float: 'right',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'hash', type: 'string' },
    { key: 'url', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
