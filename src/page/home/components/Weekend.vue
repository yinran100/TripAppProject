<template>
    <div class="recommend-wraper">
        <div class="title">
            <img class="title-img hidden" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span class="title-content">周末去哪儿</span>
        </div>
        <ul>
            <li class="recommend-li border-bottom" v-for="item in list" :key="item.id">
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
  props: {
    list: Array
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
