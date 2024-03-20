<template>
	<view class='payment-success'>
		<view class='f-active-color' style='font-size:52rpx;'>恭喜您支付成功</view>
		<view class='f-active-color' style='font-size:52rpx;'>已支付：￥{{totalAmount}}</view>
		<view class='f-active-color' style='font-size:52rpx;'>订单编号为：{{orderId}}</view>
		<view @tap='goIndex' class="return-index f-active-color">返回首页再买点</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalAmount: 0,
				orderId : "",
			}
		},
		computed: {
		},
		methods: {
			goIndex(){
				uni.navigateTo({
					url:"../index/index"
				})
			}
		},
		onLoad(e){
			console.log(e);
			this.totalAmount = e.totalAmount;
			this.orderId = e.orderId;
		}
	}
</script>

<style scoped>
.payment-success{
	position: absolute;
	left:0;
	right:0;
	bottom:0;
	top:0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.return-index{
	padding:10rpx 60rpx;
	border:2px solid #49BDFB;
	border-radius: 40rpx;
}
</style>
