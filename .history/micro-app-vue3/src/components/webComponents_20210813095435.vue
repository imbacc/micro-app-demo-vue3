<template>
	<div>
		<h1>子应用</h1>
		<!-- name为应用名称，全局唯一，url为html地址 -->
		<micro-app name="vue2" url="http://localhost:8080/" baseurl="/webComponents/vue2" :data="{ type: '新的数据111' }" />
		<br />
		<hr />
		<br />
		<micro-app name="vue3" url="http://localhost:8081/" baseurl="/webComponents/vue3" :data="{ type: '新的数据222' }" />
	</div>
</template>

<script setup>
// import microApp from '@micro-zoe/micro-app'

// // 发送数据给子应用 my-app
// microApp.setData('vue2', { type: '手动发送数据 vue2' })
// microApp.setData('vue3', { type: '手动发送数据 vue3' })

// const handleDataChange = (e) => {
// 	console.log('e', e)
// }
</script>
