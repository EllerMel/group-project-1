<template>
  <div class="admin">
    <br>
    <h2>Admin Page</h2>
    <br>
    <div class="row">
      <div class="col center">
        <strong>Inventory Count:</strong>
      </div>
      <div class="col right">{{carCount}}</div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col center">
        <strong>Customer Count:</strong>
      </div>
      <div class="col right">{{customerCount}}</div>
      <div class="col-1"></div>
    </div>
    <br>

    <div>
      <b-button v-b-toggle.collapse-1 variant="primary">Add New Vehicle</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <AddCar></AddCar>
        </b-card>
      </b-collapse>
    </div>
    <br>

    <h3>Inventory</h3>
    <div class="container shadow-lg pl-5 p-3 mb-5 rounded">
      <Search class="pb-3" id="inventory"></Search>
      <b-card-group deck>
        <EditCarCards v-for="carObj in cars" v-bind:carObj="carObj" :key="carObj.id"></EditCarCards>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import AddCar from "../components/AddCar.vue";
import EditCarCards from "../components/EditCarCards.vue";

export default {
  name: "admin",
  components: {
    AddCar,
    EditCarCards,
  },
  data() {
    return {
      carCount: 2000,
      customerCount: 299,
      promotedCars: this.$store.getters.promotedCars
    };
  },
  methods: {},
  computed: mapState({
    cars: state => state.cars
  })
};
</script>

<style>
.center {
  text-align: center;
}
.right {
  text-align: left;
}
</style>