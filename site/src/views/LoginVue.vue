<template>
  <div>
    <section class="login">
      <form>
        <div class="innerFrame">
          <div class="field">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="email" />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <button @click="login" type="button">Submit</button>
        </div>
      </form>
    </section>

    <div class="separator"></div>

    <section class="test">
      <table>
        <tr>
          <td>Is logged in?</td>
          <td>{{ isLoggedIn }}</td>
        </tr>
        <tr>
          <td>Token UUID</td>
          <td>{{ token }}</td>
        </tr>
      </table>
      <button @click="check">Update</button>
      <button @click="getUsers">Get users</button>
    </section>
  </div>

  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isLoggedIn: false,
      token: "",
    };
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
        .then((data) => {
          this.isLoggedIn = true;
          this.token = data.token;
        })
        .catch((error) => {
          wrongLogin(error);
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

    getUsers() {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("/api/users", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    wrongLogin(error) {},
  },
};
</script>
