import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).provide("store", store).mount("#app");
/* createApp(App)
  .use(store)
  .mount("#app"); */
