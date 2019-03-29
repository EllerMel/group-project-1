<template>
<div>
    <b-input-group>
        <b-dropdown slot="prepend" text="Toggle Filter Here" variant="primary" v-for="i in 1" :key="i">
            <b-dropdown-item>Bentley</b-dropdown-item>
            <b-dropdown-item>BMW</b-dropdown-item>
            <b-dropdown-item>Ferrari</b-dropdown-item>
            <b-dropdown-item>Lamborghini</b-dropdown-item>
            <b-dropdown-item>Mclaren</b-dropdown-item>
            <b-dropdown-item>Nissan</b-dropdown-item>
            <b-dropdown-item>Porsche</b-dropdown-item>
        </b-dropdown>
    </b-input-group>
</div>
</template>


// maybe use v-ifs to show which cards are populated when search dropdown is activated

<script>
export default {
  name: 'Search',
  props: {
      
  },
  computed: {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
