<template>
    <div class="banner-wrapper">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_600x330_3b1186e2.jpg">
        <div class="banner-info">
            <div class="title">深圳欢乐谷(AAAAA景区)</div>
            <div class="pic"><span class="pic-iconfont iconfont">&#xe691;</span>33</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailBanner"
};
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'

.banner-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    color: #fff

    .banner-img
        width: 100%

    .banner-info
        position: absolute
        display: flex
        left: 0
        right: 0
        bottom: 0
        padding: 0 0.2rem
        line-height: 0.6rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

        .title
            flex: 1
            font-size: 0.3rem
            ellipsis()

        .pic
            padding: 0 0.3rem
            background-color: rgba(0, 0, 0, 0.7)
            border-radius: 0.2rem
            height: 0.4rem
            line-height: 0.4rem
            font-size: 0.24rem
            margin-top: 0.06rem

            .pic-iconfont
                font-size: 0.24rem
                padding-right: 0.06rem
</style>