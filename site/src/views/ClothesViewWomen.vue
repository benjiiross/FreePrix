<template>
  <NavigationBar />

  <h1 class="text-center m-5">Women</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tee_shirt_women_List" />

  <h2 class="text-center m-5">Hoodies</h2>
  <HorizontalScrollComponent :articles="hoodie_women_List" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pants_women_List" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="cap_women_List" />

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
      tee_shirt_women_List: [],
      hoodie_women_List: [],
      pants_women_List: [],
      cap_women_List: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(
      "http://localhost:8080/api/articles?category=tee-shirt&gender=women",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.tee_shirt_women_List = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?category=hoodie&gender=women",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.hoodie_women_List = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?category=pants&gender=women",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.pants_women_List = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?category=cap&gender=women",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.cap_women_List = response))
      .catch((err) => console.error(err));
  },
};
</script>
