<template>
  <div class="bg-white p-5 rounded-5" >
    <div><h2>New Arrival</h2></div>
    
    <div class ="d-flex flex-row" style="overflow-x: scroll; width: 1820px">
      <NewArrivalCard 
      v-for="item in menu"
      :product="item.product"
      :key="item.id"
      :price="item.price"
      :image="item.image"
      :description ="item.description"
      :exclusivity = "item.exclusivity"

    />
    </div>
    
  </div>
</template>


<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  scrollbar-width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none;
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>

<script>

import img0 from "../assets/img/TSBEIGEPARISFR.png"
import img1 from "../assets/img/TSOVERSIZEPARISB.png"
import img2 from "../assets/img/TSOVERSIZEKAKI.png"
import img3 from "../assets/img/TSOVERSIZENOIRROSE.png"
import img4 from "../assets/img/TSOVERSIZEGREY.png"
import img5 from "../assets/img/TSOVERSIZEGRPMZN.png"

import NewArrivalCard from "./NewArrivalCard.vue";


export default {
  components: {

    NewArrivalCard
},
  data() {
    return {
      menu: JSON.parse(localStorage.getItem("menu")),
    };
  },
  beforeMount() {
    console.log("jules");
    // if (!localStorage.getItem("menu")) {
    localStorage.setItem(
      "menu",
      JSON.stringify([
        {
          id: 0,
          image: img0,
          product: "TS Regular Beige",
          price: " 10 $",
          description :" For men : Regular beige t shirt of the brand : Paris.fr"
          
        },
        {
          id: 1,
          image: img1,
          product: "TS Oversize White",
          price: " 10 $",
          description :" For men : Oversize white t shirt of the brand : Paris.fr"
          
        },
        {
          id: 2,
          image: img2,
          product: "TS Oversize Kaki",
          price: " 15 $",
          description :"For men : Oversize kaki t shirt of the brand : ROSEClothing",
          exclusivity : "Member Exclusivity"
          
        },
        {
          id: 3,
          image: img3,
          product: "TS Oversize Black",
          price: " 12$",
          description :"For men : Oversize black t shirt of the brand : ROSEClothing"
          
        },
        {
          id: 4,
          image: img4,
          product: "TS Oversize Grey",
          price: " 17 $",
          description :"For men : Oversize grey t shirt of the brand : ASOS"
          
        },
        {
          id: 5,
          image: img5,
          product: "TS Oversize Black",
          price: " 22  $",
          description :"For men : Oversize black t shirt of the brand : PalmAngeles",
          exclusivity : "Member Exclusivity"
          
        },
        
      ])
    );
    // }
  },
  beforeUnmount() {
    alert("You will exit the page");
  },
};
</script>
