const validateCreditNumber = (cardNumber) => {
    let splitNumber = cardNumber.split("")
    let sumOfCardNumber = splitNumber.reduce((a, b) => +a + +b);


    if (cardNumber.length < 16) {
        return `The Input ${cardNumber} must be 16 characters`
    } else if (sumOfCardNumber < 16) {
        return `sum of ${cardNumber} must be greater than 16`
    } else if (!Number(cardNumber)) {
        return `the input ${cardNumber} characters must be numbers`;
    } else if (cardNumber[cardNumber.length - 1] % 2 !== 0) {
        return `the input ${cardNumber} last number must be even`;
    } else {
        return `Success! The input ${cardNumber} is a valid credit card number!`
    }

}
console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('6666666666661666'))