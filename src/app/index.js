require('./app.css')
var {themes,selectedTheme} = require('../theme/main.scss.js')
module.exports = {
	template: require('./app.html'),
	data: function() {
		return {
			msg: "123",
			themes:themes,
			selectedTheme:selectedTheme
		}
	},
	methods: {
		triggerTheme: function (value){
			console.log(value)
		}
	}
}
