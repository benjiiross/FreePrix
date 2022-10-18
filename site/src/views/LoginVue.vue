<template>
  <div>
    <section class="login">
      <form>
        <div class="innerFrame">
          <div class="field">
            <label for="mail">Email</label>
            <input type="text" name="mail" id="mail" v-model="mail" />
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
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      mail: "",
      password: "",
      isLoggedIn: false,
      token: "",
    };
  },
  methods: {
    login: function () {
      var component = this;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: component.mail,
          password: component.password,
        }),
      };
      fetch("/api/login", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          component.isLoggedIn = true;
          component.token = data.token;
        })
        .catch((error) => {
          console.log(error);
          component.isLoggedIn = false;
        });
    },
    check: function () {
      var component = this;
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: component.token,
        },
      };
      fetch("/api/login/check", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          component.isLoggedIn = data.isLoggedIn;
        });
    },
    getUsers: function () {
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

<style lang="scss">
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
