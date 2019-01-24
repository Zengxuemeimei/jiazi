import Vue from 'vue'
import App from './App'
import router from './router'
import {
        Carousel,
        CarouselItem,
        Button,
        Container,
        Header,
        Main,
        Footer,
        Row,
        Col,
        Pagination
      } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(VueLazyload,
  {
     loading:'../static/images/home/ttp.gif'
   }
 )
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

