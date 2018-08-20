<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                        <div class="btn-city">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper" v-for="item in hotCities" :key="item.id">
                        <div class="btn-city">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of allCities" :key="key" :ref="key">
                <div class="title border-topbottom" >{{key}}</div>
                <div class="item-list">
                    <ul>
                        <li class="border-bottom" v-for="subItem in item" :key="subItem.id">{{subItem.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    allCities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter(e) {
      if (this.letter) {
        console.log(this.letter);
        //console.log(this.$refs[this.letter]);
        this.scroll.scrollToElement(this.$refs[this.letter][0]);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color: #ccc

    &:after
        border-color: #ccc

.border-bottom
    &:before
        border-color: #ccc

.city-list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    color: #333
    overflow: hidden

    .title
        line-height: 0.46rem
        background-color: #eeeeee
        color: #656565
        padding-left: 0.2rem

    .btn-list
        padding: 0rem 0.6rem 0rem 0.1rem
        overflow: hidden

        .btn-wrapper
            width: 33.33%
            float: left

            .btn-city
                text-align: center
                margin: 0.1rem
                padding: 0.1rem 0
                border: 0.02rem solid #b0b0b0
                border-radius: 0.06rem
                background-color: #fff

    .item-list
        line-height: 0.76rem

        .border-bottom
            padding-left: 0.2rem
</style>
