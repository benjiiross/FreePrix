<template>
  <NavigationBar />
  <div class="w-100 d-flex justify-content-center p-5">
    <form class="w-25">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="text"
          name="email"
          class="form-control border-secondary"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control border-secondary"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <p id="errorText"></p>
      <div class="d-flex justify-content-evenly">
        <button type="button" v-on:click="login" class="btn btn-primary">
          Login
        </button>
        <button type="button" v-on:click="check" class="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
export default {
    beforeMount: () => {
        if (localStorage.getItem("loggedIn"))
            this.$router.push({ name: "home" });
    },
    data() {
        return {
            email: "",
            password: "",
            isLoggedIn: false,
            token: "",
        };
    },
    watch: {
        email() {
            if (document
                .getElementById("exampleInputEmail1")
                .classList.contains("border-danger")) {
                document
                    .getElementById("exampleInputEmail1")
                    .classList.remove("border-danger");
            }
        },
        password() {
            if (document
                .getElementById("exampleInputPassword1")
                .classList.contains("border-danger")) {
                document
                    .getElementById("exampleInputPassword1")
                    .classList.remove("border-danger");
            }
        },
    },
    methods: {
        login() {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            };
            fetch("/api/login", options)
                .then((response) => response.json())
                .then((response) => {
                if (response.err)
                    this.errorColor(response.err);
                else {
                    localStorage.setItem("loggedIn", response.token);
                    localStorage.setItem("client", JSON.stringify(response.user));
                    this.isLoggedIn = true;
                    this.$router.push({ name: "home" });
                }
            })
                .catch((error) => {
                console.log(error);
                this.isLoggedIn = false;
            });
        },
        check() {
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.token,
                },
            };
            fetch("/api/login/check", options)
                .then((response) => {
                return response.json();
            })
                .then((data) => {
                this.isLoggedIn = data.isLoggedIn;
            });
        },
        errorColor(error) {
            localStorage.setItem("loggedIn", "");
            document.getElementById("errorText").style.color = "red";
            document.getElementById("errorText").textContent = error;
            if (error === "Wrong username.")
                document
                    .getElementById("exampleInputEmail1")
                    .classList.add("border-danger");
            if (error === "Wrong password.")
                document
                    .getElementById("exampleInputPassword1")
                    .classList.add("border-danger");
            else {
                document
                    .getElementById("exampleInputEmail1")
                    .classList.add("border-danger");
                document
                    .getElementById("exampleInputPassword1")
                    .classList.add("border-danger");
            }
        },
    },
    components: { NavigationBar }
};
</script>
