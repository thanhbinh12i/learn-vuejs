const state = function () {
  return {
    userList: [
      {
        id: 1,
        name: "Nguyễn Phạm Thanh Bình",
        age: 21,
        email: "nptbinh17092004@gmail.com",
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: 2,
        name: "Binh day nee",
        age: 21,
        email: "binhnpt@fpt.com",
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ],
    userDetail: null,
  };
};

const mutations = {
  setUserDetailMutation(state, payload) {
    const userDetail = state.userList.find((user) => user.id == payload);
    state.userDetail = userDetail;
  },
};

const actions = {
  getUserByIdAction(context, payload) {
    context.commit("setUserDetailMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
