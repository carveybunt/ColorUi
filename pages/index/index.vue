<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text class="title">{{sys_theme}}</text>
			<text class="title">{{modal}}</text>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		computed: mapState({
		    sys_theme: state => state.sys_theme,
		    modal: state => state.modal.dialog.confirmText,
		  }),
		data() {
			return {
				title: 'ColorUI VUE 3'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
