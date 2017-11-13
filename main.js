import Vue from './node_modules/vue/dist/vue'

import App from './yy.vue'
var vn=new Vue({
    el:'#app',
    
    render:createElement=>createElement(App),
})