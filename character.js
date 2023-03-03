import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"

// constructor function 
 function Character(data){
    let diceArray = getDicePlaceholderHtml()

    Object.assign(this, data)
   
    // function for maping to map over the getDiceRollArray function
    this.getDiceHtml = function(diceCount){
        return getDiceRollArray(diceCount).map(function(num){
         return `<div class="dice">${num}</div>`
        }).join('')
     }
    this.getCharacterHtml = function(){
        // destructuring 
 const { elementId, name, avatar, health, diceCount } = this; 
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