document.getElementById('hero').innerHTML = 
`<div class="character-card">
    <h4 class="name"> Wizard </h4>
    <img class="avatar" src="images/wizard.png"/>
    <p class="health">health: <b> 60 </b></p>
    <div class="dice-container"><div class="dice"> 6 </div></div>
 </div> `

document.getElementById('monster').innerHTML = renderCharacter(elementId, name, avatar, health, diceScore)
`<div class="character-card">
    <h4 class="name"> Orc </h4>
    <img class="avatar" src="images/orc.png"/>
    <p class="health">health: <b> 10 </b></p>
    <div class="dice-container"><div class="dice"> 4 </div></div>
 </div>`
 
 const elementId = `<div class="character-card"> </div>`
 const name = `<h4 class="name"> Orc </h4>`
 const avatar = ` <img class="avatar" src="images/orc.png"/>`
 const health = `<p class="health">health: <b> 60 </b></p>`
 const diceScore = `<div class="dice-container"><div class="dice"> 4 </div></div`

 function renderCharacter(elementId, name, avatar, health, diceScore){

 }
 renderCharacter()