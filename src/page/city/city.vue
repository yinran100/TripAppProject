<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <letter-query></letter-query>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import LetterQuery from "./components/LetterQuery";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    LetterQuery
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
</style>
