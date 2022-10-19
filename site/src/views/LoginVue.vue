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
          <button  @click="login" type="button">Submit</button>
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
        body: {
          email: this.email,
          password: this.password,
        },
      };
      fetch("/api/login", options)
        .then((response) => response.json())
        .then((data) => {
          this.isLoggedIn = true;
          this.token = data.token;
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
  },
};
</script>

<style scoped lang="scss">
.login {
  form {
    width: 50%;
    margin: auto;
    text-align: left;
    .innerFrame {
      width: 185px;
      margin: auto;
      label {
        display: block;
      }
      input {
        margin-bottom: 20px;
      }
    }
  }
}
.separator {
  width: 100px;
  margin: 30px auto;
  background-color: #aaa;
  border: 2px solid #aaa;
}
.test {
  width: 185px;
  margin: auto;
  text-align: left;
  table {
    margin-bottom: 20px;
    border-collapse: collapse;
    tr {
      td {
        padding: 5px;
        border: 1px solid black;
      }
    }
  }
}
</style>
