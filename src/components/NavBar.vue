<template>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/Beauty">Beauty & accessories</RouterLink>
        </li>
     </ul>
      <img :src="cart" id="shoppingCart" @click="cartOverview"/>
      <p style=" color: rgba(36, 24, 6, 0.644); position: relative; left: -26%;" v-if="cartCountValue > 0">
      {{ cartCountValue }}</p>
      <h1>DailyShopping</h1>
    </nav>
</template>

<script>
  export default {
methods:{
cartOverview() {
  this.$router.push('/cartOverview');
},
},

data(){
  return {
    cart:"/assets/shopping-cart.png",
    result:[]
  }
},
props:["cartCountValue"]

  }
</script>

<style>

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.253);
  width: 100%;
  height: 50px;


}
ul {
 list-style: none;

}
a {
  text-decoration: none;
  color:rgb(210, 181, 142);
  padding: 5px;
  font-size: 20px;
}
a:hover {
  background-color: rgba(208, 154, 199, 0.644);
  color: rgb(242, 246, 250);
  border-radius: 3px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.194);
}

li {
  display: inline-block;
  padding: 0px 5px 0px 7px;
}
h1 {
  color: rgb(210, 181, 142);
  margin-right: 15px;
  font-size: 30px;
}

#shoppingCart {
  height: 22px;
  width: 22px;
  margin-left: 10px;
  margin-top: 2px;
  position: absolute;
  top: 4%;
  left: 23%;
}

</style>
