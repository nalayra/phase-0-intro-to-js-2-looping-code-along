// Code your solutions in this file
const names = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        names.splice(i, 1, (`Thank you, ${names[i]}, for the wonderful ${event} gift!`));
        debugger;
    }
    return names;
}

writeCards(["Lisa", "Kaitlyn", "Jan"], "birthday")

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}