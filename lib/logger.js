function Logger(options) {
	this.mailDestination = options.mail;
	this.mongoLogger = options.mongo;
}

Logger.prototype.logMail = function(error) {
	// send email with error
}

Logger.prototype.logMongo = function(request){
	// ip, headers, timestamp
}

module.exports.Logger = Logger;
