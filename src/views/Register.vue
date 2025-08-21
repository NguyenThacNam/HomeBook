<template>
  <div>
    <h2>Đăng ký</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="name" placeholder="Tên" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button type="submit">Đăng ký</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        await axios.post("/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.message = "Đăng ký thành công!";
      } catch (err) {
        this.message = err.response?.data || "Lỗi đăng ký";
      }
    },
  },
};
</script>
