const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

// myEmitter.on('calc', function (number) {

//     for(let i = 0; i <= 10; i ++) 
//         console.log(`${number} * ${i} = ${number * i}`)

// })

// myEmitter.emit('calc', 2)

const stdin = process.openStdin()

stdin.addListener('data', function (value) {
    
    value = value.toString().trim()

    if(!value || isNaN(value)) {
        return console.error("You need type a number.")
    }

    console.log("****************************************")
    console.log(`NUMBER FOR CALC = ${value}`)
    console.log("----------------------------------------")

    for(let i = 0; i <= 10; i ++) 
        console.log(`${value} * ${i} = ${eval(value * i)}`)

    console.log("----------------------------------------")
    console.log("****************************************\n")
    
})