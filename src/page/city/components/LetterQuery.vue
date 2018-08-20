<template>
    <ul class="letter-list">
        <li class="item" v-for="(item,key) of allCities" :key="key">{{key}}</li>
    </ul>
</template>
<script>
export default {
  name: "LetterQuery",
  props: {
    allCities: Object
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.letter-list
    position: absolute
    right: 0
    top: 1.58rem
    width: 0.4rem
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center

    .item
        line-height: 0.36rem
        color: $backColor
        text-align: center
</style>
