<template>
  <div class="bg-white p-5 rounded-5">
    <div><h2>Tee-shirts</h2></div>

    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <NewArrivalCard
        v-for="item in tshirtList"
        :product="item.product"
        :key="item.id"
        :price="item.price"
        :image="item.image"
        :description="item.description"
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
import NewArrivalCard from "./NewArrivalCard.vue";

export default {
  components: {
    NewArrivalCard,
  },
  data() {
    return {
      tshirtList: [
        {
          id: 0,
          product: "Cute",
          image:
            "https://cf.shopee.com.my/file/844d1bb0f810c9d1842d8b9ad98234e7",
          description: "A white and brown crop-top",
        },
        {
          id: 1,
          product: "Leather",
          image:
            "https://i.pinimg.com/originals/fb/a1/2a/fba12a58b6cfdafafbe03c5e46e12d82.png",
          description: "A leather crop-top",
        },
        {
          id: 2,
          product: "Kakis",
          image:
            "https://img.joomcdn.net/815ef5a562e8c4c1382393bc9dc07f706609d90e_original.jpeg",
          description: "A green crop-top",
        },
        {
          id: 3,
          product: "Crop-top",
          image:
            "https://m.media-amazon.com/images/I/61zlwrRPDlL._AC_UL1500_.jpg",
          description: "A beige crop-top",
        },
        {
          id: 4,
          product: "Red",
          image:
            "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/2D/79/rBVaV1xk07iAfCaCAAdkTOwYi5c452.jpg",
          description: "A red crop-top",
        },
        {
          id: 5,
          product: "Green",
          image: "https://i.ebayimg.com/images/g/ZkcAAOSwGm1gEmBC/s-l500.jpg",
          description: "A green crop-top",
        },
      ],
    };
  },
};
</script>
