/*
var fs = require("fs");
var path = require("path");
var util = require("util");
var moment = require("moment");
*/

module.exports = function(client){
	client.on("error", e => {
		console.error(e)
		/*
		fs.writeFile(`${path.join(__dirname, "logs")}/${moment.utc().format()}.log`, util.inspect(e))
			.then(function(){
				console.log();
			})
			.catch((error_fs) => {
				console.error(error_fs);
			});
		*/
	})
}
