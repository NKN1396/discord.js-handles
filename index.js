module.exports = function(client, options){

	//Generic errors
	require("./listeners/error")(client)

	//Connection status
	require("./listeners/disconnect")(client)
	require("./listeners/reconnecting")(client)
	require("./listeners/resume")(client)

	//Discord errors
	require("./listeners/guildUnavailable")(client)
	require("./listeners/rateLimit")(client)

	//Status
	require("./listeners/ready")(client, options)

}
