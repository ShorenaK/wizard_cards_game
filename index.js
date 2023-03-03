import characterData  from "./data.js"
import Character  from "./Character.js"

function render (){
    document.getElementById('hero').innerHTML = wizerd.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}
const wizerd = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
 function attack(){
    console.log('clicked')
 }
document.getElementById('attack-button').addEventListener('click', attack)



