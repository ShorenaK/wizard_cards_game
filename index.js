// object  hero
const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceCount: 3
}
// object  hero
const monster = {
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceCount: 1
}
// constructor function 
function Character(data){
    this.elementId = data.elementId
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
    this.getCharacterHtml = function(){
// const { elementId, name, avatar, health, diceCount } = this; 
// we can use diceCount, elementId, name, avatar, health without dadta if we use distructering 
    const diceHtml = getDiceHtml(data.diceCount)
    document.getElementById(data.elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${data.name} </h4>
        <img class="avatar" src="${data.avatar}" />
        <div class="health">health: <b> ${data.health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`  
    }
}

const wizerd = new Character(hero)
const orc = new Character(monster)

wizerd.getCharacterHtml()
orc.getCharacterHtml()

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

// function for maping to map over the getDiceRollArray function
function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}


// using Object.assign

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    } 

function Student(data){
    Object.assign(this, data)
    this.summariseStudent= function(){
        console.log(`${this.firstName}, ${this.lastName}, 
        ${this.age}, ${this.country} ${this.email}`)
    }
}


    // const studentDetailsCopy = {}
    // Object.assign(studentDetailsCopy, studentDetails)
const newStudent = new Student(studentDetails)
newStudent.summariseStudent()

console.log(newStudent)