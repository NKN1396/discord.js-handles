var { stripIndents } = require("common-tags")

module.exports = function(client){
	client.on("reconnecting", function(){
		console.error(
			stripIndents`EVENT "reconnecting" RECEIVED
			The bot is attempting to reconnect to the web socket.`
		)
	})
}
