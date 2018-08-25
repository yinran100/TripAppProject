<template>
    <div>
        <div class="city-search">
            <input class="search-input" v-model.trim="keyword" type="text"  placeholder="请输入城市名或拼音" />
        </div>
        <div class="search-content" v-show="keyword" ref="wrapper">
            <ul>
                <li class="search-item border-bottom" 
                    v-for="(item,index) in searchList" 
                    :key="index" 
                    @click="handleClick(item.name)"
                >{{item.name}}</li>
                <li class="search-item tips border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: { allCities: Object },
  data() {
    return {
      keyword: "",
      timer: null,
      searchList: []
    };
  },
  methods: {
    handleClick(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let key in this.allCities) {
          this.allCities[key].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) >= 0 ||
              element.name.indexOf(this.keyword) >= 0
            )
              result.push(element);
          });
        }
        this.searchList = result;
      }, 100);
    }
  },
  computed: {
    hasNoData() {
      return !this.searchList.length;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
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
        font-family: 'Microsoft Yahei', Arial
        box-sizing: border-box
        color: #555
        text-align: center

.search-content
    z-index: 2
    position: absolute
    overflow: hidden
    bottom: 0
    top: 1.58rem
    width: 100%
    background-color: #eeeeee

    .search-item
        background-color: #fff
        line-height: 0.76rem
        padding-left: 0.2rem

    .tips
        color: #666
</style>
