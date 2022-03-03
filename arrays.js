/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = []

backpack.push('shield')
backpack.push('sword')
backpack.push('food')

// console.log(backpack)

backpack.splice(1, 1)
// console.log(backpack)

let furCoat = 'fur coat'

backpack.push(furCoat)
// console.log(backpack)

backpack.pop()

// console.log(backpack.length)
backpack.push('flint', 'blanket', 'knife', 'toothbrush')
// console.log(backpack)

let backpack2 = backpack.splice(2, 3)
// console.log(backpack)
// console.log(backpack2)

// console.log(backpack2[0])
// console.log(backpack2[1])
// console.log(backpack2[2])

backpack2.push('water', 'more food')

// for (let i = 0; i < backpack2.length; i++){
//     console.log(backpack2[i])
// }

// for (let i = 0; i < 3; i++){
//     console.log(backpack2[i])
// }

backpack.pop()

// if(backpack.length >= 3){
//     for(let i = 0; i < 3; i++){
//         console.log(backpack[i])
//     } 
// } else {
//     for(let i = 0; i < backpack.length; i++){
//         console.log(backpack[i])
//     }
// }

let guessMe = 32

while (guessMe < 100) {
    console.log('--------------------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5, added 25')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3, subtracted 27')
        guessMe -= 27
    } else {
        console.log('guessMe is not divisible by 3, 4, or 5, added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`added 22, guessMe is now ${guessMe}`)
}

//this is a comment