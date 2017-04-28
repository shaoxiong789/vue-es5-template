var Vue = require('vue')
var VueRouter = require('vue-router')
var routerConfig = require('./router')
var app = require('./app')
Vue.use(VueRouter)

var router = new VueRouter()

routerConfig(router)

router.start(app,'app')
