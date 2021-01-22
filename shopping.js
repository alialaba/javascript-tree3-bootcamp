let shoppingCart = ["bananas", "milk"];
const addToShoppingCart = (item) => {
    shoppingCart.push(item);
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart.length > 3)
            shoppingCart.shift();
        return "You bought " + shoppingCart;
    }

}
console.log(addToShoppingCart("Chocolate"));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart("Tea"));