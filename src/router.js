import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/HomePage.vue')
		},
		{
			path: '/signin',
			name: 'signin',
			component: () => import('./views/Signin.vue')
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('./views/Signup.vue')
		}
	]
})
