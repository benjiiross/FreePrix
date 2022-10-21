<template>
  <NavigationBar />
  <div class="d-flex flex-column p-5 rounded-5 m-2 justify-content-center">
    <h2 class="text-center">Cart</h2>

    <HorizontalScrollComponent :articles="cart" :cart="true" />
    <h1 class="text-center">Order</h1>

    <div class="d-flex flex-column m-5">
      <div>
        <label for="shippingAddress" class="d-flex justify-content-center"
          >Please enter your shipping address.</label
        >
        <input
          type="text"
          class="form-control w-25 mx-auto"
          v-model="shipping"
          id="shippingAddress"
          placeholder="shipping"
        />
      </div>

      <button @click="order" class="btn btn-primary w-25 mx-auto m-5">
        Order: {{ cart.reduce((acc, item) => acc + item.unitPrice, 0) }}$
      </button>
    </div>

    <h1 class="text-center">Previous orders</h1>

    <div v-for="item in orderList" :key="item.id" class="mt-5">
      <h5>
        Total price: {{ item.totalPrice }}$, shipping address:
        {{ item.shippingAddress }}
      </h5>
      <HorizontalScrollComponent
        :articles="item.articleBoughts"
        :cart="true"
        :ordered="true"
      />
    </div>
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
      shipping: "",
      orderList: [],
    };
  },
  watch: {
    shipping() {
      if (
        document
          .getElementById("shippingAddress")
          .classList.contains("border-danger")
      ) {
        document
          .getElementById("shippingAddress")
          .classList.remove("border-danger");
      }
    },
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
    order() {
      if (!this.shipping) {
        document
          .getElementById("shippingAddress")
          .classList.add("border-danger");
      } else {
        const options = {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("loggedIn"),
            "Content-Type": "application/json",
          },
          body: `{"shippingAddress": "${this.shipping}"}`,
        };

        fetch("/api/orderLists", options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            this.$router.go(0);
          })
          .catch((err) => console.error(err));
      }
    },
  },
  beforeMount() {
    let options = {
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

    fetch("/api/orderLists", options)
      .then((response) => response.json())
      .then((response) => {
        this.orderList = response;
      })
      .catch((err) => console.error(err));
  },
};
</script>
