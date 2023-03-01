// object  hero
const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceCount: 3
}
// object  hero
const monster = {
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceCount: 1
}
function getDiceRollArray(diceCount){
   return  new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6 +1 )
    })
} 

// function for maping to map over the getDiceRollArray function
function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}
// function to render character cards
function renderCharacter(data){
    const {elementId, name, avatar, health, diceCount }= data

    let diceHtml = getDiceHtml(diceCount)
    document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`   
}

// render hero and monster character cards
renderCharacter(hero)
renderCharacter(monster)


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

const endOfLevelBosses = new Array(10).fill('🍀').map(function(moosh){
    return moosh
}).join(' ')

// constructor class 
console.log(endOfLevelBosses)