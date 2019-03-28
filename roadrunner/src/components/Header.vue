<template>
  <div class="mainContainer">
    <img src="/img/header.jpg">

    <div class="text-block">
      <h1>ROAD-RUNNER</h1>
      <h3>Exotic Car Rental</h3>
      
      <a href="#inventory" class="btn btn-dark btn-lg">SEARCH</a>
       <button id="show-modal" @click="showModal = true" class="btn btn-dark btn-lg">SUBSCRIBE</button>
            <Subscribe v-if="showModal" @close="showModal = false"></Subscribe>
  
      <br>
      <br>
    </div>
  </div>
</template>

<style scoped>
h1,
h3,
.btn {
  font-family: "Fugaz One", cursive;
}
.btn {
  background-color: #555;
  font-size: 20px;
  color: white;
}

.col {
  background-color: white;
}

.mainContainer {
  position: relative;
  width: 100%;
}
.container {
  position: relative;
}

@media (min-width: 576px) {
  .text-block {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(21, 22, 22, 0.7);

    color: white;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media (min-width: 768px) {
  .text-block {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(21, 22, 22, 0.7);

    color: white;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media (min-width: 992px) {
  .text-block {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: rgba(21, 22, 22, 0.7);

    color: white;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media (min-width: 1200px) {
  .text-block {
    position: absolute;
    bottom: 100px;
    left: 180px;
    background-color: rgba(21, 22, 22, 0.7);

    color: white;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.mainContainer img {
  width: 100%;
  height: auto;
}

.mainContainer .col2 {
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
}

.mainContainer .btn:hover {
  background-color: black;
}
</style>




<script>
import Subscribe from "./Subscribe";

export default {
  name: "Header",
  components: {
    Subscribe
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>





