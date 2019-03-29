<template>
  <div >
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form class="addCar" @submit.prevent="onSubmit">
          <h3>Add Vehicle</h3>

          <p>
            <label for="carMake">Make:</label>
            <input id="carMake" v-model="carMake">
          </p>

          <p>
            <label for="carModel">Model:</label>
            <input id="carModel" v-model="carModel">
          </p>

          <p>
            <label for="carYear">Year:</label>
            <select id="carYear" v-model.number="carYear">
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
            </select>
          </p>

          <p>
            <label for="carColor">Color:</label>
            <input id="carColor" v-model="carColor">
          </p>

          <p>Image:</p>
          <input type="file" id="myFile" name="filename2">

          <div class="mt-3">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addCar",
  data() {
    return {
      carMake: null,
      carModel: null,
      carYear: null,
      carColor: null,
      carImg: null,
      newCar: {}
    };
  },
  methods: {
    onSubmit() {
      this.newCar = {
        carMake: this.carMake,
        carModel: this.carModel,
        carYear: this.carYear,
        carColor: this.carColor,
        carImg: this.carImg
      };
      this.$emit("car-submitted", this.newCar);
      this.carMake = null;
      this.carModel = null;
      this.carYear = null;
      this.carColor = null;
      this.carImg = null;
    }
  }
};
</script>

<style>
.addCar {
  width: 300px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

p {
  text-align: left;
}

input {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  border: 1px solid #d8d8d8;
}

select {
  width: 100px;
  height: 40px;
  border: 1px solid #d8d8d8;
}
</style>