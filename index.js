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

// function to render character cards
function renderCharacter(data){
    const {elementId, name, avatar, health, diceRoll, diceCount }= data
    let diceHtml = ''

        for (let j = 0; j < diceRoll.length; j++){
            diceHtml += `<div class="dice">${diceRoll[j]}</div>`
        
    }
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
    
