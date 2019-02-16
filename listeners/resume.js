var { stripIndents } = require("common-tags")

module.exports = function(client){
	client.on("resume", (replayed) => {
		console.error(
			stripIndents`EVENT "resume" RECEIVED
			The bot has reconnected to the web socket.
			${replayed} events were replayed.`
		)
	})
}
