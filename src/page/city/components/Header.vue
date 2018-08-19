<template>
    <div class="city-header">
        <router-link to="/">
        <div class="iconfont city-back">&#xe624;</div>
        </router-link>
       城市选择
    </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'
.city-header
    height: $headerHeight
    color: #ffffff
    line-height:$headerHeight
    background: $backColor
    text-align center
    .city-back
        font-size: 0.35rem
        position absolute 
        width .64rem
        color #ffffff
        
</style>
