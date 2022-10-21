<template>
  <div
    class="rounded-2 p-3 shadow-lg shadow-intensity-xl cofcard m-2"
    ref="cofcard"
  >
    <router-link :to="`/article?ref=${reference}`">
      <img
        :src="url"
        class="rounded-5 shadow shadow-intensity-xl"
        alt="Responsive image"
        style="width: 500px; height: 600px"
      />
    </router-link>

    <div class="d-flex flex-row">
      <h4 class="mr-auto p-2">{{ name }}</h4>
      <h4 class="ml-auto p-2">{{ price }}$</h4>
    </div>
    <div class="d-flex flex-row justify-content-between">
      <h6 class="mr-auto p-2 justify-content-start">{{ description }}</h6>
      <div>
        <button
          type="button"
          class="btn btn-primary rounded-5"
          v-on:click="addToCart()"
        >
          <i
            class="bi bi-cart rounded-5 bg-primary p-1"
            style="color: white"
          ></i>
        </button>
      </div>
    </div>
    <h6 class="mr-auto p-2" style="color: red">{{ exclusivity }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    url: String,
    bgColor: String,
    description: String,
    exclusivity: String,
    reference: Number,
  },
  methods: {
    addToCart() {
      const options = {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("loggedIn"),
          "Content-Type": "application/json",
        },
        body: `{"referenceArticle":${this.reference}}`,
      };

      fetch("/api/articleBoughts", options)
        .then((response) => response.json())
        .then(() => this.$router.go(0))
        .catch((err) => console.error(err));
    },
  },
};
</script>
