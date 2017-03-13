var mongoose = require('mongoose');

var ProviderSchema = new mongoose.Schema({
	license: {type: String, default: ''},
	location: {type: String, default: ''},
	is_online: {type: String, default: ''},
	user: {type:mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
	groups: [{
        role: String,
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GroupSchema'
        }
    }],
	
	timestamp: {type: Date, default: Date.now}
});

ProviderSchema.methods.summary = function() {
	var summary = {
		'user':this.user,
		'license':this.license,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('ProviderSchema', ProviderSchema);