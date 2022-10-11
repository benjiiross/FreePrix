<template>
  <div class="bg-white p-5 rounded-5">
    <div><h2>Pants</h2></div>

    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <NewArrivalCard
        v-for="item in pantsList"
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
      pantsList: [
        {
          id: 0,
          product: "Beige",
          image:
            "https://s.alicdn.com/@sc04/kf/H184eb76fd0814d3ebb17db1c43666acao.jpg_720x720q50.jpg",
          description: "A beige cargo",
        },
        {
          id: 1,
          product: "Jean",
          image:
            "https://ae01.alicdn.com/kf/H5be9bf9ea98f486992d623f49258ed525/Streetwear-Women-s-Bodycon-Jeans-woman-Fashion-Patchwork-Harajuku-Aesthetic-Pants-Jeans-for-women-High-Waisted.jpg_Q90.jpg_.webp",
          description: "A blue jean two colors",
        },
        {
          id: 2,
          product: "Large",
          image:
            "https://img.joomcdn.net/ce08bd835227c3ec1971d225037ae157793f021d_original.jpeg",
          description: "A blue large jean",
        },
        {
          id: 3,
          product: "Blanc",
          image:
            "https://i.pinimg.com/originals/b1/70/ce/b170ce96dd4902f8589d69959ec48f96.jpg",
          description: "A white jogging",
        },
        {
          id: 4,
          product: "Nude",
          image:
            "https://ae01.alicdn.com/kf/H75254cfda8d44ee9890cf92f798f4e26M.jpg",
          description: "A nude jogging",
        },
        {
          id: 5,
          product: "Blue",
          image:
            "https://ae01.alicdn.com/kf/Sb9080a45157b4fcea0a511f1979cb36ag/High-Waist-Jeans-Women-Streetwear-Straight-Jean-Femme-Summer-Blue-Cotton-Cargo-Pants-Streetwear-Cool-Harajuku.jpg_.webp",
          description: "A large blue jean",
        },
      ],
    };
  },
};
</script>
