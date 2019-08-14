const chalk = require("chalk")
const getNotes = require("./notes")


const command = process.argv[2]

if (command === 'add')
{
    console.log('adicionando nota')
} else if (command === 'remove')
{
    console.log('removendo')
}