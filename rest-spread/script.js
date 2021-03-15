// Opdracht : Rest Parameter and Spread Operator

// Je gaat 2 functies schrijven

/*
Functie 1:

    Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
    De functie accepteert meerdere argumenten
    Gebruik de rest parameter om ervoor te zorgen dat je functie alle argumenten als een array behandelt.
*/

const add = (...arg) => {
  return arg.reduce((acc, cValue) => {
    return acc + cValue;
  });
};


console.log(add(1, 2, 3, 4, 5));


/*
Functie 2:

    Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
    De functie accepteert 1 argument, namelijk een array van cijfers
    Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.
*/

const addSpread = (x, y, z) => {
  return x + y + z;
}

const numbers = [2, 4, 6];

console.log(addSpread(...numbers));
