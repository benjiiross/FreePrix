<template>
  <NavigationBar />
  <div class="d-flex flex-column p-5 rounded-5 m-2 justify-content-center">
    <h2 class="text-center">Cart</h2>

    <HorizontalScrollComponent :articles="cart" :cart="true" />
    <h2>Total = {{ cart.reduce((acc, item) => acc + item.unitPrice, 0) }}$</h2>
    <button @click="removeAll" class="btn btn-danger w-50 mx-auto">
      Clear cart
    </button>
  </div>

  <PutFoward1 />
</template>

<script>
import PutFoward1 from "../components/PutFoward1.vue";
import NavigationBar from "../components/NavigationBar.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";

export default {
  components: {
    PutFoward1,
    HorizontalScrollComponent,
    NavigationBar,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    removeAll() {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("loggedIn"),
          "Content-Type": "application/json",
        },
      };

      fetch(`/api/articleBoughts/`, options)
        .then((response) => response.json())
        .then((response) => (this.sneakersList = response))
        .catch((err) => console.error(err));

      this.$router.go(0);
    },
  },
  beforeMount() {
    const options = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("loggedIn"),
        "Content-Type": "application/json",
      },
    };

    fetch("/api/articleBoughts", options)
      .then((response) => response.json())
      .then((response) => (this.cart = response))
      .catch((err) => console.error(err));
  },
};
</script>
