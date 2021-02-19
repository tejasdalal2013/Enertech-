const items = [
    { name : 'Bike' , Price : 100},
    { name : 'TV' , Price : 200},
    { name : 'Album' , Price : 10},
    { name : 'Book' , Price : 5},
    { name : 'Phone' , Price : 500},
    { name : 'Computer' , Price : 1000},
    { name : 'KeyBoard' , Price : 25}
]
//Filter Method//
const filteredItems = items.filter((item) => {
    return item.Price <= 100     
})
console.log(filteredItems)

// Map Method
const itemNames = items.map((item) => {
    return item.Price   
})
console.log(itemNames)

// Find Method

const foundItems = items.find((item) => {
    return item.Price === 100     
})
console.log(foundItems)

// Foreach Loop

items.forEach((item) => {
    console.log(item.name)
         
})

// Some Method

const hasExpesive = items.some((item) => {
    return item.Price <= 100     
})
console.log(hasExpesive)

// Every Method //

const hasExpesiveEvery = items.every((item) => {
    return item.Price <= 1000        
})
console.log(hasExpesiveEvery)

// Reduce Method

const Sums = items.reduce((currentTotal,item) => {
    return item.Price + currentTotal   
},0)
console.log(Sums)