import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const router = new VueRouter({
	options: {
		// 👇👇 添加路由前缀，子应用可以通过window.__MICRO_APP_BASE_URL__获取基座下发的baseurl
		base: window.__MICRO_APP_BASE_URL__ || '/',
	},
})

console.log('window.__MICRO_APP_BASE_URL__', window.__MICRO_APP_BASE_URL__)

function dataListener(data) {
	console.log('来自基座应用的数据', data)
}

/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时有缓存数据，是否需要主动触发一次，默认为false
 * 补充: autoTrigger主要是为子应用提供的，因为子应用是异步渲染的，如果在子应用还没渲染时基座应用发送数据，子应用在初始化后不会触发绑定函数，但这个数据会放入缓存中，此时可以设置autoTrigger为true主动触发一次监听函数来获取数据。
 */
window.microApp?.addDataListener(dataListener)

// 解除绑定
window.microApp?.removeDataListener(dataListener)

// 清空所有当前应用的绑定函数
window.microApp?.clearDataListener()

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
