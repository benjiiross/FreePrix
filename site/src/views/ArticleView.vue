<template>
  <NavigationBar />
  <ArticleViewCard
    :image0="img1"
    :image1="img1"
    :image2="img0"
    :image3="img0"
    :name="article.name"
    :price="article.price"
    :description="article.description"
    :reference="reference"
    :key="article.id"
  />
  {{ article.get(price) }}

  <PutFoward1 />
  <AllLinks />
  <AboutUs />
</template>

<script>
import img0 from "../assets/img/p1.jpg";
import img1 from "../assets/img/p2.jpg";

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
      img0: String,
      img1: String,
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(
      // `http://localhost:8080/api/articles?reference=${this.reference}`,
      `http://localhost:8080/api/articles?reference=100001`,
      options
    )
      .then((response) => response.json())
      .then((response) => (this.article = response))
      .then(() => console.log(this.article))
      .catch((err) => console.error(err));
  },
};
</script>
