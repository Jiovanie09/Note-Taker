const path = require('path')
var express = require("express");
const router = express.Router()
const fs = require("fs");
const { uuid } = require('uuidv4')

router.route("/notes")
    .get((req, res) => {
        console.log('/notes.get')
        
        fs.readFile(path.join(__dirname, '../db/db.json'), "utf-8", (err, data) => {
            
            if (err) throw (err)
            res.json(JSON.parse(data))
        });
    })

    .post((req, res) => {

        let note = req.body
        note.id = uuid()

        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
            if (err) throw (err)
            let noteData = JSON.parse(data);

            noteData.push(note) // instead push the note object created above
            
            let stringNoteData = JSON.stringify(noteData)
            
            fs.writeFile(path.join(__dirname, '../db/db.json'), stringNoteData, 'utf-8', (err, data) => {
                
                if (err) throw (err);

                res.set(200).json(note); // instead send note object created above
            });
        });
    });

router.delete("/notes/:id", (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw (err)
        let noteData = JSON.parse(data);

        noteData.splice(req.params.id, 1);
        let stringNoteData = JSON.stringify(noteData)
      
        fs.writeFile(path.join(__dirname, '../db/db.json'), stringNoteData, 'utf-8', (err, data) => {
            if (err) throw (err);
            res.set(200).json(req.body);
        })
    })
})


module.exports = router;




