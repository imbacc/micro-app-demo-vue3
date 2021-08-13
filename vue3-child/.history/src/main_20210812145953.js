import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@views/test/index.vue'),
		meta: {
			// auth: ['user']
			router: ['init_module', 'action_module', 'test_module'],
		},
	},
]

const router = createRouter({
	options: {
		// 👇👇 添加路由前缀，子应用可以通过window.__MICRO_APP_BASE_URL__获取基座下发的baseurl
		base: window.__MICRO_APP_BASE_URL__ || '/',
	},
	history: createWebHistory(),
	// routes,
})

createApp(App)
	.use(router)
	.mount('#app')
