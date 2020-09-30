const express = require('express');
const app = express();
const { success, error } = require('consola');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const PORT = 4000;
const Note = require('./models/Notes');
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());

connectDB();

app.get('/api/all-notes', async (req, res) => {
    try {
        const foundNote = await Note.find({});
        res.status(200).json(foundNote)
    } catch (err) {
        res.status(403).json({ status: "failure", error: err.message });
    }
});
app.post('/api/create-note', async (req, res) => {

    const { note, date } = req.body;
    try {
        const newNote = new Note({
            note,
            date
        })
        const saved = await newNote.save();
        if (saved) {
            res.status(200).json({ status: "success", message: "Note Created Successfully" });
        }

    } catch (err) {
        res.status(403).json({ status: "failure", error: err.message });
    }
})

app.delete('/api/delete-note/:noteId', async (req, res) => {
    try {
        const foundNote = await Note.deleteOne({ _id: req.params.noteId });
        res.status(200).json({ status: "success", message: "Note Deleted Successfully" })
    } catch (err) {
        res.status(403).json({ status: "failure", error: err.message });
    }
})

app.listen(PORT, async (req, res) => {
    try {
        success({ message: "Server listening on port " + PORT, badge: true });
    } catch (err) {
        error({ message: "Unable to connect to Database", badge: true });
        connectDB();
    }
})


