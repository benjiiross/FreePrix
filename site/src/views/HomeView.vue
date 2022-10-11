<template>
  <NavigationBar />
  <PutFoward />
  <NewArrivalCategory />
  <ShoeArrivalCategory />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import NewArrivalCategory from "../components/NewArrivalCategory.vue";
import PutFoward from "../components/PutFoward.vue";
import ShoeArrivalCategory from "../components/ShoeArrivalCategory.vue";
export default {
  components: {
    AboutUs,
    NavigationBar,
    NewArrivalCategory,
    PutFoward,
    ShoeArrivalCategory,
  },
};
</script>

<style></style>
