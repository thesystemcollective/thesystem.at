export const View = () => 
  Link({ class: 'ArtificialMuseumLink', to: 'https://artificialmuseum.com', text: 'Visit the Artificial Museum' })

export const style = vars => ({
  backgroundColor: vars.background.light,
  color: vars.text.light,
  display: 'inline-block',
  fontSize: '20px',
  padding: '20px',
  margin: '50px 0',
  textDecoration: 'none',
  whiteSpace: 'normal',
  boxShadow: '#888 3px 3px',

  '&:hover': {
    color: vars.text.light,
    textDecoration: 'underline',
  },

  '.light &&': {
    backgroundColor: vars.background.dark,
    color: vars.text.dark,

    '&:hover': {
      color: vars.text.dark,
    }
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    fontSize: '25px',
  },
})