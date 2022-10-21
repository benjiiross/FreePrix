<template>
  <NavigationBar />
  <div class="w-100 d-flex justify-content-center p-5">
    <form class="w-25">
      <div class="mb-3">
        <h3 class="text-center p-2">Become a Freeprix Member</h3>

        <p>
          Create a profil to have access to the cart and order all the products
          that you want. Hope your will enjoy our site !
        </p>

        <input
          type="text"
          name="email"
          class="form-control border-secondary"
          :class="{ 'border border-danger': !emailValid }"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
          v-model="email"
        />
        <div v-if="emailValid" id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
        <div v-else id="emailHelp" class="form-text text-danger">
          Please enter a valid email.
        </div>
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control border-secondary"
          :class="{ 'border border-danger': !password }"
          placeholder="Password"
          v-model="password"
        />
        <div v-if="password" id="passwordHelp" class="form-text">
          Don't share your password with anyone else
        </div>
        <div v-else id="passwordHelp" class="form-text text-danger">
          Please enter a password.
        </div>
        <div class="mb-3">
          <input
            type="text"
            :class="{ 'border border-danger': !fname }"
            class="form-control border-secondary"
            placeholder="First Name"
            v-model="fname"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-secondary"
            placeholder="Last Name"
            :class="{ 'border border-danger': !lname }"
            v-model="lname"
          />
        </div>
        <div class="mb-3">
          <input
            type="date"
            class="form-control border-secondary"
            :class="{ 'border border-danger': !birth }"
            v-model="birth"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-secondary"
            placeholder="phoneNumber"
            :class="{ 'border border-danger': !phone }"
            v-model="phone"
          />
        </div>
        <div>
          <button
            type="button"
            v-on:click="register"
            class="btn btn-primary text-center"
          >
            Register to Freeprix
          </button>
          <img
            src="../assets/img/serpentlogo.png"
            alt="Bootstrap"
            width="70"
            height="70"
            class="text-center p-2"
          />
          <button
            @click="this.$router.push({ name: 'login' })"
            class="btn"
            style="font-size: 80%"
          >
            Already member ? Connect you !
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
export default {
  data() {
    return {
      email: "",
      emailValid: true,
      password: "",
      lname: "",
      fname: "",
      birth: new Date().toISOString().split("T")[0],
      phone: "",
    };
  },
  components: { NavigationBar },
  methods: {
    validateEmail() {
      return this.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    register() {
      if (!this.validateEmail()) {
        this.emailValid = false;
      } else {
        this.emailValid = true;
        let client = {
          email: this.email,
          password: this.password,
          surname: this.lname,
          name: this.fname,
          birth: this.birth,
          phone: this.phone,
        };

        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(client),
        };

        fetch("/api/users", options)
          .then((response) => response.json())
          .then((response) => {
            if (response.id) {
              let login = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: response.email,
                  password: response.password,
                }),
              };

              fetch("/api/login", login)
                .then((response) => response.json())
                .then((response) => {
                  localStorage.setItem("loggedIn", response.token);
                  localStorage.setItem("client", JSON.stringify(response.user));
                  this.isLoggedIn = true;
                  this.$router.push({ name: "home" });
                })
                .catch((error) => {
                  console.error(error);
                  this.isLoggedIn = false;
                });
            }
          })
          .catch((err) => console.error(err));
      }
    },
  },
};
</script>
