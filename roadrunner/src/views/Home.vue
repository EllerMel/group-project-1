<template>
  <div class="home">
    <Header></Header>
    <AboutUs></AboutUs>
    <Footer></Footer>

    <div class="container">
      <div class="card-deck">
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
      </div>
    </div>
  </div>
</template>




<script>
import { mapState } from "vuex";

import AboutUs from "../components/AboutUs.vue";
import Header from "../components/Header.vue";

import Footer from "../components/Footer.vue";
import carCards from "../components/carCards.vue";

export default {
  name: "home",
  components: {
    AboutUs,
    Header,
    Footer,
    carCards
  },
  data() {
    return {};
  },
  methods: {},
  computed: mapState({
    cars: state => state.cars
  })
};
</script>
