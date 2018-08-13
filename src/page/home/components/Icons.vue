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
  data() {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: "001",
          iconFontCode: "<span class='iconfont'>&#xe613;</span>",
          desc: "热门景点"
        },
        {
          id: "002",
          iconFontCode: "<span class='iconfont'>&#xe897;</span>",
          desc: "出境游"
        },
        {
          id: "003",
          iconFontCode: "<span class='iconfont'>&#xe678;</span>",
          desc: "一日游"
        },
        {
          id: "004",
          iconFontCode: "<span class='iconfont'>&#xe6a7;</span>",
          desc: "美食林"
        },
        {
          id: "005",
          iconFontCode: "<span class='iconfont'>&#xe662;</span>",
          desc: "酒店"
        },
        {
          id: "006",
          iconFontCode: "<span class='iconfont'>&#xe61f;</span>",
          desc: "国内游"
        },
        {
          id: "007",
          iconFontCode: "<span class='iconfont'>&#xe612;</span>",
          desc: "出行"
        },
        {
          id: "008",
          iconFontCode: "<span class='iconfont'>&#xe6cd;</span>",
          desc: "攻略"
        },
        {
          id: "009",
          iconFontCode: "<span class='iconfont'>&#xe7a2;</span>",
          desc: "动植物园"
        },
        {
          id: "010",
          iconFontCode: "<span class='iconfont'>&#xe681;</span>",
          desc: "泡温泉"
        },
        {
          id: "011",
          iconFontCode: "<span class='iconfont'>&#xe64b;</span>",
          desc: "海滩风光"
        }
      ]
    };
  },
  computed: {
    pageData() {
      const pageCount = 8,
        pageData = [];
      let page = Math.ceil(this.iconList.length / pageCount);
      for (let i = 0; i < page; i++) {
        pageData.push(this.iconList.slice(i * pageCount, (i + 1) * pageCount));
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
  padding: 0.1rem

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
