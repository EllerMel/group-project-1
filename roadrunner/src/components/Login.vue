<template>
  <div class="Login">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <h3>Login</h3>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                <form>
                  <div class="text-left">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      v-model="email"
                      class="form-control"
                      placeholder="Email Address"
                    >
                    <br>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      v-model="password"
                      class="form-control"
                      placeholder="Password"
                    >
                    <br>
                    <div id="remember" class="checkbox">
                      <label>
                        <input type="checkbox" value="remember-me"> Remember me
                      </label>
                    </div>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block btn-signin"
                    @click="$emit('close')"
                  >Sign In</button>
                  <br>
                  <a href="#" class="forgot-password">Forgot the password?</a>
                </form>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
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
</style>