<template>
  <img :src="image" class="backgroundImg"/>
  <div id="divsContainer">
  <div class="newArrivalsContainer">
     <img :src="newArrivalsImg" id="newArrivalsImg">
     <p style="position: absolute; bottom: 13%; left: 11%; color: palevioletred; font-size: 22px; ">New arrivals</p>
  </div>
  <div class="bestSellersContainer">
    <img :src="bestSellers" id="bestSellers">
    <p style="position: absolute; bottom:-13%; left: 47%; color:palevioletred; font-size: 22px; ">Best sellers</p>
  </div>
  <div class="beautyAndAccContainer" @click="navigateToBeautyPage">
    <img :src="beauty" id="beauty">
    <p style="position: absolute; bottom: 6%; left: 73%; color:palevioletred; font-size: 22px; cursor: pointer;">Beauty & Accessories</p>
  </div>
  </div>
  </template>

<script>
import { createRouter, createWebHashHistory } from "vue-router";
  export default {

    data() {
      return {
         image:"./assets/backgroundImg.jpg",
         newArrivalsImg:"./assets/newArrivals.jpg",
         bestSellers:"./assets/bestSellers.jpg",
         beauty:"./assets/beautyAndAcc.jpg"

      };
    },
   //navigation to beauty page
    methods:{
      navigateToBeautyPage() {
        this.$router.push('/Beauty');

      }
    }
  };



</script>

<style>

.backgroundImg {
height: 370px;
width: 100%;
margin-bottom: 10px;
box-shadow: 10px 10px 20px rgba(100, 99, 99, 0.256);
}

#divsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
.newArrivalsContainer, .beautyAndAccContainer, .bestSellersContainer {
  height: 300px;
  width: 350px;
}

#newArrivalsImg, #bestSellers, #beauty {
  cursor: pointer;
height: 290px;
width: 350px;
border-radius: 7px;
box-shadow: 7px 10px 20px rgba(100, 99, 99, 0.256);
}

</style>
