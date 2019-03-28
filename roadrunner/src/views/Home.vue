<template>
  <div class="home">
<<<<<<< HEAD
    <Header></Header>
    <AboutUs></AboutUs>
    <Footer></Footer>

    <div class="container">
      <div class="card-deck">
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
      </div>
    </div>
=======
  <Header></Header>
    <div class="container">
      <h1>Our Recommended Cars!</h1>
      <b-card-group deck>
        <carCards v-for="carObj in promotedCars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
      </b-card-group>
  </div>
  <AboutUs></AboutUs>
  <div class="container shadow-lg pl-5 p-3 mb-5 rounded">
    <Search class="pb-3" id="inventory"></Search>
    <b-card-group deck>
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
    </b-card-group>
  </div>
  <Footer></Footer>

>>>>>>> 95df15ac566715616ecd0af451ba19af7318f8af
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapState } from "vuex";

import AboutUs from "../components/AboutUs.vue";
import Header from "../components/Header.vue";

import Footer from "../components/Footer.vue";
import carCards from "../components/carCards.vue";
=======
  import { mapState } from 'vuex';
      
  import AboutUs from '../components/AboutUs.vue';
  import Header from '../components/Header.vue';
  import carCards from '../components/carCards.vue';
  import Search from '../components/Search.vue';
  import Footer from "../components/Footer.vue";
>>>>>>> 95df15ac566715616ecd0af451ba19af7318f8af

export default {
  name: "home",
  components: {
    AboutUs,
    Header,
<<<<<<< HEAD
    Footer,
    carCards
  },
  data() {
    return {};
=======
    carCards,
    Search,
    Footer,
  },
  data (){
    return {
      promotedCars: this.$store.getters.promotedCars
    }
  },
  methods: {
>>>>>>> 95df15ac566715616ecd0af451ba19af7318f8af
  },
  methods: {},
  computed: mapState({
<<<<<<< HEAD
    cars: state => state.cars
  })
};
=======
    cars: state => state.cars,
  }),
  }

>>>>>>> 95df15ac566715616ecd0af451ba19af7318f8af
</script>
