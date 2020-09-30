const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
}
);

module.exports = Notes = mongoose.model('Notes', notesSchema);