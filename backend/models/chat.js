const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true}
});

module.exports = mongoose.model('Chat', chatSchema);