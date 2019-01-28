const validateContactForm = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } 
  return errors
}

export default validateContactForm;