import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { registerModule } from '@/common/tools/cmake_lazy.js'
import { LOCA_ROUTER, set_state, get_state } from '@/common/provide/lazy_state.js'

const routes = [
	{
		path: '/',
		component: () => import('@views/test/index.vue'),
		meta: {
			// auth: ['user']
			router: ['init_module', 'action_module', 'test_module']
		}
	},
	{
		// 👇👇 非严格匹配，/webComponents/* 都将匹配到 webComponents 组件
		path: '/webComponents/',
		name: 'webComponents',
		component: () => import('@/components/webComponents.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@views/test/login.vue')
	},
	{
		path: '/401',
		name: '401',
		component: () => import('@views/error-page/401.vue')
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@views/error-page/404.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory() || createWebHistory(),
	routes
})

// vite自动导入
const moduleArray = import.meta.glob('./module/*.js')

/**
 * 注册router
 * @param {*} name: string | Array
 */
const registerRouter = (name) => {
	return new Promise((resovle) => {
		registerModule(name, moduleArray).then((res) => {
			res.forEach((r) => {
				let has = router.hasRoute(r.name) // 初始化加载过的不再重复加载
				if (!has) router.addRoute(r)
			})
			set_state(LOCA_ROUTER, name)
			resovle(router)
		})
	})
}

// 懒加载 加载过的router
const initLzayRouter = () => {
	const lazyState = get_state(LOCA_ROUTER)
	if (lazyState && Array.isArray(lazyState) && lazyState.length > 0) return registerRouter(lazyState)
	return Promise.resolve()
}

export { router, registerRouter, initLzayRouter }
