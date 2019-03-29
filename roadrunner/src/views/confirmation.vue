
<template>
  <div class="confirmation">
  <DetailCard></DetailCard>
  <div class="jumbotron jumbotron fluid" id="jumboReserve">
    <div class="row">
      <div class="col"></div>
        <div class="col">
          <div>
            <h1> REVIEWS </h1>
            <br>
            <p v-if="!reviews.length">There are no reviews yet.</p>
              <ul v-else>
                  <li v-for="(review, index) in reviews" :key="index">
                    <p>Name: {{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>Review: {{ review.review }}</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"> <Review @review-submitted="addReview"></Review></div>
      <div class="col"></div>
    </div>
  </div>

  <Footer></Footer>


  </div>
</template> 


<script>
    
  import DetailCard from '../components/DetailCard.vue';
  import Review from '../components/Review';
  import Footer from '../components/Footer';



export default {
  name: 'Confirmation',
  components: {

    DetailCard,
    Review,
    Footer

  },
  data(){
    return {
      reviews: []
    }
  },
  methods: {
    addReview(productReview) {
      console.log(productReview);
      this.reviews.push(productReview)
    },
  }
}
</script>
<style scoped>
h1 {
   font-family: "Fugaz One", cursive;
   font-size: 60px;
   
}

#jumboReserve {
   background-color: #a6b9cc77;
}
</style>
