const validatePassword = (input) => {
    // min 8 letters with alphabet lower, upper case and number
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(input);
};

const validateEmail = (input) => {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(input);
};

const numbersOnly = (input) => {
    return (/^[0-9]+$/).test(input);
};

export {validateEmail, validatePassword, numbersOnly};