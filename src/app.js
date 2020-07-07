import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});