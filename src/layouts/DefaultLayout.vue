<template>
  <div>
    <Header />
     <!-- Banner chỉ hiển thị ở trang chủ -->
    <Banner v-if="$route.path === '/'" />
    <MiniBanner v-else />
    <Recomment />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import MiniBanner from '../components/MiniBanner.vue'
import Recomment from '../components/Recomment.vue'
import Footer from '../components/Footer.vue'
</script>
<style scoped>
</style>