<template>
  <NavigationBar />
  <div class="d-flex flex-column p-5 rounded-5 m-2">
    <h2 class="text-center">Sneakers</h2>
    <div class="d-flex flex-row flex-wrap flex-row justify-content-center">
      <SneakersCard
        v-for="item in sneakersList"
        :url="item.url"
        :price="item.price"
        :description="item.description"
        :name="item.name"
        :key="item.id"
        style="width: 30%; min-width: 250px"
      />
    </div>
  </div>

  <PutFoward1 />
  <AboutUs />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import AboutUs from "../components/AboutUs.vue";
import PutFoward1 from "../components/PutFoward1.vue";
import SneakersCard from "../components/SneakersCard.vue";

export default {
  components: {
    NavigationBar,
    AboutUs,
    PutFoward1,
    SneakersCard,
  },
  data() {
    return {
      sneakersList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch("/api/articles?category=sneakers", options)
      .then((response) => response.json())
      .then((response) => (this.sneakersList = response))
      .catch((err) => console.error(err));
  },
};
</script>
