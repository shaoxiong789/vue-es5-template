webpackJsonp([2],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16)
	module.exports = {
		template: __webpack_require__(18)
	}

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./view2.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./view2.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "h2{\r\n\tcolor: blue;\r\n}", ""]);

	// exports


/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<h2>view2</h2>\r\n</div>";

/***/ }

});