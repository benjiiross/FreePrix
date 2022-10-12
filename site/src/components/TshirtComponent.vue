<template>
  <div class="bg-white p-5 rounded-5">
    <div><h2>Tee-shirts</h2></div>

    <div class="d-flex flex-row" style="overflow-x: scroll; width: auto">
      <NewArrivalCard
        v-for="item in tshirtList"
        :reference="hfeuhgepih"
        :key="item.id"
        :price="item.price"
        :image="item.url"
        :description="item.url"
      />
    </div>
  </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  scrollbar-width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none;
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
import NewArrivalCard from "./NewArrivalCard.vue";

export default {
  components: {
    NewArrivalCard,
  },
  data() {
    return {
      tshirtList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch("http://localhost:8080/api/articles/category/tee-shirt", options)
      .then((response) => response.json())
      .then((response) => (this.tshirtList = response))
      .catch((err) => console.error(err));
  },
};
</script>
