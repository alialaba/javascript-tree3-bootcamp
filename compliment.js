const giveCompliment = (name) => {
    let compliments = ["great", "awesome", "superb", "wonderful", "fantastic", "supersmart", "brillant", "incredible", "nice", "lovely"];
    let randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    // console.log(randCompliment);
    console.log(`You are ${randCompliment}, ${name}!`);
}
giveCompliment("ade")
giveCompliment("ali");
giveCompliment("ada")