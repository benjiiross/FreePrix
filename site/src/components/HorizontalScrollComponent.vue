<template>
  <div class="bg-white p-5 rounded-5">
    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <NewArrivalCard
        v-for="item in articles"
        :product="item.product"
        :key="item.id"
        :price="item.price"
        :image="item.image"
        :description="item.description"
        :exclusivity="item.exclusivity"
      />
    </div>
  </div>
</template>

<script>
import NewArrivalCard from "./NewArrivalCard.vue";
export default {
  components: { NewArrivalCard },
  props: {
    articles: Array,
  },
};
</script>
