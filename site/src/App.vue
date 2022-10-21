<template>
  <router-view />
  <AboutUs />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import AboutUs from "./components/AboutUs.vue";
export default {
  components: {
    NavigationBar,
    AboutUs,
  },
};
</script>
