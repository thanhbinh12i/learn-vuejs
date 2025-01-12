const state = function() {
  return {
    petList: [
      {
        name: "LuKi",
        type: "Chó",
        image:
          "https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "mickey",
        type: "Chuột",
        image:
          "https://meohaychoban.com/wp-content/uploads/2021/05/Chuot-hamster-bao-nhieu-tien-o-viet-nam.jpg",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "meomeo",
        type: "Mèo",
        image: "https://daohieu.com/wp-content/uploads/2020/05/meo-con.jpg",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "sese",
        type: "Chim",
        image:
          "https://sudospaces.com/gaocung-com/2021/02/chim-se-thuong-song-o-dau-2.jpg",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "BaoBao",
        type: "Báo",
        image: "https://i.ytimg.com/vi/g6antdhmc54/maxresdefault.jpg",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "nhom nhom",
        type: "Cá",
        image: "https://propelsteps.files.wordpress.com/2013/09/shark.jpg",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ],
  };
};

export default {
  namespaced: true,
  state,
};
