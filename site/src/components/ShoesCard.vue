<template>
  <div
    class="rounded-2 p-3 shadow-lg shadow-intensity-xl cofcard m-2"
    v-bind:style="{ backgroundColor: bgColor }"
    ref="cofcard"
  >
    <div>
      <img
        :src="image"
        class="rounded-5 shadow shadow-intensity-xl"
        alt="Responsive image"
        style =" width: 500px; height: 600px;"
      />
    </div>
    <div class="d-flex flex-row justify-content-center mt-3">
      <h4 class="mr-auto p-2">{{ product }}</h4>
      <h4 class="ml-auto p-2">{{ price }}</h4>
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    product: String,
    price: String,
    image: String,
    bgColor: String,
    
  },
};
</script>
