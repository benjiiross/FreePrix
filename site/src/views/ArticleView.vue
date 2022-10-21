<template>
  <NavigationBar />
  <ArticleViewCard
    v-if="articleFound"
    :image0="article.url"
    :price="article.price"
    :description="article.description"
    :reference="reference"
    :name="article.name"
    :category="article.category"
    :key="article.id"
  />
  <div v-else>
    <h1 class="text-center">Article not found.</h1>
  </div>

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
      articleFound: false,
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(`/api/articles/${this.reference}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.id) {
          this.article = response;
          this.articleFound = true;
        }
      })
      .catch((err) => console.error(err));
  },
};
</script>
