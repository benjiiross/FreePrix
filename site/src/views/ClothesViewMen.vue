<template>
  <NavigationBar />
  <h1 class="text-center m-5 m-2">Men</h1>

  <h2 class="text-center m-5" id="tee-shirtsmen">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tshirtHList" />

  <h2 class="text-center m-5" id="hoodiesmen">Hoodies</h2>
  <HorizontalScrollComponent :articles="HoodieHList" />

  <h2 class="text-center m-5" id="pantsmen">Pants</h2>
  <HorizontalScrollComponent :articles="pantsHList" />

  <h2 class="text-center m-5" id="capsmen">Caps</h2>
  <HorizontalScrollComponent :articles="CapHList" />

  <PanelPhoto />
  <PutFoward2 />
</template>

<script>
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  components: {
    PutFoward2,
    PanelPhoto,
    HorizontalScrollComponent,
    NavigationBar,
  },

  data() {
    return {
      tshirtHList: [],
      pantsHList: [],
      HoodieHList: [],
      CapHList: [],
    };
  },

  beforeMount() {
    const options = { method: "GET" };

    fetch("/api/articles?gender=men&category=tee-shirt", options)
      .then((response) => response.json())
      .then((response) => (this.tshirtHList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=men&category=hoodie", options)
      .then((response) => response.json())
      .then((response) => (this.HoodieHList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=men&category=pants", options)
      .then((response) => response.json())
      .then((response) => (this.pantsHList = response))
      .catch((err) => console.error(err));

    fetch("/api/articles?gender=men&category=cap", options)
      .then((response) => response.json())
      .then((response) => (this.CapHList = response))
      .catch((err) => console.error(err));
  },
};
</script>
