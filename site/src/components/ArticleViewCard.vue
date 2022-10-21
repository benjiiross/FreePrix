<template>
  <div class="d-flex flex-row p-2 m-2">
    <img :src="image0" class="w-50 p-5" style="" />

    <div class="d-flex flex-column w-50">
      <div class="m-4">
        <h3>{{ name }}</h3>
        <h5 class="p-4">{{ description }}</h5>

        <p class="text-center">Choose a size</p>

        <div class="d-flex flex-row justify-content-center">
          <div v-if="category == 'sneakers'">
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              38
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              40
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              42
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              44
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              46
            </button>
          </div>
          <div v-else>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              S
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              M
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              L
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              XL
            </button>
            <button
              class="btn btn-outline-secondary m-1"
              style="width: 100px; border: 1px solid grey"
            >
              2XL
            </button>
          </div>
        </div>

        <div class="m-4 text-center">
          <button
            type="button"
            class="btn btn-secondary rounded-5"
            style="width: 300px"
            @click="addToCart()"
          >
            Order now
            {{ price }}$
          </button>
        </div>
      </div>
      <p>
        Our ambition is to satisfy each of our customers and to offer good
        quality products at low prices. Our products bring you maximum comfort
        and you will be happy to wear them.
      </p>
      <p>Details of the product:</p>
      <div v-if="category == 'sneakers'">
        <ul>
          <li>100% leather</li>
          <li>Not recommended for machine washing</li>
          <li>Country or region of origin: France</li>
          <li>Product code : {{ reference }}</li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li>100% cotton</li>
          <li>Machine washable</li>
          <li>Country or region of origin: France</li>
          <li>Product code : {{ reference }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image0: String,
    image1: String,
    image2: String,
    image3: String,
    reference: String,
    name: String,
    id: String,
    price: Number,
    category: String,
    description: String,
  },
  methods: {
    addToCart() {
      if (!localStorage.getItem("loggedIn")) {
        this.$router.push({ name: "login" });
      } else {
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
          .catch((err) => console.error(err));

        this.$router.go(-1);
      }
    },
  },
};
</script>
