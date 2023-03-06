import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// constructor function 
 function Character(data){
     
     Object.assign(this, data)
// for empty array 
     this.diceArray = getDicePlaceholderHtml(this.diceCount)
   
    // function for maping to map over the getDiceRollArray function
    // specific to each character
    this.getDiceHtml = function(){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
     }
     this.takeDamage = function(attackScoreArray){

    const totalAttackScore = attackScoreArray.reduce(function(total, currentNum){
          return total + currentNum 
        })
        this.health -= totalAttackScore
        if(this.health <= 0){
            let dead = true 
            return this.health = 0 === dead

            console.log(dead)
        }
       
     }
     // each object dicplaied 
    this.getCharacterHtml = function(){
        // destructuring 
 const { elementId, name, avatar, health, diceCount, diceArray} = this; 
// we can use diceCount, elementId, name, avatar, health without dadta if we use distructering 
return `
<div class="character-card">
<div class="health">health: <b> ${health} </b></div>
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}" />
    <div class="dice-container">
        ${this.diceArray}
    </div>
</div>`

    }
}

export default Character