<template>
  <nav class="navbar navbar-expand-lg bg-light position-relative">
    <div class="container-fluid">
      <button class="navbar-brand btn" @click="$router.push('/')">
        <img
          src="../assets/img/serpentlogo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />FreePrix
      </button>

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
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search"
          />
        </form> -->

        <div class="d-flex flex-row">
          <button
            v-if="!loggedIn"
            @click="$router.push('/login')"
            class="navbar-brand d-flex flex-row align-items-center btn"
          >
            <p class="m-0">Login</p>
            <i class="bi bi-box-arrow-in-right" style="font-size: 1.8rem" />
          </button>

          <div
            v-else
            class="navbar-brand d-flex flex-row align-items-center m-0 p-0"
          >
            <p class="m-0 me-3">Hello, {{ user.username }}</p>

            <button class="btn me-3" @click="logout">
              <i class="bi bi-box-arrow-in-left" style="font-size: 1.8rem" />
            </button>
            <button class="btn me-3" @click="$router.push('/account')">
              <i class="bi bi-person" style="font-size: 1.8rem" />
            </button>
          </div>

          <button class="btn" @click="$router.push('/cart')">
            <i class="bi bi-basket3" style="font-size: 1.8rem" />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <div
    v-if="currentPopup === 'men'"
    class="d-flex position-absolute"
    style="left: 39%"
  >
    <div class="card p-5 position-relative" style="left: -50%; z-index: 10">
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
    style="left: 43%"
  >
    <div class="card p-5 position-relative" style="left: -50%; z-index: 10">
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
    logout() {
      localStorage.clear();
      this.$router.go(0);
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
