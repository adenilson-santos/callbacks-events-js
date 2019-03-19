const util = require('util')

const handleGetUserCb = util.promisify(getUser) 

function getUser (searchId, callback) {

    setTimeout(() => {

        switch (searchId) {
            case 1:
                return callback(null, {
                    cpf: "722",
                    name: "Pastor",
                    lastName: "Alemao",
                    age: 21
                })
            case 2:
                return callback(null, {
                    cpf: "231",
                    name: "Pastor",
                    lastName: "Belga",
                    age: 32
                })
            case 3: 
                return callback(null, {
                    cpf: "957",
                    name: "Chow",
                    lastName: "Chow",
                    age: 18
                })
            case 4: 
                return callback(null, {
                    cpf: "9127",
                    name: "Pinsher",
                    lastName: "American",
                    age: 13
                })
            default:
                return callback("Not found nobody with id informed.", null)
        }

    }, 2000)

}

function welcome (user) {
    
    return new Promise ((resolve, reject) => {

        setTimeout(() => {

            if(!user) {
                reject("User param is not defined.")
            }

            resolve(`User ${user.name} founded.`)
    
        }, 1000)

    })
    
}

function getAddress (cpfUser) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            switch (cpfUser) {
                case "722":
                    return resolve({
                        street: "street 107",
                        number: 23
                    })
                case "231":
                    return resolve({
                        street: "random 222",
                        number: 200
                    })
                case "957": 
                    return resolve({
                        street: "californian streer 07",
                        number: 11
                    })
                default:
                    return reject("Not found address for the informed user.")
            }
    
        }, 2000)

    })
    
}

(async function main (userId) {
    
    try {

        console.time("exec")

        const user = await handleGetUserCb(userId)

        // const address = await getAddress(user.cpf)
        // const welcomeMessage = await welcome(user)

        const resultPromises = await Promise.all([
            getAddress(user.cpf),
            welcome(user)
        ]) 

        const welcomeMessage = resultPromises[0]
        const address = resultPromises[1]

        console.timeEnd("exec")

        console.log(`
            ${welcomeMessage}: \n
            Name: ${user.name} ${user.lastName}, ${user.age} \n
            Address: ${address.street}, ${address.number}
        `)

    } catch(error) {
        
        console.error("An error ocurred on user request: ", error)
            
    }
    
})(1)

