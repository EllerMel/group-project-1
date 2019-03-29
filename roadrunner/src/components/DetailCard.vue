<template>
<div>
    <div class="mt-4">
        <b-card 
        :img-src="carObj.img" img-alt="carDetails" img-left class="mb-3">
            <b-card-text>
                <ul>
                    <li>{{ carObj.make }}</li>
                    <li>{{ carObj.model }}</li>
                    <li>{{ carObj.year }}</li>
                    <li>{{ carObj.color }}</li>
                </ul>  
            </b-card-text>
        </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'Backup',
  props: {      
  },
  computed: {
    carDetails(){
      return this.carObj.make + " " + this.carObj.model
    },
    carURL(){
      return "/confirmation?carID=" + this.carObj.id
    }
  },
   data (){
    return {
      carObj: {},
    }
   },
   created () {
        var cars = this.$store.getters.currentCar(this.$route.query.carID);
        var c = cars[0];
       if(c != undefined){
           this.carObj = c;
       }
       console.log(this.carObj);
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
