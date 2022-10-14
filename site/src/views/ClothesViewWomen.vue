<template>
  <NavigationBar />

  <h1 class="text-center m-5">Women</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tshirtList" />

  <h2 class="text-center m-5">Hoodies</h2>
  <HorizontalScrollComponent :articles="HoodieList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pantsList" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="CapList" />

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
  data() {
    return {
      tshirtList: [],
      pantsList: [],
      CapList: [],
      HoodieList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch(
      "http://localhost:8080/api/articles?gender=women&category=tee-shirt",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.tshirtList = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?gender=women&category=hoodie",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.HoodieList = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?gender=women&category=pants",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.pantsList = response))
      .catch((err) => console.error(err));

    fetch(
      "http://localhost:8080/api/articles?gender=women&category=cap",
      options
    )
      .then((response) => response.json())
      .then((response) => (this.CapList = response))
      .catch((err) => console.error(err));
  },
  components: {
    AboutUs,
    NavigationBar,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    HorizontalScrollComponent,
  },
};
</script>
