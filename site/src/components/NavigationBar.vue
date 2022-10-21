<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="../assets/img/serpentlogo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />FreePrix
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              :class="{ 'active underline': currentPopup === 'men' }"
              @click="togglePopup('men')"
              >Men</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              :class="{ 'active underline': currentPopup === 'women' }"
              @click="togglePopup('women')"
              >Women</a
            >
          </li>
          <li class="nav-item">
            <a
              href="/sneakers"
              class="nav-link"
              :class="{ 'active underline': currentPopup === 'new' }"
              @click="togglePopup('new')"
              >Sneakers</a
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search"
          />
        </form>

        <a v-if="!loggedIn" href="/login" class="navbar-brand">
          <p>Login</p>
          <i class="bi bi-person" style="font-size: 1.8rem"></i>
        </a>
        <div v-else>
          <p>Hello, {{ user.username }}</p>
        </div>
        <a href="/cart" class="navbar-brand">
          <i class="bi bi-basket3" style="font-size: 1.8rem"></i>
        </a>
      </div>
    </div>
  </nav>

  <div
    v-if="currentPopup === 'sneakers'"
    class="d-flex position-absolute"
    style="left: 45%"
  >
    <div class="card p-5 position-relative popup-width" style="left: -50%">
      <div class="d-flex flex-column flex-sm-row gap-3 justify-content-between">
        <div class="d-flex flex-column">
          <h5>Trends</h5>
          <a class="text-decoration-none text-secondary" href="#"
            >All new arrival</a
          >
          <a class="text-decoration-none text-secondary" href="#"
            >Member exclusivity</a
          >
        </div>
        <div class="d-flex flex-column">
          <h5>News for men</h5>
          <a class="text-decoration-none text-secondary" href="#">Sneakers</a>
          <a class="text-decoration-none text-secondary" href="#">Clothing</a>
        </div>
        <div class="d-flex flex-column">
          <h5>News for women</h5>
          <a class="text-decoration-none text-secondary" href="#">Sneakers</a>
          <a class="text-decoration-none text-secondary" href="#">Clothing</a>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="currentPopup === 'men'"
    class="d-flex position-absolute"
    style="left: 45%"
  >
    <div class="card p-5 position-relative" style="left: -50%">
      <div class="d-flex flex-column flex-sm-row gap-3">
        <div class="d-flex flex-column">
          <h5>Clothing</h5>
          <a class="text-decoration-none text-secondary" href="clothesmen"
            >All the clothes</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clothesmen#tee-shirtsmen"
            >Tee-shirts</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clothesmen#pantsmen"
            >Pants</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clothesmen#hoodiesmen"
            >Hoodies</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clothesmen#capsmen"
            >Caps</a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="currentPopup === 'women'"
    class="d-flex position-absolute"
    style="left: 45%"
  >
    <div class="card p-5 position-relative" style="left: -50%">
      <div class="d-flex flex-column flex-sm-row gap-3 justify-content-between">
        <div class="d-flex flex-column">
          <h5>Clothing</h5>
          <a
            class="text-decoration-none text-secondary hover"
            href="/clotheswomen"
            >All the clothes</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clotheswomen#tee-shirtswomen"
            >Tee-shirts</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clotheswomen#pantswomen"
            >Pants</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clotheswomen#hoodieswomen"
            >Hoodies</a
          >
          <a
            class="text-decoration-none text-secondary"
            href="clotheswomen#capswomen"
            >Caps</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      currentPopup: "",
      loggedIn: localStorage.getItem("loggedIn"),
      user: localStorage.getItem("client"),
    };
  },
  methods: {
    togglePopup(popup) {
      if (this.currentPopup === popup) {
        this.currentPopup = "";
      } else {
        this.currentPopup = popup;
      }
    },
  },
};
</script>

<style>
.popup-width {
  width: 100vw;
}

@media (min-width: 992px) {
  .popup-width {
    width: 60vw;
  }
}

.nav-link {
  cursor: pointer;
}
.hover {
  color: black;
}
</style>
