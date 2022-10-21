<template>
  <div class="d-flex flex-row flex-nowrap">
    <div class="position-relative w-100 m-2 justify-content-between">
      <router-link :to="`/article?ref=${reference}`">
        <img :src="url" class="w-100" />
      </router-link>
      <div v-if="!reserved">
        <button
          @click="addToCart()"
          type="button"
          class="btn btn-primary rounded-5 position-absolute"
          style="
            font-weight: bold;
            top: 5%;
            left: 5%;
            min-width: 50px;
            font-size: max(1em, 2px);
            transition: 0.5s;
          "
        >
          Order now {{ price }}$
        </button>
      </div>
      <div
        v-else
        class="d-flex flex-column justify-content-between text-center m-2 align-items-stretch"
      >
        <h3>{{ price }}$</h3>
        <h5>{{ name }}</h5>
        <p class="me-auto">{{ description }}</p>
        <button @click="removeItem" class="btn btn-danger flex-shrink-1">
          remove item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    description: String,
    reference: Number,
    name: String,
    price: Number,
    reserved: Boolean,
    id: Number,
  },
  methods: {
    removeItem() {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("loggedIn"),
          "Content-Type": "application/json",
        },
      };

      fetch(`/api/articleBoughts/${this.id}`, options)
        .then((response) => response.json())
        .then((response) => (this.sneakersList = response))
        .catch((err) => console.error(err));

      this.$router.go(0);
    },
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
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

      this.$router.go(0);
    },
  },
};
</script>
