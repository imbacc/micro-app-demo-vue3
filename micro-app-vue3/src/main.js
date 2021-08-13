import { createApp } from 'vue'
import App from './App.vue'

import { store, initLzayStore } from '@/common/store/index.js'
import { router, initLzayRouter } from '@/common/tools/cmake_router.js'

// js
import { env, is_cdn, is_dev } from '@/common/config/cfg.js'
import microApp from '@micro-zoe/micro-app'
microApp.start({
	lifeCycles: {
		created(e) {
			console.log('created')
		},
		beforemount(e) {
			console.log('beforemount')
		},
		mounted(e) {
			console.log('mounted')
		},
		unmount(e) {
			console.log('unmount')
		},
		error(e) {
			console.log('error')
		}
	}
})

// 全局样式
import 'nprogress/nprogress.css'
import '@/styles/index.scss'

const app = createApp(App)
Promise.allSettled([initLzayStore(), initLzayRouter()]).then(() => {
	app.use(store)
	app.use(router)
	app.mount('#app')
})

console.log('import.meta.env', env)

// 全局 property
app.config.globalProperties.is_cdn = is_cdn

// dev工具
app.config.devtools = is_dev

// 处理错误
// app.config.errorHandler = (err, vm, info) => {
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

//
// 全局注册组件
// app.component('component-a', {
// mounted() {
// 	console.log(this.foo) // 'bar'
// }
// })

// 全局注册组件指令
// app.directive('focus', {
// mounted() {
// 	el => el.focus()
// }
//   mounted: el => el.focus()
// })
