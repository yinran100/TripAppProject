<template>
    <div class="recommend-wraper">
        <div class="title">
            <img class="title-img hidden" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span class="title-content">周末去哪儿</span>
        </div>
        <ul>
            <li class="recommend-li border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="img-swaper">
                    <img class="recommend-img" :src="item.imgUrl" >
                </div>
                <div class="recommend-info">
                    <p class="recommend-title">{{item.title}}</p>
                    <p class="recommend-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
          title: "深圳必游TOP10",
          desc: "当地人带你发现不一样的深圳"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
          title: "欢乐长隆",
          desc: "世界欢乐汇聚长隆"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg",
          title: "情侣好去处",
          desc: "手牵手，一起走到老"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'

.recommend-wraper
    .title
        height: 0.7rem
        background-color: #eee

        .title-img
            width: 0.3rem
            height: 0.3rem
            margin-bottom: 0.1rem
            margin-left: 0.2rem

        .title-content
            line-height: 0.7rem

    .img-swaper
        width: 100%
        height: 0
        padding-bottom: 33.4%
        overflow: hidden

        .recommend-img
            width: 100%

    .recommend-info
        padding-left: 0.2rem
        padding-bottom: 0.2rem

    .recommend-title
        font-size: 0.3rem
        line-height: 0.6rem
        ellipsis()

    .recommend-desc
        color: #999
        font-size: 0.25rem
        line-height: 0.4rem
        ellipsis()
</style>
