export const View = ({ name, type = 'jpg' }) =>
  picture({ role: 'presentation' }, [
    source({ srcset: `${name}.webp`, type: 'image/webp' }),
    img({ loading: 'lazy', src: `${name}.${type}`, role: 'presentation' }),
  ])
