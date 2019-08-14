const fs = require("fs")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

//customize yargs version
yargs.version('0.0.2')

//add comando
yargs.command({
    command: 'add',
    describe: 'add nova nota',
    builder: {
        title: {
            describe:'note title',
            demandOption:  true,
            type: 'string'
        },
        body: {
            describe: 'Corpo da nota',
            demandOption: true,
            type: 'string'
        },
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//comando remove
yargs.command({
    command: 'remove',
    describe: 'remove nota',
     builder: {
        title: {
            describe:'note title',
            demandOption:  true,
            type: 'string'
        }
    },
    handler (argv)
    {
        notes.removeNotes(argv.title)
    }
})

//comando ler
yargs.command({
    command: 'read',
    describe: 'ler nota',
    builder: {
        title: {
            describe:'',
            demandOption:  true,
            type: 'string'
        }
    },
    handler (argv)
    {
        notes.readNote(argv.title)
    }
})

//comando lista
yargs.command({
    command: 'lista',
    describe: 'lista nota',
    handler ()
    {
        console.log('listado')
    }
})


yargs.command({
    command: 'list',
    describe: 'lista notas',
    handler ()
    {
        notes.listNotes()
    }
})


yargs.parse()

//console.log(yargs.argv)