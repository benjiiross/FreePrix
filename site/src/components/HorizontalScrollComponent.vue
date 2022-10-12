<template>
  <div class="bg-white p-5 rounded-5">
    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <ArticleCard
        v-for="item in articles"
        :product="item.name"
        :url="item.url"
        :description="item.description"
        :exclusivity="item.exclusivity"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
export default {
  components: { ArticleCard },
  props: {
    articles: Array,
  },
};
</script>
