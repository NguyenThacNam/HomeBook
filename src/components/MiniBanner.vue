<template>
  <section
    id="mini-billboard"
    class="d-flex align-items-center py-3 bg-light-gray"
    style="
      background-image: url(/images/banner-image-bg.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 250px;
    "
  >
    <div class="container">
      <div
        class="row d-flex align-items-center justify-content-center text-center"
      >
        <div class="col-md-8">
          <div class="mini-banner-content">
            <h3 class="fw-bold mb-2">Bách Khoa Aptech</h3>
            <a href="/" class="btn btn-sm mt-2">Trang chủ</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#mini-billboard h3 {
  font-size: 20px;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

#mini-billboard .btn {
  background-color: #ff6f61;
  border: none;
  color: white;
}

#mini-billboard .btn:hover {
  background-color: #e55a4d;
}
</style>
