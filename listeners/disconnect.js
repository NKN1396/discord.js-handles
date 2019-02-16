var { stripIndents } = require("common-tags")

module.exports = function(client){
	client.on("disconnect", function(){
		console.error(
			stripIndents`EVENT "disconnect" RECEIVED
			BOT IS NO LONGER ATTEMPTING TO RECONNECT AUTOMATICALLY!
			Process will restart in 30 seconds from now.`
		)
		//Restarting in 30 seconds.
		setInterval(
			process.exit(1),
			30000
		)
	})
}
