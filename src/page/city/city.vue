<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :allCities="allCities"></city-list>
    <letter-query :allCities="allCities"></letter-query>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import LetterQuery from "./components/LetterQuery";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    LetterQuery
  },
  data() {
    return {
      hotCities: [],
      allCities: {}
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityDataSucc);
    },
    getCityDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.allCities = data.cities;
      }
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
