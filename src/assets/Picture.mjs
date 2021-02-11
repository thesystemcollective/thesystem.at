export const View = ({ class: cl, src, type = 'jpg', alt, width, height }) => [
  picture({ class: 'Picture' }, [
    source({ type: 'image/webp', srcset: `${src}.webp` }),
    Img({ src: `${src}.${type}`, alt, width, height }),
  ]),
]

export const style = {
  display: 'inline-block',
  width: '100%',

  img: {
    maxWidth: '95%',
    float: 'right',
  },

  '&:nth-of-type(2n)': {
    img: {
      float: 'left',
    },
  },
}
