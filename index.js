

import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"]

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

/*
Challenge
1. Change the attack function so that when a monster dies, 
the next monster replaces it. If there are no more monsters,
call endGame(). 
2. Make sure that endGame() still gets called if the wizard
is killed.
*/

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    
        /*change the code below this line*/
    if(wizard.dead){
        endGame()
    }
    else if(monster.dead){
        if(monstersArray.length > 0){
            monster = getNewMonster()
            render()
        }
        else{
            endGame()
        }
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
            "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `
}

document.getElementById("attack-button").addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()
















// import characterData  from "./data.js"
// import Character  from "./Character.js"
// import { getDiceRollArray } from "./utils.js"
// // new instance of class 

// let monstersArray = ["orc", "demon", "goblin"];


// function getNewMontser(){
//      //characterData[orc]
//     const nextMonsterData = characterData[monstersArray.shift()]
//    return  nextMonsterData ? new Character(nextMonsterData) : {}
// }
// // function for button 
// function attack(){
//     wizerd.getDiceHtml()
//     monster.getDiceHtml()
//     wizerd.takeDamage(monster.currentDiceScore)
//     monster.takeDamage(wizerd.currentDiceScore )
//     render()
//     if(wizerd.dead){
//         endGame()   
//     }else if(monster.dead){
//         if(monster.length > 0 ){
//             monster = getNewMontser()
//             render()
//         }
//         else{
//             endGame()
//         }
//     }
// }

// function endGame(){
//     const endMessage = wizerd.health === 0 && monster.health === 0 ?  
//      `"No victors - all creatures are dead"`
//       : wizerd.health > 0 ? `"The Wizard Wins"`
//       : `"The monster is Victorious"`
//       const endEmoji = wizerd.health > 0 ? "🔮" : "☠️"
//       document.body.innerHTML = 
//       `<div class="end-game">
//         <h2>Game Over</h2>
//         <h3>${endMessage}</h3>
//         <p class="end-emoji">${endEmoji}</p>
//     </div>`
// }
// document.getElementById('attack-button').addEventListener('click', attack)


// function render (){
//     document.getElementById('hero').innerHTML = wizerd.getCharacterHtml()
//     document.getElementById('monster').innerHTML = monster.getCharacterHtml()
// }

 
// const wizerd = new Character(characterData.hero)
// let monster = getNewMontser()

// render()
