
<template>
  <div class="confirmation">
  <DetailCard></DetailCard>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
        <div class="col">
          <div>
            <h3> Reviews </h3>
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


  </div>
</template> 


<script>
    
  import DetailCard from '../components/DetailCard.vue';
  import Review from '../components/Review';



export default {
  name: 'Confirmation',
  components: {

    DetailCard,
    Review,

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

