
const router = require('express').Router();
const path = require('path'); 
//"http://localhost:3001/notes"
router.get("/notes", (req,res) =>{
    //send the html page back 
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})


module.exports = router; 