import characterData  from "./data.js"
import Character  from "./Character.js"
import { getDiceRollArray } from "./utils.js"

function render (){
    document.getElementById('hero').innerHTML = wizerd.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}
// new instance of class 
const wizerd = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()


// function for button 
 function attack(){
 wizerd.getDiceHtml()
 orc.getDiceHtml()

  render()
 }
document.getElementById('attack-button').addEventListener('click', attack)



