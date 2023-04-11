const router = require('express').Router();

const fs= require('fs');

const path = require('path');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

const { v4: uuidv4 } = require("uuid");


// get route to add notes
router.get('/api/notes', (req, res) => {
fs.readFile("./db/db.json", 'utf8', (err, data) => {
if(data) {
console.log(data);
res.json(JSON.parse(data));
}
else {
console.log(err)
}
});
});


//post route to adds new notes
router.post('/api/notes', (req, res) => {
const { title, text } = req.body;
const newNote = { title, text, id: uuidv4() };
readAndAppend(newNote, "./db/db.json");
data.push(newNote)
fs.writeFile("./db/db.json", JSON.stringify(Data), (err) => (err ? console.error(err) : console.log("New note added!")));
res.json(Data);
}
);

//Route that allows user to delete notes
router.delete("/api/notes/:id", function (req, res){
  const notes= JSON.parse(fs.readFileSync ("./db/db.json"));
  const deleteNote= notes.filter((removeNote) => removeNote.id !== req.params.id);
    fs.writeFileSync( "./db/db.json", JSON.stringify(deleteNote));

  res.json(deleteNote);
  
})



  
  

module.exports = router;




