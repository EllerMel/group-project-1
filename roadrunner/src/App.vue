<template>
  <div id="app">
    <NavBar></NavBar>
  
    <div id="nav">
      <router-link to="/">Home</router-link> |
<<<<<<< HEAD
=======
      <router-link to="/confirmation">About</router-link>
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd
    </div>
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
    isPromoted: state => state.cars.isPromoted,
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
  margin-top: 60px;
}
</style>
