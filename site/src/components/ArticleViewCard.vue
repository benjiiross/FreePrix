<template>
  <div class="d-flex flex-row p-2 m-2">
    <img :src="image0" class="w-50 p-5" style="" />

    <div class="d-flex flex-column w-50">
      <div class="m-4">
        <h3>{{ name }}</h3>
        <h5 class="p-4">{{ description }}</h5>

        <p class="text-center">Choose a size</p>

        <div class="d-flex flex-row justify-content-center">
          <div v-if="reference <= 180000">
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >S</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >M</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >L</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >XL</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >2XL</a
            >
          </div>
          <div v-else>
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >38</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >40</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >42</a
            >
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >44
            </a>
            <a
              class="btn m-1"
              type="button"
              style="width: 100px; border: 1px solid grey"
              >46</a
            >
          </div>
        </div>

        <div class="m-4 text-center">
          <button
            type="button"
            class="btn btn-secondary rounded-5"
            style="width: 300px"
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
      <div v-if="reference <= 180000">
        <ul>
          <li>100% cotton</li>
          <li>Machine washable</li>
          <li>Country or region of origin: France</li>
          <li>Product code : {{ reference }}</li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li>100% leather</li>
          <li>Not recommended for machine washing</li>
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
    price: String,
    description: String,
  },
};
</script>
