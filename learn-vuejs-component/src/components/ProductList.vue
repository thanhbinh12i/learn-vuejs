<script setup>
import ProductItem from "./ProductItem.vue";
import sp1 from "../assets/images/sp1.webp";
import sp2 from "../assets/images/sp2.webp";
import sp3 from "../assets/images/sp3.webp";
import sp4 from "../assets/images/sp4.webp";
import sp5 from "../assets/images/sp5.webp";
import sp6 from "../assets/images/sp6.webp";
import sp7 from "../assets/images/sp7.webp";
import sp8 from "../assets/images/sp8.webp";
import { ref } from "vue";
const productList = ref([
  {
    id: 1,
    name: "Bộ Bàn Phím",
    image: sp1,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 134000,
    sale: 10 / 100,
    quantityInStock: 10,
  },
  {
    id: 2,
    name: "Chuột Captain Marvel ",
    image: sp2,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 250000,
    sale: 5 / 100,
    quantityInStock: 15,
  },
  {
    id: 3,
    name: "Laptop Gaming",
    image: sp3,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 10500000,
    sale: 0 / 100,
    quantityInStock: 5,
  },
  {
    id: 4,
    name: "Lót Chuột",
    image: sp4,
    description: "lót chuột chống chày sước bàn ghế",
    price: 230000,
    sale: 5 / 100,
    quantityInStock: 35,
  },
  {
    id: 5,
    name: "Tai Nghe",
    image: sp5,
    description: "Tai Nghe hiện đại",
    price: 1000000,
    sale: 10 / 100,
    quantityInStock: 10,
  },
  {
    id: 6,
    name: "Loa Sony",
    image: sp6,
    description: "Nghe Nhạc cực chất",
    price: 750000,
    sale: 5 / 100,
    quantityInStock: 15,
  },
  {
    id: 7,
    name: "Màn Hình View Sonic",
    image: sp7,
    description: "Độ Phân Giải cực nét full HD không che",
    price: 134000,
    sale: 10 / 100,
    quantityInStock: 10,
  },
  {
    id: 8,
    name: "Mic Thu âm",
    image: sp8,
    description: "Khử Ổn Siêu Hiệu Quả",
    price: 300000,
    sale: 0 / 100,
    quantityInStock: 7,
  },
]);
</script>

<template>
  <div>
    <h2
      class="product-list__title text-center text-danger font-weight-bold mt-4 mb-4"
    >
      Các Sản Phẩm Nổi Bật
    </h2>
    <section class="product-list">
      <div class="row justify-content-around">
        <div
          v-for="(productItem, index) in productList"
          :key="index"
          class="col-lg-3 col-dm-4 col-sm-6 col-xs-12 product-item"
        >
          <ProductItem :productItem="productItem" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
