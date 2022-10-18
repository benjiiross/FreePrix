<template>
  <NavigationBar />

  <h1 class="text-center m-5 m-2">Men</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tee_shirt_men_List" />

<<<<<<< HEAD
  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="hoodie_men_List" />
=======
  <h2 class="text-center m-5">Hoodies</h2>
  <HorizontalScrollComponent :articles="HoodieHList" />
>>>>>>> 14f82c0798becec88863a0d302b21dccede8a259

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
<<<<<<< HEAD
=======
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
>>>>>>> 14f82c0798becec88863a0d302b21dccede8a259
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
