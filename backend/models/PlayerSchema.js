const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
	_id: Schema.Types.ObjectId,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	nickname: {
		type: String,
		required: true,
	},
	pictureURL: {
		type: String,
		required: true,
	},
	guildId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Guild',
		required: true,
	},
})

module.exports = mongoose.model('Player', playerSchema)
