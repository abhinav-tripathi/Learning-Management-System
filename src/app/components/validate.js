const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 2) {
    errors.username = 'Minimum be 2 characters or more'
  }

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 2) {
    errors.name = 'Minimum be 2 characters or more'
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Required'
  } else if (values.contactNumber.length < 10) {
    errors.contactNumber = 'Contact number not valid'
  }

  if (!values.POC) {
    errors.POC = 'Required'
  } else if (values.POC.length < 2) {
    errors.POC = 'Minimum be 2 characters or more'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 2) {
    errors.password = 'Minimum be 2 characters or more'
  }
  return errors
}

export default validate;