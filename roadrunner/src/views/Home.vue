<template>
  <div class="home">
    <Header></Header>
    <br>

    <div class="container shadow-lg pl-5 p-3 mb-5 rounded" id="featuredCars">
      <h1 id="feature">
        <strong>FEATURED CARS</strong>
      </h1>
      <br>
      <b-card-group deck>
        <carCards v-for="carObj in promotedCars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
      </b-card-group>
  </div>
  <AboutUs></AboutUs>
  <div class="container shadow-lg pl-5 p-3 mb-5 rounded" id="inventoryCars">
      <br>
      <h1 id="meetFleet"><strong>MEET THE FLEET</strong></h1>
      <br>
      <!-- <Search class="pb-3" id="inventory"></Search> -->
      <b-card-group deck>
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
      </b-card-group>
    </div>
    <Footer></Footer>  
  </div>
</template>

<script>
import { mapState } from "vuex";

import AboutUs from "../components/AboutUs.vue";
import Header from "../components/Header.vue";
import carCards from "../components/carCards.vue";
import Search from "../components/Search.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "home",
  components: {
    AboutUs,
    Header,
    carCards,
    Search,
    Footer
  },
  data() {
    return {
      promotedCars: this.$store.getters.promotedCars
    };
  },
  methods: {},
  computed: mapState({
    cars: state => state.cars
  })
};
</script>

<style scope>
#feature, #meetFleet {
  font-size: 50px;
   font-family: "Fugaz One", cursive;
}

#featuredCars, #inventoryCars {
  background-color: #a6b9cc77;
  

}
</style>