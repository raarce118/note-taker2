const { response } = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (error, response) => {
        if (error) throw error;
        console.log("retrieved data from file", response);
        const data = JSON.parse(response);
        console.log(data);
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

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const createNote = createNewNote(req.body, createNote);
    res.json(createNote);

    console.log(createNote);

});


module.exports = router;