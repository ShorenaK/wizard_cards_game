
const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4

function renderCharacter(elementId, name, avatar, health, diceRoll){
  document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
    </div>`;   
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)
    

//  const heroelementId = "hiro"
//  const heroname = "Wizrd"
//  const heroavatar = "images/wizard.png" 
//  const herohealth =  "60"
//  const herodiceScore = 6
 
//  const monsterelementId = "monster"
//  const monstername = "Orc"
//  const monsteravatar = "images/orc.png" 
//  const monsterhealth =  "10"
//  const monsterDiceScore = 4

//  function renderCharacter(elementId, name, avatar, health, diceScore){
//     document.getElementById(elementId).innerHTML = 
//     `<div class="character-card">
//     <h4 class="name">${name}</h4>
//     <img class="avatar" src="${avatar}"/>
//     <p class="health">health: <b> ${health}</b></p>
//     <div class="dice-container"><div class="dice">${diceScore}</div></div>
//  </div> `

//  }

//  renderCharacter(heroelementId, heroname, heroavatar, herohealth, herodiceScore)
//  renderCharacter(monsterelementId, monstername, monsteravatar, monsterhealth, monsterDiceScore)