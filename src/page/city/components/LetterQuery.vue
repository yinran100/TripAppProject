<template>
    <ul class="letter-list" @click="handleClick">
        <li 
          class="item" 
          v-for="item of letterList" 
          :key="item"
          :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          {{item}}
        </li>
    </ul>
</template>
<script>
export default {
  name: "LetterQuery",
  props: {
    allCities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs[this.letterList[0]][0].offsetTop;
  },
  computed: {
    letterList() {
      return Object.keys(this.allCities);
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("change", e.target.innerText[0]);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 19);
          if (index >= 0 && index < this.letterList.length) {
            this.$emit("change", this.letterList[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/globalstyle.styl'

.letter-list
  position: fixed
  user-select: none
  right: 0
  top: 1.58rem
  width: 0.4rem
  bottom: 0
  display: flex
  flex-direction: column
  justify-content: center

  .item
    line-height: 0.38rem
    color: $backColor
    text-align: center
</style>
