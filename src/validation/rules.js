

export const minLength = (length, name) => {
    return value => value[name].length !== 0 && value[name].length <= length && `${name} must be at least ${length} characters`;
}

export const maxLength = (length, name) => {
    return value => value[name].length >= length && `${name} must be at most ${length} characters`;
}

export const isEmail = (name) => {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return value => value[name].length !== 0 && !EMAIL_REGEXP.test(value[name]) && `Email is required and format should be john@doe.com`;
}

export const isPhoneNumber = (name) => {
    const regex = /^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))$/;
    return value => value[name].length !== 0 && !regex.test(value[name]) && `Invalid Phone Number`;
}

export const isValidPassword = (name) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/
    return value => value[name].length !== 0 && !regex.test(value[name]) && `Your password must contain 1 uppercase, 1 lowercase , 1 special character & 1 number`;
}

export const groupNameValidation = (name) => {
    const regex = /^(?:[A-Za-z]+)(?:[A-Za-z'0-9 _-]*)$/
    return value => value[name].length !== 0 && !regex.test(value[name]) && `Invalid group name`;
}