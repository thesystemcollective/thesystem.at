export const View = ({ src, type = 'jpg' }) =>
  picture({ role: "presentation" }, [
    source({ srcset: `${src}.webp`, type: "image/webp", }),
    img({ loading: "lazy", src: `${src}.${type}`, role: "presentation" }),
  ])

