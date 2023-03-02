import characterData  from "./data.js"

import { Character } from "./character.js"

function render (){
    document.getElementById(wizerd.elementId).innerHTML = wizerd.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}
const wizerd = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()




