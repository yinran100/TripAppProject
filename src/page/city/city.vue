<template>
  <div>
    <city-header></city-header>
    <city-search :allCities="allCities"></city-search>
    <city-list :hotCities="hotCities" :allCities="allCities" :letter="letter"></city-list>
    <letter-query :allCities="allCities" @change="letterChange"></letter-query>
    <layer-text :letter="letter"></layer-text>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import LetterQuery from "./components/LetterQuery";
import LayerText from "./components/LayerText";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    LetterQuery,
    LayerText
  },
  data() {
    return {
      hotCities: [],
      allCities: {},
      letter: ""
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
    },
    letterChange(e) {
      //console.log(e + "!!!");
      this.letter = e;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped>
</style>
