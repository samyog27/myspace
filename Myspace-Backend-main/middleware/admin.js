//const config = require("config");


module.exports = function(req, res, next) {
	//if (!config.get("requiresAuth")) return next();
	if (!process.env.MYSPACE_API_REQUIRES_AUTH) return next();

	//if (!req.user.isAdmin) return res.status(403).send("Access denied.");

	next();
};