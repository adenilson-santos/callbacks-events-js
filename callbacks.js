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
                return callback("Not found nobody with the informed Id.", null)
        }

    }, 2000)

}

function getAddress (cpfUser, callback) {
    setTimeout(() => {

        switch (cpfUser) {
            case "722":
                return callback(null, {
                    street: "street 107",
                    number: 23
                })
            case "231":
                return callback(null, {
                    street: "random 222",
                    number: 200
                })
            case "957": 
                return callback(null, {
                    street: "californian streer 07",
                    number: 11
                })
            default:
                return callback("Not found address for user informed.", null)
        }

    }, 2000)
}

getUser(5, function handleUser (error, user) {

   if(error) {

       console.error("An error ocurred on user request: ", error)

       return

   }

   getAddress (user.cpf, function handleAddress (error, userAddress) {

    if(error) {

        console.error("An error ocurred on address request: ", error)

        console.log(`
            All User Infos: \n
            Name: ${user.name} ${user.lastName}, ${user.age} \n
            Address: ${error}
        `)

        return

    }

    console.log(`
        All User Infos: \n
        Name: ${user.name} ${user.lastName}, ${user.age} \n
        Address: ${userAddress.street}, ${userAddress.number}
    `)

   })

})

