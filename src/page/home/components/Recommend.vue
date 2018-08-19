<template>
    <div class="recommend-wraper">
        <div class="title">
            <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
            <span class="title-content">热销推荐</span>
        </div>
        <ul>
            <li class="recommend-li border-bottom" v-for="item in list" :key="item.id">
                <img class="recommend-img" :src="item.imgUrl" >
                <div class="recommend-info">
                    <p class="recommend-title">{{item.title}}</p>
                    <p class="recommend-desc">{{item.desc}}</p>
                    <button class="recommend-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'

.recommend-wraper
    .title
        height 0.6rem
        background-color #eee

        .title-img
            width 0.3rem
            height 0.3rem
            margin-bottom 0.1rem
            margin-left 0.2rem

        .title-content
            line-height 0.6rem

    .recommend-li
        height 2rem

        .recommend-img
            padding 0.2rem 0.2rem
            float left
            height 1.6rem
            width 1.6rem

        .recommend-info
            padding-top 0.1rem
            flex 1

            .recommend-title
                font-size 0.32rem
                line-height 0.6rem
                ellipsis()

            .recommend-desc
                color #999
                line-height 0.4rem
                font-size 0.25rem
                ellipsis()

            .recommend-btn
                background-color #ff9300
                color #ffffff
                border-radius 0.06rem
                font-size 0.28rem
                padding 0 0.2rem
                line-height 0.44rem
                margin-top 0.16rem
</style>
