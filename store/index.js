import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//购物车
import cart from './modules/cart.js'
//地址管理
import path from './modules/path.js'
//用户
import user from './modules/user.js'
//订单
import orderManager from './modules/orderManager.js'

export default new Vuex.Store({
	
	modules:{
		cart,
		path,
		user,
		orderManager
	}
	
})

