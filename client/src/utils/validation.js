const validation = (values) => {
    let errors = {};

    if (!values.errors) {
        errors.street = 'street is required'
    }
    if (!values.errors) {
        errors.city = 'street is required'
    }
    if (!values.errors) {
        errors.city = 'street is required'
    }
    if (!values.errors) {
        errors.postCode = 'street is required'
    }
    if (!values.errors) {
        errors.country = 'street is required'
    }
}

export default validation