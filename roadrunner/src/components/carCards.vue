<template>
  <div>
    <b-card
      :title="carObj.model"
      :img-src="carObj.img"
      img-top
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text
        class="text-center"
        style="color: aliceblue"
      >{{carObj.year}} {{carObj.make}} {{carObj.model}}.</b-card-text>

      <router-link
        :to="{ path: 'confirmation', query: { carID: carObj.id }}"
        class="btn btn-primary btn-lg"
      >
        <strong>RENT</strong>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "carCards",
  props: {
    carObj: Object
  },
  computed: {
    carDetails() {
      return this.carObj.make + " " + this.carObj.model;
    },
    carURL() {
      return "/confirmation?carID=" + this.carObj.id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  padding-left: 80px;
  padding-right: 80px;
  font-size: 20px;
}

.card {
  background-color: #343a40;
  color: white;

  text-align: center;
  border-color: aliceblue;
}
img {
  max-width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);

  padding-left: 10px;
  padding-right: 10px;
}
</style>
