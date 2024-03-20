export default{
	state:{
		orderNum: 0,
	},
	getters:{},
	mutations:{
		initOrder(state, res){

			state.orderNum = res.orderNum;
		}
	},
	actions:{}
}
