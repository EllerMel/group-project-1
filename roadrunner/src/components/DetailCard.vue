<template>
  <div>
    <div class="container shadow-lg pl-5 p-3 mb-5 rounded" id="featuredCars">
      <div class="mt-4">
        <b-card :img-src="carObj.img" img-alt="carDetails" img-left class="mb-3">
          <b-card-text>
            <ul>
              <li>
                <strong>Make:</strong>
                {{ carObj.make }}
              </li>
              <li>
                <strong>Model:</strong>
                {{ carObj.model }}
              </li>
              <li>
                <strong>Year:</strong>
                {{ carObj.year }}
              </li>
              <li>
                <strong>Color:</strong>
                {{ carObj.color }}
              </li>
              <li><button>Drive Me!</button></li>
            </ul>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div>
      <div class="container shadow-lg pl-5 p-3 mb-5 rounded" id="featuredCars">
        <iframe width: src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28327.23730047265!2d-84.48043223607823!3d38.02851689037736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92c7783d2b2a2d15!2sAwesome+Inc!5e0!3m2!1sen!2sus!4v1553782384275!5m2!1sen!2sus" width="95%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Backup",
  props: {},
  computed: {
    carDetails() {
      return this.carObj.make + " " + this.carObj.model;
    },
    carURL() {
      return "/confirmation?carID=" + this.carObj.id;
    }
  },
  data() {
    return {
      carObj: {}
    };
  },
  created() {
    var cars = this.$store.getters.currentCar(this.$route.query.carID);
    var c = cars[0];
    if (c != undefined) {
      this.carObj = c;
    }
    console.log(this.carObj);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}


img {
  border: 1px solid #d8d8d8;
  width: 25%;
  height: 25%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 60px;
  width: 100px;
  font-size: 16px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

li {
  text-align: center;
  list-style: none;
}

strong {
  font-size: 25px;
}
</style>
