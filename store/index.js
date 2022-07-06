import {createStore} from 'vuex'
import app from '@/store/app.js'
import modal from '@/store/modal.js'

const store = createStore({
	// 存储状态
	state:{
		sys_theme: uni.getStorageSync('sys_theme') ? uni.getStorageSync('sys_theme') : app.state.theme, // light dark
		sys_main: uni.getStorageSync('sys_main') ? uni.getStorageSync('sys_main') : app.state.main, // color
		sys_text: 1,
		sys_info: uni.getSystemInfoSync(),
		sys_statusBar: uni.getSystemInfoSync().statusBarHeight,
	},
	// 可以对 state 的数据进行运算
	getters:{
		sys_capsule() {
			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				console.log('getMenuButtonBoundingClientRect error');
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				};
			}
			return capsule;
			// #endif
			// #endif

			// #ifndef MP
			return {
				bottom: 56,
				height: 32,
				left: 278,
				right: 365,
				top: 24,
				width: 87
			};
			// #endif
		},
		sys_navBar() {
			// #ifndef MP
			return uni.getSystemInfoSync().statusBarHeight + 50;
			// #endif

			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				console.log('getMenuButtonBoundingClientRect error');
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				};
			}
			return capsule.bottom + capsule.top - uni.getSystemInfoSync().statusBarHeight;
			// #endif
			// #endif

			// #ifdef MP-ALIPAY
			return uni.getSystemInfoSync().statusBarHeight + uni.getSystemInfoSync().titleBarHeight;
			// #endif
		}
	},
	// 类似 mutations，异步操作。 
	actions:{},
	mutations:{},// 改变state 数据的唯一途径就是 commit <mutations>。 类似事件。必须是同步函数
	modules:{
		modal
	}// 
})

export default store;