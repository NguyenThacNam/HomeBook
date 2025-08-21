<template>
  <div>
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button type="submit">Đăng nhập</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        await axios.post("/api/auth/login", {
          email: this.email,
          password: this.password,
        });
        this.message = "Đăng nhập thành công!";
        this.$router.push("/"); 
      } catch (err) {
        this.message = err.response?.data || "Lỗi đăng nhập";
      }
    },
  },
};
</script>
