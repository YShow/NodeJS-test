// const square = function(x)
// {
//     return x * x
// }

// const square = (x) => {
// return x * x
// }

//const square  =  (x) => x * x
//console.log(square(60))
const event = {
    name: "Aniversario",
    guestList: ['d','c','b','a'],
    printGuestList ()  {
        console.log('Guest List para ' + this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + ' ira ' + this.name)
        })
    }
}

event.printGuestList()
