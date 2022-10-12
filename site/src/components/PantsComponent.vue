<template>
  <div class="bg-white p-5 rounded-5">
    <div><h2>Pants</h2></div>

    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <ArticleCard
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
import ArticleCard from "./ArticleCard.vue";

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      pantsList: [],
    };
  },
  beforeMount() {},
};
</script>
