<template>
<div>
  <b-card
    :title="carObj.model"
    :img-src="carObj.img"
    :img-alt="carDetails"
    img-top
    :tag="carDetails"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{carObj.year}} {{carObj.make}} {{carObj.model}}.
    </b-card-text>

    <router-link to="/confirmation" class="btn btn-primary btn-lg">Rent</router-link>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'carCards',
  props: {
    carObj: Object
      
  },
  computed: {
    cardetails(){
      return this.carObj.make + " " + this.carObj.model
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: rgb(112, 112, 112);
  color:aliceblue
}
img {
  max-width: 100%;
  height: auto;
  background-color: silver;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
