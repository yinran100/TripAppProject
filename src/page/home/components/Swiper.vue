<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id" v-if="showSwiper">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 5000
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length != 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active // css样式穿透
  background-color: #fff

.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 24.53%

  .swiper-img
    width: 100%
</style>

