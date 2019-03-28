<template>
  <div class="home">
  <Header></Header>
  <AboutUs></AboutUs>
<<<<<<< HEAD
  <Footer></Footer>

   
=======
<<<<<<< HEAD
    <div class="container">
    <div class="card-deck">
        <carCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></carCards>
    </div>
</div>
  
=======
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd
>>>>>>> 715e05be60d06ae6a4bbf29a1731a3a135dc7322

  </div>
</template>




<script>
  import { mapState } from 'vuex';
      
  import AboutUs from '../components/AboutUs.vue';
  import Header from '../components/Header.vue';
<<<<<<< HEAD
  import Footer from '../components/Footer.vue';
=======
<<<<<<< HEAD
  import carCards from '../components/carCards.vue';
=======
>>>>>>> 715e05be60d06ae6a4bbf29a1731a3a135dc7322


>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd

export default {
  name: 'home',
  components: {
    AboutUs,
    Header,
<<<<<<< HEAD
    Footer
=======
<<<<<<< HEAD
    carCards,
  },
  data (){
    return {
    }
  },
  methods: {

  },
  computed: mapState({
    cars: state => state.cars
  })
=======
>>>>>>> 715e05be60d06ae6a4bbf29a1731a3a135dc7322

  }
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd
}
</script>
