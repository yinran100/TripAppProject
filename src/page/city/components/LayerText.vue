<template>
    <div class="layer-text" v-show="isShow">
        {{letter}}
    </div>
</template>
<script>
export default {
  name: "LayerText",
  props: {
    letter: String
  },
  data() {
    return {
      isShow: false,
      timer: null
    };
  },
  watch: {
    letter() {
      this.isShow = true;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.isShow = false;
      }, 1000);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.layer-text
  display: flex
  justify-content: center
  position: absolute
  width: 2.4rem
  top: 35%
  left: 33.33%
  font-size: 1.2rem
  background-color: rgba(0, 0, 0, 0.1)
  line-height: 2
  border-radius: 0.5rem
  color: #fff
</style>
