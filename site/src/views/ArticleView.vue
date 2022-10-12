<template>
  <NavigationBar />
  <ArticleViewCard
    v-for="item in menu"
    :image0="item.image0"
    :image1="item.image1"
    :image2="item.image2"
    :image3="item.image3"
    :id="item.id"
    :product="item.product"
    :price="item.price"
    :description="item.description"
  />
  <PutFoward1 />
  <AllLinks />
  <AboutUs />
</template>

<script>
import img1 from "../assets/img/p1.jpg";
import img2 from "../assets/img/p2.jpg";

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
  data() {
    return {
      menu: JSON.parse(localStorage.getItem("article")),
    };
  },
  beforeMount() {
    console.log("jules");
    // if (!localStorage.getItem("menu")) {
    localStorage.setItem(
      "article",
      JSON.stringify([
        {
          id: 0,
          image0: img1,
          image1: img2,
          image2: img2,
          image3: img1,
          id: "Ensemble PALACE Skateboards",
          product: "Veste et tee-shirt PALACE Skateboards for women",
          price: "120 $",
          description:
            "hduhdpuahdu  hdpuh udh uhdu  hduh  iudhu ihdu  hdh uhdiu hdu hduh",
        },
      ])
    );
  },
};
</script>
