import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// constructor function 
 function Character(data){
     
     Object.assign(this, data)
// for empty array 
     this.diceArray = getDicePlaceholderHtml(this.diceCount)
   
    // function for maping to map over the getDiceRollArray function
    // specific to each character
    this.getDiceHtml = function(diceCount){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
     }
     this.takeDamage = function(){
        console.log( ` ${this.name} is damaged`)
     }
     // each object dicplaied 
    this.getCharacterHtml = function(){
        // destructuring 
 const { elementId, name, avatar, health, diceCount, diceArray} = this; 
// we can use diceCount, elementId, name, avatar, health without dadta if we use distructering 
    const diceHtml = this.getDiceHtml(diceCount)
    return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceArray}
        </div>
    </div>`  
    }
}

export default Character