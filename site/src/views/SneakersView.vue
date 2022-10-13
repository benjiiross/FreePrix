<template>
  <NavigationBar />
  <div class="d-flex flex-column p-5 rounded-5 m-2">
    <h2>Sneakers</h2>
    <div class="d-flex flex-row flex-nowrap">
      <div class="position-relative w-100 m-2">
        <img src="../assets/img/p1.jpg" class="w-100" />
        <button
          type="button"
          class="btn btn-primary rounded-5 position-absolute"
          style="font-weight: bold; top: 5%; left: 5%"
        >
          Order now
          <i class="bi bi-cart rounded-5 p-1" style="color: white"></i>
        </button>
        <div class="m-2">
          <h5>Titre</h5>
          <p>description</p>
        </div>
      </div>

      <div class="position-relative w-100 m-2">
        <img src="../assets/img/p2.jpg" class="w-100" />
        <button
          type="button"
          class="btn btn-primary rounded-5 position-absolute"
          style="font-weight: bold; top: 5%; left: 5%"
        >
          Order now
          <i class="bi bi-cart rounded-5 p-1" style="color: white"></i>
        </button>
        <div class="m-2">
          <h5>Titre</h5>
          <p>description</p>
        </div>
      </div>

      <div class="position-relative w-100 m-2">
        <img src="../assets/img/p1.jpg" class="w-100" />
        <button
          type="button"
          class="btn btn-primary rounded-5 position-absolute"
          style="font-weight: bold; top: 5%; left: 5%"
        >
          Order now
          <i class="bi bi-cart rounded-5 p-1" style="color: white"></i>
        </button>
        <div class="m-2">
          <h5>Titre</h5>
          <p>description</p>
        </div>
      </div>
    </div>
  </div>

  <PutFoward1 />
  <AboutUs />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import AboutUs from "../components/AboutUs.vue";
import PutFoward1 from "../components/PutFoward1.vue";

export default {
  components: {
    NavigationBar,
    AboutUs,
    PutFoward1,
  },
  data() {
    return {
      sneakersList: [],
    };
  },
  beforeMount() {
    const options = { method: "GET" };

    fetch("http://localhost:8080/api/articles/category/sneakers", options)
      .then((response) => response.json())
      .then((response) => (this.sneakersList = response))
      .catch((err) => console.error(err));
  },
};
</script>
