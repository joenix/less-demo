import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

import * as antd from "ant-design-vue/lib/index";
antd.install(Vue);

import VueCodemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";

Vue.use(VueCodemirror, {
  options: { theme: "base16-dark" }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
