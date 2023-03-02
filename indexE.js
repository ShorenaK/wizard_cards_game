
// exersises 
// //  returning function inside of function 

// // the first function 

// function getLottoNumbers(){
//     // creating empty array 
//     const winningNums = []
//     // looping over the array 
//     for (let i = 0; i < 6; i ++){
//         winningNums.push(Math.floor(Math.random() * 60 + 1))
//     }
//     // returns array with the random numbers form 0 - 100 
//     return winningNums
// }

// // creating another function to call getLottoNumbers function 

// function getWinningNumbersHtml(){
//     return getLottoNumbers().map(function(num){
//         // return `<div class="number">${num}</div>`
//         return num
//     }).join(' ')
// }

// console.log(getWinningNumbersHtml())

// // document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml().join(' )


// const endOfLevelBosses = []

// for (let i = 0; i < 10; i ++){
//  endOfLevelBosses.push(undefined)
// }

// const endOfLevelBosses = new Array(10).fill('🍀').map(function(moosh){
//     return moosh
// }).join(' ')
// console.log(endOfLevelBosses)

// constructor class 


const animalForRlease1 = {
    name: 'Tilly', 
    species: 'tiger', 
    weghtKg: 56, 
    age: 2, 
    dataOfRelease: '03-02-2022'
}
const animalForRlease2 = {
    name: 'Nelly', 
    species: 'elephant', 
    weghtKg: 320, 
    age: 16, 
    dataOfRelease: '03-02-2022'
}
function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weghtKg
    this.age = data.age
    this.dataOfRelease = data.dataOfRelease
    this.summeriseAnimal = function(){
        console.log(`${this.name} is a ${this.age} 
        year old ${this.species} which weighs 
        ${this.weghtKg} release into the wild on
        ${this.dataOfRelease}`)
    }
}
const tillyThetiger = new Animal(animalForRlease1)
const nellyTheElephant = new Animal(animalForRlease2)

console.log(tillyThetiger)
console.log(nellyTheElephant)
tillyThetiger.summeriseAnimal()
nellyTheElephant.summeriseAnimal()

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
    costPerNightChild: 180
}
const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
    costPerNightChild: 180
}
function NationalParkHotels(data){
    this.name = data.name
    this.rooms = data.rooms
    this.starts = data.stars
    this.costPerNightAdult = data.costPerNightAdult  
    this.costPerNightChild = data.costPerNightChild
    this.totalPrice = data.costPerNightAdult + data.costPerNightChild
    this.summeriseHotel = function(){
        const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild * 2
        console.log(` 
        A one night stay at the ${this.name}
        for two children is ${this.costPerNightChild}
        for two adult is ${this.costPerNightAdult} 
        total cost of ${totalPrice}
        `)
    }
}
// creating instance of NarionalParkHotles for each o
// object (hotle )
const hotel1class = new NationalParkHotels(hotel1)
const hotel2class = new NationalParkHotels(hotel2)

hotel1class.summeriseHotel()
hotel2class.summeriseHotel()

// console.log(hotel1)
// console.log(hotel2)
