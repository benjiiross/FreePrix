<template>
  <NavigationBar />
  <TshirtComponent />
  <PantsComponent />
  <PanelPhoto />
  <PutFoward2 />
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
import TshirtComponent from "../components/TshirtComponent.vue";
import PantsComponent from "../components/PantsComponent.vue";

export default {
  components: {
    AboutUs,
    NavigationBar,
    NewArrivalCategory,
    PutFoward1,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    TshirtComponent,
    PantsComponent,
  },
};
</script>

<style></style>
