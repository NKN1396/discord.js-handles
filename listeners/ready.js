var moment = require("moment")

module.exports = function(client, options){

	console.log(`${options.name} has been started on ${moment(Date.now()).utcOffset(1).format("LLLL")}`)

	client.on("ready", function() {
		console.log("Logged in as " + client.user.tag)

		//Notify users and channels that the bot has been restarted.
		(async () => {
			for(var user of options.notify.users)
				await client.users.get(user).send(`✅ ${options.name} has been restarted.`)
					.catch(e => {
						console.error(e)
					})
			for(var channel of options.notify.channels)
				await client.channels.get(channel).send(`✅ ${options.name} has been restarted.`)
					.catch(e => {
						console.error(e)
					})
		})()
		
	})
}
