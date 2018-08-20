<template>
    <ul class="letter-list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>
<script>
export default {
  name: "LetterQuery"
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.letter-list
    position: absolute
    right: 0
    top: 2rem
    width: 0.4rem
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    line-height: 0.36rem

    .item
        line-height: 0.4rem
        color: $backColor
        text-align: center
</style>
