<script>

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"


export default {
  components:{
  NavBar,
  Footer
  },
  data(){
    return {
      cartCountValue: 0
    }
  },

  //Use emit sent from beauty.vue and add event to routerlink to send updated value to navbar component
  methods:{
     valueUpdated: function(){
     this.cartCountValue= this.cartCountValue + 1
  },

  }

}

</script>

<template>
  <NavBar :cartCountValue="cartCountValue"/>
  <RouterView @value-updated="valueUpdated"/>
  <Footer/>

</template>
<style>
* {
  font-family:"Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
  margin: 0px;
  padding: 0px;
}
</style>
