module.exports = function(router) {
	router.map({
		'/': {
			component: function (resolve) {
    			require(['./view1'], resolve) // 异步加载view1
    		}
		},
		'/v2': {
			component: function (resolve) {
    			require(['./view2'], resolve)
    		}
		}
	})
	router.redirect({
		'*': '/'
	})
}