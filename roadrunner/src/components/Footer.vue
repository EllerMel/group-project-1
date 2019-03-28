<template>
  <div class="jumbotron jumbotron-fluid" id="jumbo">
    <div class="container">
      <div class="row">
        <div class="container">
          <footer class="footer text-center">
            <div class="container">
              <div class="row">
                <div class="col-md-7 mb- mb-xs">
                  <h4 class="text-uppercase mb-4" id="location">LOCATION</h4>
                  <p class="lead mb-0 text-center" id="location2">
                    PUT YOUR LOCATION HERE
                    <br>AND ALSO HERE
                  </p>
                </div>
                <div class="col-md-4 mb-5 mb-lg-0">
                  <h4 class="text-uppercase mb-4" id="web">FOLLOW US</h4>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a
                        class="btn btn-outline-light btn-social text-center rounded-circle"
                        href="#">
                      
                        <ion-icon name="logo-google"></ion-icon>
                        <i class="google"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="btn btn-outline-light btn-social text-center rounded-circle"
                        href="#"
                      >
                        <ion-icon name="logo-model-s"></ion-icon>
                        <i class="model-s"></i>
                        
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="btn btn-outline-light btn-social text-center rounded-circle"
                        href="#"
                      >
                        <i class="twitter"></i>
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="btn btn-outline-light btn-social text-center rounded-circle"
                        href="#"
                      >
                        <i class="instagram"></i>
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="btn btn-outline-light btn-social text-center rounded-circle"
                        href="#"
                      >
                        <i class="twitter"></i>
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <br>
          <div class="row float-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
#jumbo {
  font-family: "Fugaz One", cursive;
  background-color: #343a40;
  color: white;
  
}

#location {
    text-align: center;
}

footer, p {
    text-align: center;
}

</style>


<script>
export default {
  name: "Footer"
};
</script>