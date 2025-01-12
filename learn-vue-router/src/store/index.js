import { createStore } from "vuex";
import users from "./modules/users";
import pets from "./modules/pets";
const store = createStore({
  modules: {
    users, // users : users
    pets,
  },
});

export default store;
