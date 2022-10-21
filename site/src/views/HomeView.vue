<template>
  <NavigationBar />
  <PutFoward2 />
  <div class="d-flex flex-row pl-5 ml-5">
    <h2 style="margin-left: 4%">New Arrival</h2>
  </div>

  <HorizontalScrollComponent :articles="newArrival" />
  <PanelPhoto />
  <PutFoward1 />
</template>

<script>
import PutFoward1 from "../components/PutFoward1.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  data() {
    return {
      newArrival: [],
    };
  },
  components: {
    PutFoward1,
    PutFoward2,
    PanelPhoto,
    HorizontalScrollComponent,
    NavigationBar,
  },
  beforeMount() {
    fetch("/api/articles?newArrival=1&reserved=false")
      .then((response) => response.json())
      .then((response) => (this.newArrival = response))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
