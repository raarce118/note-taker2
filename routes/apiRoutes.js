const { response } = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
//GET  - /api/notes'
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (error, response) => {
        if (error) throw error;
        console.log("got data from file ", response);
        //Convert into JSON format 
        const data = JSON.parse(response);
        console.log(data);
        //display the data on HTML 
        res.json(data);

    })
});

function createNewNote (body, notesArray) {
    const createNote = body;
    notesArray.push(createNote);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ createNote: notesArray }, null, 2)
    );
    return createNote;
  
}

//POST -/api/notes'
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const createNote = createNewNote(req.body, createNote);
    res.json(createNote);
    

    console.log(createNote);
   
});

//DELETE  -/api/notes/:id'
router.delete('/notes/:id', (req, res) => {

});


module.exports = router; 