<template>
  <div
    class="p-5"
    style="font-family:   Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'"
  >
    <h5 class="text-center p-2" style="color: grey">As you wanted</h5>

    <div class="d-flex flex-row justify-content-center p-2">
      <h1>THE</h1>
      &nbsp; &nbsp;

      <span class="text-primary"><h1>DUNK LOW</h1></span>
    </div>
    <div class="text-center text-primary p-2" style="font-weight: bold">
      <h2>SAIL COAST</h2>
      <h2 style="color: black">ARE HERE !</h2>
    </div>
    <div class="text-center p-2" style="color: grey; font-weight: bold">
      <h5>You want to try them ?</h5>
    </div>
    <div class="d-flex flex-row justify-content-center p-2">
      <router-link :to="`/article?ref=${180001}`"
        ><button
          type="button"
          class="btn btn-secondary rounded-5 m-1 shadow-lg"
          style="font-weight: bold"
        >
          Order now
          <i class="bi bi-cart rounded-5 p-1" style="color: white"></i>
        </button>
      </router-link>

      <button type="button" class="btn btn-primary rounded-5 m-1 shadow-lg">
        More
      </button>
    </div>
  </div>
  <div class="ph d-flex flex-row mt-5" style="width: 500px; height: 500px">
    <img
      class="photo img-thumbnail d-flex flex-row shadow-lg"
      src="https://footpatrolblog.s3.amazonaws.com/wp-content/uploads/2021/06/Nike-Dunk-Low-UNI-BLUE-Blog-1.jpg"
      alt="dunk"
    />
    <img
      class="photo img-thumbnail d-flex flex-row shadow-lg"
      src="https://preview.redd.it/egz4g11qybg61.png?auto=webp&s=2ad440e10efb4186ae5feff8bf280a8b347a5375"
      alt="dunk"
    />
  </div>
</template>

<style scoped>
.photo {
  justify-content: center;
  margin-right: 4cm;
}

.ph {
  margin-left: 2cm;
  margin-right: 0;
}
</style>
