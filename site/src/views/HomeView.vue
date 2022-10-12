<template>
  <NavigationBar />
  <PutFoward2 />

  <NewArrivalCategory />

  <PanelPhoto />
  <PutFoward1 />

  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import NewArrivalCategory from "../components/NewArrivalCategory.vue";
import PutFoward1 from "../components/PutFoward1.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import AllLinks from "../components/AllLinks.vue";
export default {
  components: {
    AboutUs,
    NavigationBar,
    NewArrivalCategory,
    PutFoward1,
    PutFoward2,
    PanelPhoto,
    AllLinks,
  },
};
</script>

<style></style>
