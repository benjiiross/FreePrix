<template>
  <div class="bg-white p-5 rounded-5">
    <div
      class="d-flex flex-row"
      style="overflow-x: scroll; width: auto; border-radius: 10px"
    >
      <div v-if="cart" class="d-flex flex-row">
        <SneakersCard
          v-for="item in articles"
          :url="item.article.url"
          :description="item.article.description"
          :reference="item.article.reference"
          :name="item.article.name"
          :key="item.article.id"
          :price="item.article.price"
          :reserved="item.article.reserved"
          :id="item.id"
          style="width: 30%; min-width: 250px"
        />
      </div>
      <ArticleCard
        v-else
        @refresh="
          () => {
            this.$forceUpdate();
          }
        "
        v-for="item in articles"
        :name="item.name"
        :url="item.url"
        :description="item.description"
        :exclusivity="item.exclusivity"
        :reference="item.reference"
        :key="item.id"
        :price="item.price"
        :reserved="item.reserved"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
import SneakersCard from "./SneakersCard.vue";

export default {
  components: { ArticleCard, SneakersCard },
  props: {
    articles: Array,
    cart: Boolean,
  },
};
</script>
