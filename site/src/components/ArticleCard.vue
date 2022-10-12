<template>
  <div
    class="rounded-2 p-3 shadow-lg shadow-intensity-xl cofcard m-2"
    v-bind:style="{ backgroundColor: bgColor }"
    ref="cofcard"
  >
    <div>
      <img
        :src="url"
        class="rounded-5 shadow shadow-intensity-xl"
        alt="Responsive image"
        style="width: 500px; height: 600px"
      />
    </div>
    <div class="d-flex flex-row">
      <h4 class="mr-auto p-2">{{ product }}</h4>
      <h4 class="ml-auto p-2">{{ price }}</h4>
    </div>
    <div class="d-flex flex-row justify-content-between">
      <h6 class="mr-auto p-2 justify-content-start">{{ description }}</h6>
      <div>
        <button
          type="button"
          class="btn btn-primary rounded-5"
          v-on:click="
            {
              bgColor = '#0092FE';
            }
          "
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
    product: String,
    price: Number,
    url: String,
    bgColor: String,
    description: String,
    exclusivity: String,
  },
};
</script>
