import { createApp } from "vue";
import App from "./App.vue";

import logger from "./mixins/logger";
import focus from "./directives/focus";

const app = createApp(App);
app.mixin(logger);
app.directive("focus", focus);
app.mount("#app");
