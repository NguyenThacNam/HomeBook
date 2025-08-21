<template>

  <section class="padding-large">
    <div class="container">
      <!-- Loading -->
      <div v-if="loading" class="text-center py-4">Đang tìm kiếm...</div>

      <!-- Không tìm thấy -->
      <div v-else-if="books.length === 0" class="text-center py-4">
        Không tìm thấy sách nào.
      </div>

      <!-- Danh sách -->
      <div v-else>
        <div
          class="section-title d-md-flex justify-content-between align-items-center mb-4"
        >
          <h3 class="d-flex align-items-center">Danh sách sách</h3>
        </div>

        <div class="row g-4">
          <div
            v-for="book in paginatedBooks"
            :key="book.id"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="card position-relative p-4 border rounded-3">
              <div class="image-wrapper">
                <img
                  :src="getThumbnailUrl(book.thumbnail)"
                  :alt="book.title"
                  class="shadow-sm"
                />
              </div>
              <h6 class="mt-4 mb-0 fw-bold" style="color: #2ecc68">
                {{ book.title }}
              </h6>

              <div
                class="card-concern position-absolute start-0 end-0 d-flex gap-2"
              >
                <button
                  type="button"
                  class="btn btn-dark"
                  title="Xem chi tiết"
                  @click="goToDetail(book.id)"
                >
                  <svg
                    class="eye"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 
       6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 
       4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 
       5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
                    />
                  </svg>
                </button>
                <a href="#" class="btn btn-dark" title="Thêm vào yêu thích">
                  <svg class="wishlist">
                    <use xlink:href="#heart"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Phân trang -->
        <div class="pagination mt-4 text-center">
          <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="{ active: currentPage === page }"
          >
            {{ page }}
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      books: [],
      loading: true,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.books.length / this.itemsPerPage);
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.books.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
   async fetchSearchResults() {
  this.loading = true;
  const token = localStorage.getItem("token"); // Lấy token từ localStorage
  try {
    const res = await axios.get(
      `http://localhost:8080/api/book/search?keyword=${encodeURIComponent(this.query)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Thêm token vào header
        },
      }
    );
    this.books = res.data;
    this.currentPage = 1;
  } catch (err) {
    console.error("Lỗi khi tìm kiếm:", err);
  }
  this.loading = false;
},

    getThumbnailUrl(fileName) {
      return fileName
        ? `http://localhost:8080/uploads/${fileName}`
        : "https://via.placeholder.com/250x350?text=No+Image";
    },
    goToDetail(id) {
      this.$router.push(`/book/${id}`);
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.query = this.$route.query.query || "";
    if (this.query) {
      this.fetchSearchResults();
    }
  },
  watch: {
    "$route.query.query"(newVal) {
      this.query = newVal;
      this.fetchSearchResults();
    },
  },
};
</script>

<style scoped>
.pagination button.active {
  font-weight: bold;
  background-color: #2ecc68;
  color: white;
}
</style>
