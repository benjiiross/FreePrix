<template>
  <div class="d-flex flex-row flex-nowrap" style="z-index: -1">
    <div class="position-relative w-100 m-2">
      <router-link :to="`/article?ref=${reference}`">
        <img :src="url" class="w-100" />
      </router-link>

      <button
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
      <div class="m-2">
        <h5>{{ name }}</h5>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    description: String,
    reference: String,
    name: String,
    price: Number,
  },
};
</script>
