// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyB13-IZI8MFN_0_FvH-cicj7NyKYUZI3Lg',
  authDomain: 'het-vue-furebase-tutorial.firebaseapp.com',
  databaseURL: 'https://het-vue-furebase-tutorial.firebaseio.com',
  projectId: 'het-vue-furebase-tutorial',
  storageBucket: 'het-vue-furebase-tutorial.appspot.com',
  messagingSenderId: '104477334982'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
