module.exports = function(client){
	client.on("rateLimit", function(){
		console.error("EVENT \"rateLimit\" RECEIVED")
	})
}
