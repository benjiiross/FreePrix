<template>
  <div class="bg-white p-5 rounded-5" >
    <div><h2>New Arrival</h2></div>
    
    <div class ="d-flex flex-row" style="overflow-x: scroll; width: 1920px">
      <NewArrivalCard 
      v-for="item in menu"
      :product="item.product"
      :key="item.id"
      :price="item.price"
      :image="item.image"
      :description ="item.description"

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

import img0 from "../assets/img/t-shirt-simple-white.png";
import img1 from "../assets/img/t-shirt-simple-noir.png";
import img2 from "../assets/img/P&BSWEAT1.jpg";
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
          product: "White Shirt",
          price: " 5 $",
          description :"j'écris actuellement une description afin de pouvoir regarder si cela marche bien"
          
        },
        {
          id: 1,
          image: img1,
          product: "Black Shirt",
          price: " 5 $",
          description :""
          
        },
        {
          id: 2,
          image: img2,
          product: "Purple Hoodie",
          price: " 15 $",
          description :""
          
        },
        {
          id: 3,
          image: img0,
          product: "White Shirt",
          price: " 5 $",
          description :"j'écris actuellement une description afin de pouvoir regarder si cela marche bien"
          
        },
        {
          id: 4,
          image: img1,
          product: "Black Shirt",
          price: " 5 $",
          description :""
          
        },
        {
          id: 5,
          image: img2,
          product: "Purple Hoodie",
          price: " 15 $",
          description :""
          
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
