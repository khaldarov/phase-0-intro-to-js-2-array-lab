// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
}
//
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
//
function destructivelyRemoveLastCat() {
    cats.pop()
}
//
function destructivelyRemoveFirstCat() {
    cats.shift()
}
//
function appendCat() {
    const copyCat0 = [...cats]
    // console.log(copyCat0)
    copyCat0.push("Broom")
    // console.log(copyCat0)
    // console.log(cats)
    return copyCat0
}
console.log(appendCat())
//
function prependCat() {
    const copyCat1 = [...cats]
    copyCat1.unshift("Arnold")
    return copyCat1
}
//
function removeLastCat() {
    const copyCat2 = [...cats]
    copyCat2.pop()
    return copyCat2
}
//
function removeFirstCat() {
    const copyCat3 = [...cats]
    copyCat3.shift()
    return copyCat3
}