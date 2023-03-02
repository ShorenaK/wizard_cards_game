function getDiceRollArray(diceCount){
    // let newDiceRolls = [];
    // for (let i = 0; i < diceCount; i++) {
    //     newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    // }
    // return newDiceRolls; 
   return  new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6 +1 )
    })
} 

const characterDta = {
 // object  hero
 hero: {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceCount: 3
}, 
// object  hero
  monster:{
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceCount: 1
 }
}

// constructor function 
function Character(data){
    Object.assign(this, data)
   
    // function for maping to map over the getDiceRollArray function
    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map(function(num){
         return `<div class="dice">${num}</div>`
        }).join('')
     }
    this.getCharacterHtml = function(){
 const { elementId, name, avatar, health, diceCount } = this; 
// we can use diceCount, elementId, name, avatar, health without dadta if we use distructering 
    const diceHtml = this.getDiceHtml(diceCount)
    return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`  
    }
}
function render (){
    document.getElementById(wizerd.elementId).innerHTML = wizerd.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}
const wizerd = new Character(characterDta.hero)
const orc = new Character(characterDta.monster)
render()




