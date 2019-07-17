// Code your solutions in this file


function writeCards(nameArray, event) {
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = `Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`
    }
    return nameArray
}

function countdown(i) {
    while (i >= 0) {
        console.log(i)
        i--
    }
}