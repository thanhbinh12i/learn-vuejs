import { addUserApi, getAllUserApi, removeUserApi, updateUserApi } from "@/apis/user";

const state = () => {
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
};
const getters = {
  userListByBoy(state) {
    return state.userList.filter((user) => user.gender === "Nam")
  },
  userListBySearchName(state) {
    const { userList, searchName } = state
    return userList.filter((user) => user.name.toLowerCase().includes(searchName.toLowerCase()))
  }
};
const mutations = {
  setUserListMutation(state, payload) {
    state.userList = payload
  },
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
};
//action xử lý các tác vụ bất đồng bộ (async)
const actions = {
  async getAllUserAction(context) {
    const payload = await getAllUserApi()
    context.commit('setUserListMutation', payload)
  },
  setSearchNameAction(context, payload) {
    context.commit('setSearchNameMutation', payload)
  },
  async addUserAction(context, payload) {
    await addUserApi(payload)
    context.dispatch('getAllUserAction')
  },
  async removeUserAction(context, payload) {
    await removeUserApi(payload);
    context.dispatch("getAllUserAction");
  },
  async updateUserAction(context, payload) {
    await updateUserApi(payload);
    context.dispatch("getAllUserAction");
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
