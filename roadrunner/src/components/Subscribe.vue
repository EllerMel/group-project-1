<template>
  <div class="Subscribe">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <form>
            <div class="modal-container container-fluid">
              <div class="modal-header">
                <slot name="header">
                  <h3>Subscribe</h3>
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
                    <p v-if="errors.length" class="error">
                      <b>Please correct the following error(s):</b>
                    </p>
                    <ul>
                      <li v-for="error in errors" class="error">{{ error }}</li>
                    </ul>
                    <br>

                    <p>Please select one of the membership types below:</p>
                    <div class="radio">
                      <label>
                        <b-form-radio v-model="selected" name="some-radios" value="A">Standard</b-form-radio>
                    
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                       <b-form-radio v-model="selected" name="some-radios" value="A">Senior: For individuals 65+</b-form-radio>
                      </label>
                    </div>
                    <br>
                    <p>Please complete the following information:</p>
                    <div class="row">
                      <div class="col-sm-2">Full Name:</div>
                      <div class="col">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          v-model="name"
                          class="form-control"
                          placeholder="First and Last Name"
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">Email:</div>
                      <div class="col">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          v-model="email"
                          class="form-control"
                          placeholder="name@example.com"
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">Age:</div>
                      <div class="col">
                        <input
                          type="text"
                          name="age"
                          id="age"
                          v-model="age"
                          class="form-control"
                          placeholder="Age"
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">Phone:</div>
                      <div class="col">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          v-model="phone"
                          class="form-control"
                          placeholder="555-555-5555"
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">Password:</div>
                      <div class="col">
                        <input
                          type="text"
                          name="password"
                          id="password"
                          v-model="password"
                          class="form-control"
                          placeholder="Password"
                        >
                      </div>
                    </div>
                  </div>
                </slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <!-- default footer -->
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
  name: "subscribe",
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      age: "",
      phone: "",
      password: "",
      senior: false
    };
  },
  methods: {
    reset() {
      (this.name = ""),
        (this.email = ""),
        (this.age = ""),
        (this.phone = ""),
        (this.password = "");
    },
    checkForm: function(e) {
      if (this.name && this.email && this.age && this.phone && this.password) {
        this.$emit("close");
        this.$router.push({ name: "home" });
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name is required");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.age) {
        this.errors.push("Age is required");
      }
      if (!this.phone) {
        this.errors.push("Phone is required");
      }
      if (!this.password) {
        this.errors.push("Password is required");
      }

      //e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style>
input [type="radio"] {
  min-width: 16px;
  min-height: 16px;
  vertical-align: text-bottom;
  margin-top: 2px;
}

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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.error {
  color: rgb(206, 0, 0);
}
</style>