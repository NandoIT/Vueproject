// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import * as firebase from 'firebase'


Vue.$firebase = firebase.initializeApp({
    apiKey: "AIzaSyAVRjq7Va18avzMhnwljh9bIensf7TR914",
    authDomain: "vue-app-3db3c.firebaseapp.com",
    databaseURL: "https://vue-app-3db3c.firebaseio.com",
    projectId: "vue-app-3db3c",
    storageBucket: "vue-app-3db3c.appspot.com",
    messagingSenderId: "466960612026"
 });
 Object.defineProperty(Vue.prototype, '$firebase', {
  get() {
    return Vue.$firebase;
  },
});

var store = {
  debug: true,
  state: {
    loggedIn: false
  },
  setLoggedIn (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.loggedIn = newValue
  }
}
Object.defineProperty(Vue.prototype, '$store', {
 get() {
   return store;
 },
});

Vue.$firebase.auth().onAuthStateChanged(firebaseuser => {
  if(firebaseuser){
    store.setLoggedIn(true);

  }else{
    store.setLoggedIn(false);
  }
});


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

Vue.directive('theme',{
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px';
    }else if (binding.value == 'narrow'){
      el.style.width = "540px";
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
