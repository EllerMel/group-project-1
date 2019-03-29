<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapState } from 'vuex';

export default {
  name: "app",
  components: {
    NavBar,
  },
  computed: mapState({
    cars: state => state.cars,
    id: state => state.cars.id,
    make: state => state.cars.make,
    model: state => state.cars.model,
    year: state => state.cars.year,
    color: state => state.cars.color,
    availability: state => state.cars.availability,
    isPromo: state => state.cars.isPromo,
    img: state => state.cars.img,
    location: state => state.cars.location
  }),
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
