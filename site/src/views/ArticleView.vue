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
  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import ArticleViewCard from "../components/ArticleViewCard.vue";
import AllLinks from "../components/AllLinks.vue";
import PutFoward1 from "../components/PutFoward1.vue";

export default {
  components: {
    AboutUs,
    NavigationBar,
    ArticleViewCard,
    AllLinks,
    PutFoward1,
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
