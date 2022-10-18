<template>
  <NavigationBar />

  <h1 class="text-center m-5 m-2">Men</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tee_shirt_men_List" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="hoodie_men_List" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pants_men_List" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="cap_men_List" />

  <PanelPhoto />
  <PutFoward2 />
  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import AllLinks from "../components/AllLinks.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";

export default {
  components: {
    AboutUs,
    NavigationBar,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    HorizontalScrollComponent,
  },
  data() {
    return {
      tee_shirt_men_List: [],
      hoodie_men_List: [],
      pants_men_List: [],
      cap_men_List: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(
      "http://localhost:8080/api/articles?category=tee-shirt&gender=men",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.tee_shirt_men_List = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?category=hoodie&gender=men",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.hoodie_men_List = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?category=pants&gender=men",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.pants_men_List = response))
      .catch((err) => console.error(err));

    fetch("http://localhost:8080/api/articles?category=cap&gender=men", options)
      .then((response) => response.json())
      .then((response) => (this.cap_men_List = response))
      .catch((err) => console.error(err));
  },
};
</script>
