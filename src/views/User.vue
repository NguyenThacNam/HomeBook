<template>
  <div class="container py-5">
    <div class="tabs-listing">
      <nav>
        <div
          class="nav nav-tabs d-flex justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            class="nav-link text-capitalize active"
            id="nav-sign-in-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-sign-in"
            type="button"
            role="tab"
            aria-controls="nav-sign-in"
            aria-selected="true"
          >
            Sign In
          </button>
          <button
            class="nav-link text-capitalize"
            id="nav-register-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-register"
            type="button"
            role="tab"
            aria-controls="nav-register"
            aria-selected="false"
          >
            Register
          </button>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">
        <!-- Đăng nhập -->
        <div
          class="tab-pane fade active show"
          id="nav-sign-in"
          role="tabpanel"
          aria-labelledby="nav-sign-in-tab"
        >
          <div class="form-group py-3">
            <label class="mb-2">Email *</label>
            <input
              type="text"
              v-model="loginEmail"
              placeholder="Your Email"
              class="form-control w-100 rounded-3 p-3"
              required
            />
          </div>
          <div class="form-group pb-3">
            <label class="mb-2">Password *</label>
            <input
              type="password"
              v-model="loginPassword"
              placeholder="Your Password"
              class="form-control w-100 rounded-3 p-3"
              required
            />
          </div>
          <button @click="handleLogin" class="btn btn-dark w-100 my-3">
            Login
          </button>
        </div>

        <!-- Đăng ký -->
        <div
          class="tab-pane fade"
          id="nav-register"
          role="tabpanel"
          aria-labelledby="nav-register"
        >
          <div class="form-group py-3">
            <label class="mb-2">Name *</label>
            <input
              type="text"
              v-model="registerName"
              placeholder="Your Name"
              class="form-control w-100 rounded-3 p-3"
              required
            />
          </div>
          <div class="form-group py-3">
            <label class="mb-2">Email *</label>
            <input
              type="text"
              v-model="registerEmail"
              placeholder="Your Email"
              class="form-control w-100 rounded-3 p-3"
              required
            />
          </div>
          <div class="form-group py-3">
            <label class="mb-2">Phone</label>
            <input
              type="text"
              v-model="registerPhone"
              placeholder="Your Phone"
              class="form-control w-100 rounded-3 p-3"
            />
          </div>
          <div class="form-group py-3">
            <label class="mb-2">Address</label>
            <input
              type="text"
              v-model="registerAddress"
              placeholder="Your Address"
              class="form-control w-100 rounded-3 p-3"
            />
          </div>
          <div class="form-group pb-3">
            <label class="mb-2">Password *</label>
            <input
              type="password"
              v-model="registerPassword"
              placeholder="Your Password"
              class="form-control w-100 rounded-3 p-3"
              required
            />
          </div>
          <button @click="handleRegister" class="btn btn-dark w-100 my-3">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      registerName: "",
      registerEmail: "",
      registerPhone: "",
      registerAddress: "",
      registerPassword: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await axios.post("http://localhost:8080/api/users/login", {
          email: this.loginEmail,
          password: this.loginPassword,
        });

        const { token } = res.data;
        localStorage.setItem("token", token);

        alert("Đăng nhập thành công!");
        this.$router.push("/");
      } catch (err) {
        alert(err.response?.data || "Lỗi đăng nhập");
      }
    },
    async handleRegister() {
      try {
        await axios.post("http://localhost:8080/api/users/register", {
          name: this.registerName,
          email: this.registerEmail,
          phone: this.registerPhone,
          address: this.registerAddress,
          password: this.registerPassword,
          role: "USER",
        });
        alert("Đăng ký thành công!");
        document.querySelector("#nav-sign-in-tab").click();
      } catch (err) {
        alert(err.response?.data || "Lỗi đăng ký");
      }
    },
  },
};
</script>
