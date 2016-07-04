require('./app.css')
module.exports = {
	data () {
		return {
			msg: "我是来自app/index.js 的 msg"
		}
	},
	template: require('./app.html')
}