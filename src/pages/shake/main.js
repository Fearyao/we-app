import Vue from 'vue';
import App from './shake';

const app = new Vue(App)
app.$mount()
export default {
    config: {
        navigationBarTitleText: '摇晃'
    }
}