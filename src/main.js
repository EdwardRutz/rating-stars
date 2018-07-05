import Vue from 'vue'
// import App from './App.vue'
import Rating from './components/Rating'

// Vue.component('rating', Rating);

new Vue({
  el: '#app',
  template: '<Rating/>',
  components: { Rating },
  // render: h => h(App)
});
