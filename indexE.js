
// exersises 
// //  returning function inside of function 

// // the first function 

// function getLottoNumbers(){
//     // creating empty array 
//     const winningNums = []
//     // looping over the array 
//     for (let i = 0; i < 6; i ++){
//         winningNums.push(Math.floor(Math.random() * 60 + 1))
//     }
//     // returns array with the random numbers form 0 - 100 
//     return winningNums
// }

// // creating another function to call getLottoNumbers function 

// function getWinningNumbersHtml(){
//     return getLottoNumbers().map(function(num){
//         // return `<div class="number">${num}</div>`
//         return num
//     }).join(' ')
// }

// console.log(getWinningNumbersHtml())

// // document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml().join(' )


// const endOfLevelBosses = []

// for (let i = 0; i < 10; i ++){
//  endOfLevelBosses.push(undefined)
// }

// const endOfLevelBosses = new Array(10).fill('🍀').map(function(moosh){
//     return moosh
// }).join(' ')
// console.log(endOfLevelBosses)

// constructor class 

