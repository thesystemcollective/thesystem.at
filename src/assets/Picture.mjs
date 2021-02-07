export const View = ({ src, type = 'jpg', alt, width, height }) => [
  picture([
    source({ type: 'image/webp', srcset: `${src}.webp` }),
    Img({ src: `${src}.${type}`, alt, width, height }),
  ]),
]