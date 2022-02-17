export const View = (p, children) => {
  const props = {
    class: 'Section',
  }

  if (p.class) {
    if (!p.class.includes('Section')) {
      props.class += ` ${p.class}`
    } else {
      props.class = `Section ${p.class}`
    }
  }

  return section(props, div({ class: 'Container' }, children))
}
