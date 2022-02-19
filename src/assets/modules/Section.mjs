export const View = (p, children) => {
  const { class: cl, ...props } = p

  if (cl) {
    if (!cl.includes('Section')) {
      props.class = `Section ${cl}`
    } else {
      props.class = cl
    }
  } else {
    props.class = 'Section'
  }

  return section(props, div({ class: 'Container' }, children))
}
