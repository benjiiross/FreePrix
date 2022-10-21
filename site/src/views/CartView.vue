<template>
  <NavigationBar />
  <div class="d-flex flex-column p-5 rounded-5 m-2">
    <h2 class="text-center">Cart</h2>
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
    <h2>Total = {{ price }}</h2>
  </div>

  <PutFoward1 />
</template>

<script>
import PutFoward1 from "../components/PutFoward1.vue";
import SneakersCard from "../components/SneakersCard.vue";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  components: {
    PutFoward1,
    SneakersCard,
    NavigationBar,
  },
  data() {
    return {
      sneakersList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch("/api/articles?category=tee-shirt", options)
      .then((response) => response.json())
      .then((response) => (this.sneakersList = response))
      .catch((err) => console.error(err));
  },
};
</script>
