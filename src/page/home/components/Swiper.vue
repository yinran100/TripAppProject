<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id" >
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
  //props: ["swiperOption"],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 5000
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg"
        },
        {
          id: "002",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"
        },
        {
          id: "003",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"
        }
      ]
    };
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

