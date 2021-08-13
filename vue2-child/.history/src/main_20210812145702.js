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

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
