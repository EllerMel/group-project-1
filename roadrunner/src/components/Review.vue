<template>
  <div class="container-fluid">
      <form class="review-form" @submit.prevent="onSubmit">
      
        <p class="error" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
            
        <p>
          <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" value="Submit">Submit</button>
        </p>    
      
    </form>
  </div>
</template>

<script>
export default {
  name: "review",
    data() {
      return {
        name: null,
        review: null,
        rating: null,
        errors: [],
        productReview: {}
      }
    },
    methods: {
      onSubmit() {
        this.errors = []
        if(this.name && this.review && this.rating) {
           this.productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
          }
          this.$emit('review-submitted', this.productReview)
          this.name = null
          this.review = null
          this.rating = null
        } else {
          if(!this.name) this.errors.push("Name required")
          if(!this.review) this.errors.push("Review required")
          if(!this.rating) this.errors.push("Rating required")
        }
      }
    }
  }
  </script>

<style>
.review-form {
    width: 300px;
    padding: 20px;
    margin: 40px;
    border: 1px solid #d8d8d8;
}
  
.error {
    color: rgb(206, 0, 0);
}

p {
    text-align:left;
}

input {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    border: 1px solid #d8d8d8;
}
  
textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #d8d8d8;
}

select {
    width: 60px;
    height: 40px;
    border: 1px solid #d8d8d8;
}
</style>