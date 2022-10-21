<template>
  <NavigationBar />
  <ArticleViewCard
    :image0="article.url"
    :price="article.price"
    :description="article.description"
    :reference="reference"
    :name="article.name"
    :key="article.id"
  />

  <PutFoward1 />
</template>

<script>
import ArticleViewCard from "../components/ArticleViewCard.vue";
import PutFoward1 from "../components/PutFoward1.vue";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  components: {
    ArticleViewCard,
    PutFoward1,
    NavigationBar,
  },
  props: {
    reference: String,
  },
  data() {
    return {
      article: {},
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(`/api/articles/${this.reference}`, options)
      .then((response) => response.json())
      .then((response) => (this.article = response))
      .catch((err) => console.error(err));
  },
};
</script>
