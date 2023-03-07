import characterData  from "./data.js"
import Character  from "./Character.js"
import { getDiceRollArray } from "./utils.js"
// new instance of class 

let monstersArray = ["orc", "demon", "goblin"];


function getNewMontser(){
     //characterData[orc]
    const nextMonsterData = characterData[monstersArray.shift()]
   return  nextMonsterData ? new Character(nextMonsterData) : {}
}
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
    const endMessage = wizerd.health === 0 && orc.health === 0 ?  
     `"No victors - all creatures are dead"`
      : wizerd.health > 0 ? `"The Wizard Wins"`
      : `"The Orc is Victorious"`
      const endEmoji = wizerd.health > 0 ? "🔮" : "☠️"
      document.body.innerHTML = 
      `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>`
}
document.getElementById('attack-button').addEventListener('click', attack)


function render (){
    document.getElementById('hero').innerHTML = wizerd.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

 
const wizerd = new Character(characterData.hero)
let monster = getNewMontser()

render()
