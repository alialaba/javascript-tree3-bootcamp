const cartForParty = {
    chips: 1.75,
    drinks: 0.99,
    meats: 2.75,
    chickens: 1.99,
    pepperSoup: 0.79,

}

const calculateTotalPrice = (cartForParty) => {
    let sum = 0;
    for (let total in cartForParty) {
        sum += (cartForParty[total])
    }
    return `$${sum}`;
}
console.log(calculateTotalPrice(cartForParty))