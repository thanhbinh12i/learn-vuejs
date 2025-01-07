import { createApp } from "vue";
import { createStore } from 'vuex'

import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
const store = createStore({
  state() {
    return {
      userList: [
        {
          "id": 1,
          "name": "Nguyễn Phạm Thanh Bình",
          "avatar": "hinh",
          "age": 20,
          "description": "thân thiện , hoc hỏi nhanh",
          "programmingLanguage": ["JS", "C#"],
          "gender": "Nam",
          "type": "ADMIN"
        },
        {
          "id": 2,
          "name": "Nguyễn Văn Hoài",
          "avatar": "hinh",
          "age": 20,
          "description": "thân thiện , hoc hỏi nhanh",
          "programmingLanguage": ["Java", "C#"],
          "gender": "Nam",
          "type": "CLIENT"
        }
      ]
    }
  },
})
const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store)
app.mount("#app");
