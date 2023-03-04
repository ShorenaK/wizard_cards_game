//we create new array for random genaring numbers for dice 

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

// get diceplcaceholder for empty value 
function getDicePlaceholderHtml(diceCount){
  return new Array(diceCount).fill(0).map(function(){
      return  `<div class="placeholder-dice"></div>`
  }).join('')
}


export {getDiceRollArray, getDicePlaceholderHtml}