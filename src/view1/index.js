require('./view1.css')
module.exports = {
	template: require('./view1.html'),
	components: {
		comp: require('./component1') // 加载组件1
	}
}