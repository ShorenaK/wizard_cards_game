import characterData  from "./data.js"
import Character  from "./Character.js"
import { getDiceRollArray } from "./utils.js"
// new instance of class 


// function for button 
function attack(){
    wizerd.getDiceHtml()
    orc.getDiceHtml()
    wizerd.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizerd.currentDiceScore )
    if(wizerd.dead || orc.dead){
        endGame()
    }
    render()
}

function endGame(){
    console.log('Game is over')
}
document.getElementById('attack-button').addEventListener('click', attack)


function render (){
    document.getElementById('hero').innerHTML = wizerd.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}


const wizerd = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
