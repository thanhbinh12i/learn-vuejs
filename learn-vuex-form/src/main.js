import { createApp } from "vue";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);

app.component("app-modal", AppModal);

app.mount("#app");
