<template>
    <div class="city-search">
        <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.city-search
    height: 0.72rem
    background-color: $backColor
    padding: 0 0.1rem

    .search-input
        width: 100%
        height: 0.62rem
        border-radius: 0.06rem
        padding: 0 0.1rem
        box-sizing: border-box
        color: #666
        text-align: center
        margin-top: 0.05rem
</style>
