<template>
  <NavigationBar />

  <h1 class="text-center m-5">Women</h1>

  <h2 class="text-center m-5" id="tee_shirtswomen">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tShirtList" />

  <h2 class="text-center m-5" id="hoodieswomen">Hoodies</h2>
  <HorizontalScrollComponent :articles="hoodieList" />

  <h2 class="text-center m-5" id="pantswomen">Pants</h2>
  <HorizontalScrollComponent :articles="pantsList" />

  <h2 class="text-center m-5" id="capswomen">Caps</h2>
  <HorizontalScrollComponent :articles="capList" />

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
      tShirtList: [],

      pantsList: [],

      capList: [],

      hoodieList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch("/api/articles?gender=women&category=hoodie", options)
      .then((response) => response.json())
      .then((response) => (this.hoodieList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=women&category=pants", options)
      .then((response) => response.json())
      .then((response) => (this.pantsList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=women&category=cap", options)
      .then((response) => response.json())
      .then((response) => (this.capList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=women&category=tee-shirt", options)
      .then((response) => response.json())
      .then((response) => (this.tShirtList = response))
      .catch((err) => console.error(err));
  },
};
</script>
