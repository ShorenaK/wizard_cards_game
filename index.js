

document.getElementById('monster').innerHTML = renderCharacter(elementId, name, avatar, health, diceScore)
`<div class="character-card">
    <h4 class="name"> Orc </h4>
    <img class="avatar" src="images/orc.png"/>
    <p class="health">health: <b> 10 </b></p>
    <div class="dice-container"><div class="dice"> 4 </div></div>
 </div>`
 
 const heroelementId = "hiro"
 const heroname = "Wizrd"
 const heroavatar = "images/wizard.png" 
 const herohealth =  "60"
 const herodiceScore = 6
 
 const monsterelementId = "monster"
 const monstername = "Orc"
 const monsteravatar = "images/orc.png" 
 const monsterhealth =  "10"
 const monsterDiceScore = 4

 function renderCharacter(elementId, name, avatar, health, diceScore){
    document.getElementById(elementId).innerHTML = `<div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health}</b></p>
    <div class="dice-container"><div class="dice">${diceScore}</div></div>
 </div> `

 }
 renderCharacter(heroelementId, heroname, heroavatar, herohealth, herodiceScore)