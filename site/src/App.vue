<script setup>
import AboutUs from "./components/AboutUs.vue";
import NavigationBar from "./components/NavigationBar.vue";
import NewArrivalCategory from "./components/NewArrivalCategory.vue";
import PutFoward1 from "./components/PutFoward1.vue";
import ShoeArrivalCategory from "./components/ShoeArrivalCategory.vue";
import AllLinks from "./components/AllLinks.vue";


import PutFoward2 from "./components/PutFoward2.vue";
import PanelPhoto from "./components/PanelPhoto.vue";

</script>

<template>
  <main>
    <NavigationBar/>
    <PutFoward1/>
    <NewArrivalCategory/>
    <!-- <ShoeArrivalCategory/> -->
    <PanelPhoto/>
    <PutFoward2/>
    <AllLinks/>
    <AboutUs/>
  </main>
</template>

<style scoped></style>
