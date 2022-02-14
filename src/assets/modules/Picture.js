export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Picture')

  const { name, extension = 'jpg', sources = ['webp'], ...args } = props

  if (!args.alt) {
    args.role = 'presentation'
    args.alt = ''
  }

  return picture({ class: 'Picture' }, [
    ...sources.map(ext =>
      source({
        type: `image/${ext}`,
        srcset: lib.replaceSlashSlash(`${name}.${ext}`),
      }),
    ),

    img({
      ...args,
      loading: 'lazy',
      src: lib.replaceSlashSlash(`${name}.${extension}`),
    }),
  ])
}

export const propTypes = {
  Picture: [
    { key: 'name', type: 'string', required: true },
    { key: 'ext', type: 'string' },
    { key: 'class', type: 'string' },
    { key: 'width', type: ['number', 'string'] },
    { key: 'height', type: ['number', 'string'] },
    { key: 'alt', type: 'string' },
    { key: 'sources', type: 'array' },
  ],
}
