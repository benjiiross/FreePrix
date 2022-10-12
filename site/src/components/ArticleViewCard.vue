<template>
  <div class="d-flex flex-column p-5 rounded-5 m-2">
    <div class="d-flex flex-column flex-nowrap">
      <div class="d-flex flex-row">
        <div class="position-relative w-25 m-2">
          <img :src="image0" class="w-100" />
        </div>

        <div class="position-relative w-25 m-2">
          <img :src="image1" class="w-100" />
        </div>

        <div class="m-4">
          <h3>{{ id }}</h3>
          <p>{{ product }}</p>
          <p>Choose a size</p>
          <div class="d-flex flex-row">
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
          <div class="m-4 text-center">
            <button
              type="button"
              class="btn btn-secondary rounded-5"
              style="width: 300px"
            >
              Order now

              {{ price }}
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row">
        <div class="position-relative w-25 m-2">
          <img :src="image2" class="w-100" />
        </div>

        <div class="position-relative w-25 m-2">
          <img :src="image3" class="w-100" />
        </div>
        <div class="m-4 bg-light p-4" style="max-width: 550px">
          <p>
            Our ambition is to satisfy each of our customers and to offer good
            quality products at low prices. Our products bring you maximum
            comfort and you will be happy to wear them.
          </p>
          <p>Details of the product:</p>
          <ul>
            <li>100% cotton</li>
            <li>Machine washable</li>
            <li>Country or region of origin: France</li>
            <li>Product code : {{}}</li>
          </ul>
        </div>
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
    product: String,
    id: String,
    price: String,
    description: String,
  },
};
</script>
