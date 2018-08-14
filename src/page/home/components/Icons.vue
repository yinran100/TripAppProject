<template>
    <div class="icons">
      <swiper :options="swiperOption">
      <!-- slides -->
        <swiper-slide v-for="(items,index) in pageData" :key="index">
          <div class="icon-item" v-for="item in items" :key="item.id">
            <div class="iconfontSpan" v-html="item.iconFontCode"></div>
            <p class="icon-item-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pageData() {
      const PAGECOUNT = 8,
        pageData = [];
      let page = Math.ceil(this.list.length / PAGECOUNT);
      for (let i = 0; i < page; i++) {
        pageData.push(this.list.slice(i * PAGECOUNT, (i + 1) * PAGECOUNT));
      }
      return pageData;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/globalstyle.styl'
@import '~style/mixins.styl'

.iconfontSpan >>> .iconfont
  font-size: 0.8rem

.iconfontSpan >>> .swiper-container
  height: 3.2rem

.icons
  overflow: hidden
  padding: 0 0.1rem
  margin: 0.2rem 0

  .icon-item
    width: 25%
    height: 1.6rem
    float: left

    .iconfontSpan
      color: $backColor
      display: block
      text-align: center
      padding: 0.2rem 0

    .icon-item-desc
      color: $darkTextColor
      bottom: 0
      text-align: center
      ellipsis()
</style>
