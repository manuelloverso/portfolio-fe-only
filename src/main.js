import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import router from "./router";

import "bootstrap";

createApp(App).use(router).mount("#app");
