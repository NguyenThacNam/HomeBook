<template>
  <div class="search-popup" v-if="isSearchOpen">
    <div class="search-popup-container">
      <form
        role="search"
        method="get"
        class="search-form"
        action=""
        @submit.prevent="doSearch"
      >
        <input
          type="search"
          id="search-form"
          class="search-field"
          placeholder="Type and press enter"
          value=""
          name="s"
          v-model="searchQuery"
        />
        <button
          type="submit"
          class="search-button"
          style="background: none; border: none"
        >
          <svg class="search">
            <use xlink:href="#search"></use>
          </svg>
        </button>
      </form>

 
    </div>
  </div>
  <header id="header" class="site-header">
    <div class="top-info border-bottom d-none d-md-block">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">
             Hãy gọi cho chúng tôi<a href="#"> 0968.276.996</a>
            </p>
          </div>
          <div class="col-md-4 border-start border-end">
            <p class="fs-6 my-2 text-center">
              Email <a class="text-decoration-underline" href="#">
                tuyensinh@bachkhoa-aptech.edu.vn</a>
            </p>
          </div>
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">BÁCH KHOA APTECH</p>
          </div>
        </div>
      </div>
    </div>

    <nav id="header-nav" class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="/images/logo-bkat.jpg" class="logo" />
        </a>
        <button
          class="navbar-toggler d-flex d-lg-none order-3 p-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg class="navbar-icon">
            <use xlink:href="#navbar-icon"></use>
          </svg>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="bdNavbar"
          aria-labelledby="bdNavbarOffcanvasLabel"
        >
          <div class="offcanvas-header px-4 pb-0">
            <a class="navbar-brand" href="#">
              <img src="/images/logo-bkat.jpg" class="logo" />
            </a>
            <button
              type="button"
              class="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              data-bs-target="#bdNavbar"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul
              id="navbar"
              class="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1"
            >
              <li class="nav-item">
                <a class="nav-link me-4 active" href="/">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="#">Giới thiệu</a>
              </li>
            
            
              <li class="nav-item">
                <a class="nav-link me-4" href="#">Liên hệ</a>
              </li>
            </ul>
            <div class="user-items d-flex">
              <ul class="d-flex justify-content-end list-unstyled mb-0">
                <li class="pe-3">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      class="user"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                      @click="goUserPage"
                      style="cursor: pointer"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </a>
                  <!-- Modal -->
                </li>
                <li class="search-item pe-3">
                  <a
                    href="#"
                    class="search-button"
                    @click.prevent="isSearchOpen = true"
                  >
                    <svg class="search">
                      <use xlink:href="#search"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      searchQuery: "",
      isSearchOpen: false,
    };
  },
  methods: {
    goUserPage() {
      const token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/profile");
      } else {
        this.$router.push("/user");
      }
    },
    doSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push(
          `/search?query=${encodeURIComponent(this.searchQuery)}`
        );
        this.searchQuery = "";
        this.isSearchOpen = false;
      }
    },
  },
};
</script>



