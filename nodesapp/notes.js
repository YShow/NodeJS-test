const fs = require("fs");
const chalk = require("chalk")

const removeNotes = (title) => {
  const notes = loadnotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Nota removida"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("Nenhuma nota achada"));
  }
};

const addNote = (title, body) => {
  const notes = loadnotes();  
  const duplicateNote = notes.find((note) => notes.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Nova nota adicionada"));
  } else {
    console.log(chalk.red.inverse("titulo da nota usada"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadnotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const listNotes = () => {
        const notes = loadnotes();
        console.log(chalk.inverse('Suas notas'))
        notes.forEach((element) => console.log(element.title))
}

const readNote = (title) =>{ 
        const notes = loadnotes();
        console.log(chalk.inverse('Lendo notas'))
        const note = notes.find((note) => note.title === title)
        if(note)
        {
                console.log(chalk.inverse(note.title))
                console.log(note.body)
              
        }else {
              
                console.log(chalk.red.inverse('Nao achou'))
        }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};
