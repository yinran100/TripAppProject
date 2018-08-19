<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
</style>
