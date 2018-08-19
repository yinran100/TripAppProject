<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
             <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
        
    </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: ["city"]
};
</script>
 
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.header
    display: flex
    height: $headerHeight
    color: #ffffff
    background: $backColor
    line-height:$headerHeight

    .header-left
        float: left2
        width: 0.64rem

        .back-icon
            font-size: 0.35rem
            padding-left: 0.15rem

    .header-input
        flex: 1
        color: #cccccc
        height: 0.64rem
        line-height: 0.64rem
        margin-top: 0.12rem
        margin-left: 0.2rem
        background: #ffffff
        border-radius: 0.1rem
        padding-left: 0.2rem

    .header-right
        text-align: center
        float: right
        width: 1.34rem
        color #ffffff

        .arrow-icon
            font-size: 0.3rem
            margin-left: -0.05rem
</style>

