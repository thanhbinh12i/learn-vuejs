import { createApp } from 'vue'
import App from './App.vue'
import AppModal from "./components/AppModal.vue"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/jquery/dist/jquery.slim.js"
import "../node_modules/popper.js/dist/popper.js"
import "../node_modules/font-awesome/css/font-awesome.min.css";

const app = createApp(App);

app.component("app-modal", AppModal);
app.mount("#app");
