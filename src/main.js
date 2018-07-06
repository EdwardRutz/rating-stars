import Vue from 'vue'
import Rating from './components/Rating'

// Vue.component('rating', Rating);

new Vue({
  el: '#app',
  template: '<Rating :grade="3"/>',
  components: { Rating }
});
