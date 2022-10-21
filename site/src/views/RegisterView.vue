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
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control border-secondary"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
        <div id="passwordHelp" class="form-text">
          Don't share your password with anyone else
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-secondary"
            id="exampleInputPassword1"
            placeholder="First Name"
            v-model="fname"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-secondary"
            id="exampleInputPassword1"
            placeholder="Last Name"
            v-model="lname"
          />
        </div>
        <div class="mb-3">
          <input
            type="date"
            class="form-control border-secondary"
            id="exampleInputPassword1"
            placeholder="Birthday"
            v-model="lname"
          />
          <div id="emailHelp" class="form-text">
            Your Birthday must be +16 years old
          </div>
        </div>
        <div>
          <button
            type="button"
            v-on:click="login"
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
          <router-link :to="`/login`">
            <a class="d-flex justify-content-end" style="font-size: 80%">
              Already member ? Connect you !
            </a>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
export default {
  components: { NavigationBar },
};
</script>
