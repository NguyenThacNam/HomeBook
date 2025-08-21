<template>

  <div class="profile-container" v-if="user">
    <h2>Thông tin cá nhân</h2>
    <p><b>Email:</b> {{ user.email }}</p>
    <p><b>Tên:</b> {{ user.name }}</p>
    <p><b>Địa chỉ:</b> {{ user.address }}</p>
    <p><b>Điện thoại:</b> {{ user.phone }}</p>
     <br>
    <button class="btn btn-primary" @click="logout">Đăng xuất</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/user");
      return;
    }

    try {
      const res = await axios.get("http://localhost:8080/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.user = res.data;
    } catch (err) {
      console.error(err);
      this.$router.push("/user");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/user");
    },
  },
};
</script>

<style>
.profile-container {
  padding: 20px;
}
</style>
