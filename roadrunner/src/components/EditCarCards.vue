<template>
<div>
  <b-card
    :title="carObj.model"
    :img-src="carObj.img"
    
    img-top
    
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text class="text-center" style="color: aliceblue">
      {{carObj.year}} {{carObj.make}} {{carObj.model}}.
    </b-card-text>

    <button id="show-modal" @click="showEditModal = true" class="btn btn-dark btn-lg">EDIT</button>
    <EditCarInfo v-if="showEditModal" @close="showEditModal = false"></EditCarInfo>
    <!-- <router-link :to="{ path: 'confirmation', query: { carID: carObj.id }}" class="btn btn-primary btn-lg">Edit Car</router-link> -->
  </b-card>
</div>
</template>

<script>
import EditCarInfo from "../components/EditCarInfo.vue";

export default {
  name: 'EditCarCards',
  components: {
    EditCarInfo
  },
  props: {
    carObj: Object
  },
  data() {
    return {
      showEditModal: false,
    }
  },
  computed: {
    carDetails(){
      return this.carObj.make + " " + this.carObj.model
    },
    carURL(){
      return "/confirmation?carID=" + this.carObj.id
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: rgb(112, 112, 112);
  color:aliceblue;
  text-align: center;
}
img {
  max-width: 100%;
  height: auto;
  background-color: silver;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
