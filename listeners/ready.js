var { DateTime } = require("luxon")

module.exports = function(client, options){
	let time_now = DateTime.utc()
	console.log(`${options.name} has been started on ${time_now.toLocaleString(DateTime.DATE_HUGE)} at ${time_now.toLocaleString(DateTime.TIME_24_SIMPLE)}`)
	client.on("ready", function() {
		console.log("Logged in as " + client.user.tag);

		//Notify all users and channels that the bot has been restarted.
		(async () => {
			for(var user of options.notify.users)
				await client.users.get(user).send(`✅ ${options.name} has been restarted.`)
					.catch(console.error)
			for(var channel of options.notify.channels)
				await client.channels.get(channel).send(`✅ ${options.name} has been restarted.`)
					.catch(console.error)
		})()
		
	})
}
