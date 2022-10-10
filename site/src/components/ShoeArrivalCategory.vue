<template>
  <div class="bg-white p-5 rounded-5" >
    <div><h2>Most Sales Shoes</h2></div>
    
    <div class = d-flex>
      <div style="overflow-y: scroll; width: 45%;height: 500px;" >
          <ShoesCard 
          v-for="item in menu"
          :product="item.product"
          :key="item.id"
          :price="item.price"
          :image="item.image"
          :description ="item.description"
          :exclusivity = "item.exclusivity"

      />
      </div>

      <div class = "bg-white p-5" style = "width: 30% ; color: grey; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';">
        <h5>Test de texte jules gravier jules gravier jules gravier jules gravier </h5>
      </div>

      <div style="overflow-y: scroll; width: 45%;height: 500px;" >
          <ShoesCard 
          v-for="item in menu"
          :product="item.product"
          :key="item.id"
          :price="item.price"
          :image="item.image"
          :description ="item.description"
          :exclusivity = "item.exclusivity"

      />
      </div>

      <div class = "bg-white p-5" style = "width: 30% ; color: grey; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';">
        <h5>Test de texte jules gravier jules gravier jules gravier jules gravier </h5>
      </div>

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

import img0 from "../assets/img/NWB550UNC.png"
import img1 from "../assets/img/TSOVERSIZEPARISB.png"
import img2 from "../assets/img/TSOVERSIZEKAKI.png"
import img3 from "../assets/img/TSOVERSIZENOIRROSE.png"
import img4 from "../assets/img/TSOVERSIZEGREY.png"
import img5 from "../assets/img/TSOVERSIZEGRPMZN.png"

import ShoesCard from "./ShoesCard.vue";


export default {
  components: {

  ShoesCard

    
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
          
        }
        
        
       
        
        
      ])
    );
    // }
  },
  beforeUnmount() {
    alert("You will exit the page");
  },
};
</script>
