// object  hero

const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceRoll: 6
}
// object  hero

const monster = {
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceRoll : 4
}



// function to render character cards
function renderCharacter(data){
const {elementId, name, avatar, health, diceRoll }= data
  document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
    </div>`;   
}
// render hero and monster character cards
renderCharacter(hero)
renderCharacter(monster)
    
