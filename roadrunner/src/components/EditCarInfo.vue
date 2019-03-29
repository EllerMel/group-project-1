<template>
  <div class="EditCarInfo">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <form>
            <div class="modal-container container-fluid">
              <div class="modal-header">
                <slot name="header">
                  <h3>Edit Vehicle Information</h3>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="$emit('close')"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </slot>
              </div>
              <div class="modal-body">
                <slot name="body">
                  <div class="text-left">
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
                    <!-- middle stuff here -->
                  </div>
                </slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <button
                    class="btn btn-primary"
                    type="button"
                    @click="checkForm"
                    value="Submit"
                  >Submit</button>
                  <button type="button" class="btn btn-default" @click="reset">Reset</button>
                </slot>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "editCarInfo",
  data() {
    return {
      carMake: null,
      carModel: null,
      carYear: null,
      carColor: null,
      carImg: null
    };
  },
  methods: {
    reset() {
      (this.carMake = ""),
        (this.carModel = ""),
        (this.carYear = ""),
        (this.carColor = ""),
        (this.carImg = "");
    },
    checkForm: function(e) {
      this.$emit("close");
      this.$router.push({ name: "admin" });
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 75%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: black;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>