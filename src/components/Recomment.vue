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
                src="/images/product-item1.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">HTML5 & CSS3</a>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/product-item1.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">JavaScript</a>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/product-item1.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Bootstrap5</a>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/product-item1.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Java</a>
              </h6>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card position-relative p-4 border rounded-3">
              <img
                src="/images/product-item1.png"
                class="img-fluid shadow-sm"
                alt="product item"
              />
              <h6 class="mt-4 mb-0 fw-bold">
                <a href="#">Oracle Database </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>