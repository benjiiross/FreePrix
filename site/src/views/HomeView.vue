<template>
  <NavigationBar />
  <PutFoward2 />
  <div class="d-flex flex-row pl-5 ml-5">
    <h2 style="margin-left: 4%">New Arrival</h2>
  </div>

  <HorizontalScrollComponent :articles="newArrival" />
  <PanelPhoto />
  <PutFoward1 />

  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PutFoward1 from "../components/PutFoward1.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import AllLinks from "../components/AllLinks.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";

export default {
  data() {
    return {
      newArrival: [],
    };
  },
  components: {
    AboutUs,
    NavigationBar,
    PutFoward1,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    HorizontalScrollComponent,
  },
  beforeMount() {
    fetch("/api/articles?newArrival=1")
      .then((response) => response.json())
      .then((response) => (this.newArrival = response))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
