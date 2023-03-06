import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

const getPercentage = (remainingHealth, maximumHealth)=>
     (100 * remainingHealth) / maximumHealth


// constructor function 
 function Character(data){
     Object.assign(this, data)
// for empty array 
     this.diceArray = getDicePlaceholderHtml(this.diceCount)
     
     this.maxHealth = this.health
    // function for maping to map over the getDiceRollArray function
    // specific to each character
  
    this.getDiceHtml = function(){
       this.currentDiceScore = getDiceRollArray(this.diceCount)
       this.diceArray = this.currentDiceScore.map(num => 
        `<div class="dice">${num}</div>`).join('')
     }
     this.takeDamage = function(attackScoreArray){

      const totalAttackScore = attackScoreArray.reduce((total, currentNum)=> total + currentNum)
        this.health -= totalAttackScore
        if(this.health <= 0){
            this.dead = true 
            this.health = 0
        }
       console.log(getPercentage(this.health, this.maxHealth))
     }
     this.getHealthBarHtml = function(){
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 25 ? "danger": ""}"
            style="width: ${percent}} %;">
        </div>
    </div>`
    }
     // each object dicplaied 
    this.getCharacterHtml = function(){
        // destructuring 
 const { elementId, name, avatar, health, diceCount, diceArray} = this; 
// we can use diceCount, elementId, name, avatar, health without dadta if we use distructering 
const healthBar = this.getHealthBarHtml()
return `
<div class="character-card">
<div class="health">health: <b> ${health} </b></div>
 ${healthBar}
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}" />
    <div class="dice-container">
        ${diceArray}
    </div>
</div>`

    }
}

export default Character