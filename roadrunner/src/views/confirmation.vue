
<template>
  <div class="confirmation">
    <h1>Car Title</h1>
  <CarDetails></CarDetails>
  </div>
</template>

<script>
    
  import CarDetails from '../components/CarDetails.vue';



export default {
  name: 'Confirmation',
  components: {

    CarDetails

  }
}
</script>
