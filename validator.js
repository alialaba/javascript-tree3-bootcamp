const validateCreditNumber = (cardNumber) => {
    if (cardNumber.length < 16 || cardNumber.length !== isNaN) {
        return "invalid";
    } else {
        return "valid";
    }
}
console.log(validateCreditNumber('9999777788880000'));