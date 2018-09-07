<template>
  <keep-alive>
    <transition :name="transitionName">
      <router-view class="router-class"></router-view>
    </transition>
  </keep-alive>
    
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right" // 默认动态路由变化为slide-right
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-class {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  background-color: #f8f8f8;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0.5;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0.5;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
