<template>
    <h2 id="header">Makeup products, fragrances & bags</h2>
    <input type="text" placeholder="Search..." v-model="searchProducts" style="position: absolute; left: 8%; top:17%"/>
    <div class="productsContainer">
    <div v-for="product in filteredProducts" class="productSection">
        <img :src="product.thumbnail" class="productImages">
    <p style="margin-bottom: 5px;">
        {{ product.brand}}
    </p>
    <p style="margin-bottom: 5px;">
        {{ product.title }}
    </p>
    <p style="font-weight: bold;">
        {{ product.price }} $
    </p>
    <input type="button" value="Add to cart" id="addToCartBtn" @click="addToCart">
    </div>
     </div>
</template>

<script>
 export default {

    data() {
       return { filteredCategories: [],
                Img: null,
                cartCountValue: 0,
                searchProducts: "",


        }

    },
    created() {
      fetch('https://dummyjson.com/products?limit=0')
            .then((res)=>res.json())
            .then((products)=>{
                //Filter through api categories to get specific categories
               const filteredCategories= products.products.filter((products)=>products.category==="beauty" || products.category==="fragrances" || products.category==="womens-bags")
              this.filteredCategories=filteredCategories

            })
        },
        props:["functionToAdd"],
    //Update cart value when clicking on add to cart button and send emit to app.vue to update cart value in navbar component
    methods:{
        addToCart() {
            this.cartCountValue= this.cartCountValue+1
            this.$emit("value-updated",this.cartCountValue)


        }

    },
    //Filter filteredCategories to search by category, title or brand in the search filed
    computed: {
        filteredProducts () {
            if(this.searchProducts!==""){
            return this.filteredCategories.filter((product)=> {
           if(product.title!==undefined || product.category!==undefined || product.brand!==undefined){
           return product.title.toLowerCase().includes(this.searchProducts) ||product.category.toLowerCase().includes(this.searchProducts) ||product.brand.toLowerCase().includes(this.searchProducts)
           }

        })}
        else {
            return this.filteredCategories
        }
    },


  }
  }
</script>

<style>
.productsContainer {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(5, 390px );
    grid-gap: 12px;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 20px 5px;
    text-align: center;
    color: rgb(114, 78, 46);
}

.productSection {
  height: 390px;
  width: 350px;
  background-color: rgb(249, 241, 231);
  border-radius: 10px;

}

#header {
    text-align: center;
    margin-top: 30px;
    color: rgb(210, 181, 142);
}

.productImages {
    height: 250px;
    width: 250px;


}

#addToCartBtn {
    margin-top: 15px;
    background-color: rgba(36, 24, 6, 0.644);
    color: rgb(233, 241, 248);
    border: none;
    height: 40px;
    width: 100px;
    font-size: 19px;
    border-radius: 5px;
    cursor: pointer;
}

</style>
