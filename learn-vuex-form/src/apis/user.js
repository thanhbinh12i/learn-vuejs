import axios from "axios";

export const getAllUserApi = async () => {
  const res = await axios({
    method: "GET",
    url: "https://678245acc51d092c3dced47b.mockapi.io/users"
  })
  return res.data
}

export const addUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://678245acc51d092c3dced47b.mockapi.io/users",
    data: user,
  });
  return res.data;
}

export const removeUserApi = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `https://678245acc51d092c3dced47b.mockapi.io/users/${id}`,
  });
  return res;
};

export const updateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://678245acc51d092c3dced47b.mockapi.io/users/${user.id}`,
    data: user,
  });
  return res;
};
