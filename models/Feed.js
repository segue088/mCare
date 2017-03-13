var mongoose = require('mongoose');

var FeedSchema = new mongoose.Schema({
	user_from: {type:mongoose.Schema.Types.Mixed, default:{}},
	user_to: {type:mongoose.Schema.Types.Mixed, default:{}},
	message: {type: String, default: ''},
	timestamp: {type:Date, default:Date.now}
});

FeedSchema.methods.summary = function() {
	var summary = {
		'user_from':this.user_from,
		'user_to':this.user_to,
		'message':this.message,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('FeedSchema', FeedSchema)