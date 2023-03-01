// object  hero
const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceRoll: [3, 1, 4], 
    diceCount: 3
}
// object  hero
const monster = {
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceRoll : [4], 
    diceCount: 1
}
function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for (let i = 0; i < diceCount; i ++){
    newDiceRolls.push(Math.floor(Math.random() * 6 +1 )) 
    }
    return newDiceRolls
}

// function for maping to map over the getDiceRollArray function
function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join(' ')
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