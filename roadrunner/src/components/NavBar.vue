<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/img/logo3.png">
      </a>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-navbar-brand href="/">HOME</b-navbar-brand>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-navbar-brand href="/#AboutUs">ABOUT US</b-navbar-brand>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-navbar-brand href="#inventory">INVENTORY</b-navbar-brand>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <li class="nav-item active">
              <a data-toggle="Subscribe" data-target="#Subscribe">
                <button id="show-modal" @click.prevent="showModal = true" class="white">SUBSCRIBE</button>
                <Subscribe v-if="showModal" @close="showModal = false"></Subscribe>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
          <b-navbar-nav>
            <li class="nav-item active">
              <a data-toggle="Login" data-target="#Login">
                <button id="show-modal" @click.prevent="showLoginModal = true" class="white">LOGIN</button>
                <Login v-if="showLoginModal" @close="showLoginModal = false"></Login>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import Subscribe from "./Subscribe";
import Login from "./Login";

export default {
  name: "NavBar",
  components: {
    Subscribe,
    Login
  },
  props: {
    msg: String
  },
  data() {
    return {
      showModal: false,
      showLoginModal: false
    };
  }
};
</script>

<style>
.white {
  color: white;
  background-color: #343a40 !important;
  border: #343a40;
  font-size: 1.25rem;
}
</style>