const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema

const chatSchema = new Schema(
	{
		users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message', default: [] }],
	},
	{ timestamps: true }
)

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
