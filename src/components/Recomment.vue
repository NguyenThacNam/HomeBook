<template>
  <section id="best-selling-items" class="position-relative padding-large">
    <div class="container">
      <div
        class="section-title d-md-flex justify-content-between align-items-center mb-4"
      >
        <h3 class="d-flex align-items-center">Tài Liệu Nên Đọc</h3>
        <a href="" class="btn">Xem Thêm</a>
      </div>
      <div
        class="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next product-slider-button-next"
      >
        <svg
          class="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
          width="80"
          height="80"
        >
          <use xlink:href="#alt-arrow-right-outline"></use>
        </svg>
      </div>
      <div
        class="position-absolute top-50 start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev product-slider-button-prev"
      >
        <svg
          class="chevron-back-circle d-flex justify-content-center align-items-center p-2"
          width="80"
          height="80"
        >
          <use xlink:href="#alt-arrow-left-outline"></use>
        </svg>
      </div>
      <div class="swiper product-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/html-css.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">HTML5 & CSS3</a>
                <p class="my-2 me-2 fs-6 text-black-50">
                  HTML5 xây dựng cấu trúc và hỗ trợ đa phương tiện, CSS3 thiết
                  kế giao diện, hiệu ứng.
                </p>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/js.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">JavaScript</a>
                <p class="my-2 me-2 fs-6 text-black-50">
                  JavaScript tạo chức năng động, xử lý sự kiện, thay đổi nội
                  dung, thao tác HTML CSS.
                </p>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/btst.jpg"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Bootstrap5</a>
                <p class="my-2 me-2 fs-6 text-black-50">
                  Bootstrap 5 là framework CSS, cung cấp component sẵn có, hỗ
                  trợ responsive, grid system.
                </p>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/java.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Java</a>
                <p class="my-2 me-2 fs-6 text-black-50">
                  Java là ngôn ngữ lập trình đa nền tảng, hướng đối tượng, bảo
                  mật và mạnh mẽ.
                </p>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/orcl-db.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Oracle Database </a>
                <p class="my-2 me-2 fs-6 text-black-50">Oracle Database là hệ quản trị CSDL quan hệ mạnh mẽ, hỗ trợ SQL, bảo mật cao, tin cậy.</p>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.swiper-slide {
  display: flex;
  height: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card img {
  height: 150px;
  object-fit: cover;
}

.card h6 {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h6 a {
  display: block;
  margin-bottom: 8px;
}

.card p {
  flex-grow: 1;
}
</style>