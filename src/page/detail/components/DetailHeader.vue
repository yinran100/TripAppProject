<template>
    <div>
        <router-link tag="div" to="/" class="back-btn" v-show="!headerShow">
           <span class="iconfont back-icon">
                    &#xe624;
                </span>
        </router-link>
        <div class="fixed-header"  v-show="headerShow" :style="opacityStyle">
            <div class="header-left">
                 <router-link to="/" tag="span" class="iconfont back-icon">
                    &#xe624;
                </router-link>
            </div>
            <div class="header-title">
                景点详情
            </div>
        </div>
    </div>
     
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      headerShow: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop; //滚动距离
      if (top > 45) {
        if (top <= 90) {
          this.opacityStyle.opacity = (top - 45) / 45;
        }
        if (!this.headerShow) this.headerShow = true;
      } else if (this.headerShow) this.headerShow = false;
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'
@import '~style/mixins.styl'

.back-btn
  position: absolute
  z-index: 10
  width: 0.7rem
  height: 0.7rem
  line-height: 0.7rem
  color: #fff
  text-align: center
  border-radius: 50%
  background-color: rgba(0, 0, 0, 0.75)
  margin-top: 0.2rem
  margin-left: 0.2rem

.fixed-header
  position: fixed
  width: 100%
  z-index: 10
  height: $headerHeight
  color: #ffffff
  background: $backColor
  line-height: $headerHeight

  .header-left
    float: left

    .back-icon
      font-size: 0.35rem
      padding-left: 0.15rem

  .header-title
    text-align: center
    font-size: 0.34rem
    margin: 0 1rem
    ellipsis()
</style>
