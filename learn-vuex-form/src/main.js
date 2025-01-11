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
          "age": 54,
          "description": "thân thiện , hoc hỏi nhanh",
          "programmingLanguage": ["Java", "C#"],
          "gender": "Nam",
          "type": "CLIENT"
        },
        {
          "id": 3,
          "name": "Phạm Thị Cẩm Anh",
          "avatar": "hinh",
          "age": 45,
          "description": "thân thiện , hoc hỏi nhanh",
          "programmingLanguage": ["JS"],
          "gender": "Nữ",
          "type": "CLIENT"
        }
      ],
      searchName: ""
    }
  },
  getters: {
    userListByBoy(state) {
      return state.userList.filter((user) => user.gender === "Nam")
    },
    userListBySearchName(state) {
      const { userList, searchName } = state
      return userList.filter((user) => user.name.toLowerCase().includes(searchName.toLowerCase()))
    }
  },
  mutations: {
    setSearchNameMutation(state, payload) {
      state.searchName = payload
    },
    addUserMutation(state, payload) {
      state.userList.push(payload)
    },
    removeUserMutation(state, payload) {
      const index = state.userList.findIndex((user) => user.id === payload)
      if (index !== -1) {
        state.userList.splice(index, 1)
      }
    },
    updateUserMutation(state, payload) {
      const index = state.userList.findIndex((user) => user.id === payload.id)
      if (index !== -1) {
        state.userList[index] = payload
      }
    }
  },
  //action xử lý các tác vụ bất đồng bộ (async)
  actions: {
    setSearchNameAction(context, payload) {
      context.commit('setSearchNameMutation', payload)
    },
    addUserAction(context, payload) {
      const newUser = {
        ...payload,
        id: Math.random()
      }
      context.commit('addUserMutation', newUser)
    },
    removeUserAction(context, payload) {
      context.commit('removeUserMutation', payload)
    },
    updateUserAction(context, payload) {
      context.commit('updateUserMutation', payload)
    }
  }
})
const app = createApp(App);

app.component("app-modal", AppModal);
app.use(store)
app.mount("#app");
