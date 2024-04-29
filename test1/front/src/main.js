import Axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "../node_modules/destyle.css/destyle.css";

/* .env.***ファイルから変数を取得 */
// 参考：https://cbc-study.com/training/performance/vue4
Axios.defaults.baseURL = import.meta.env.VUE_APP_API_ENDPOINT;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
