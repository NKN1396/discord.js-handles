var { stripIndents } = require("common-tags")

module.exports = function(client, options){
	client.on("guildUnavailable", guild => {
		var logGuild = options.logAllGuilds
		options.guilds.forEach(guild2 => {
			if(guild.id == guild2) logGuild = true
		})
		if(!logGuild) return
		console.error(
			stripIndents`EVENT "guildUnavailable" RECEIVED
			Bot is no longer connected to ${guild.name} guild.`
		)
	})
}
