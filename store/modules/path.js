import $http from '@/common/api/request.js'
export default {
	state:{
		list:[]
	},
	getters:{
		defaultPath(state){
			// console.log("defaultPath被获取时，list： ",state.list);
			return state.list.filter(v=>Number(v.isDefault)==1)[0]
		}
	},
	mutations:{
		//拿到初始化请求当当前用户收货地址数据
		__initAddressList(state,list){
			state.list = list;
		},
		createPath( state, obj ){
			state.list.unshift( obj );
		},
		updatePath(state,{index,item}){
			for( let key in item){
				state.list[index][key] = item[key];
			}
		},
		//把之前选中的变成未选中
		removePath(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false;
				}
			})
		}
	},
	actions:{
		createPathFn({commit},obj){
			if(obj.isDefault){
				commit("removePath");
			}
			commit('createPath',obj);
		},
		updatePathFn({commit},obj){
			if( obj.item.isDefault ){
				commit("removePath");
			}
			commit('updatePath',obj);
		},
		initPathFn({commit,state}) {
			// console.log("进了initPathFn")
			$http.request({
				url: '/selectAddress',
				method:"POST",
				header:{
					token:true
				},
			}).then((res)=>{
				// console.log('initPathFn',res)
				commit('__initAddressList',res)
				})
		}
	}
}