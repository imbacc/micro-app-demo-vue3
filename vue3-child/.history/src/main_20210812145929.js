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
	history: createWebHistory(),
	routes,
})

createApp(App)
	.use(router)
	.mount('#app')
