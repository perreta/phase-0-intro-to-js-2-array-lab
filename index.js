// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//destructivelyAppendCat
function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
} 

//destructivelyPrependCat
function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}

//destructivelyRemoveLastCat
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

//destructivelyRemoveFirstCat
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

//appendCat
function appendCat(name) {
    const copycats = [...cats, name]
    return copycats
}

//prependCat
function prependCat(name) {
    const copycats = [name, ...cats]
    return copycats
}

//removeLastCat
function removeLastCat() {
    const copycats = cats.slice(0,-1)
    return copycats
}

//removeFirstCat
function removeFirstCat() {
    const copycats = cats.slice(1)
    return copycats
}

