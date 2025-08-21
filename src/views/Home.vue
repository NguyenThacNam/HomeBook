<template>
  <section class="padding-large">
    <div class="container">
      <div
        class="section-title d-md-flex justify-content-between align-items-center mb-4"
      >
        <h3 class="d-flex align-items-center">Danh Sách</h3>
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
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      books: [],
      currentPage: 1,
      perPage: 8,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.books.length / this.perPage);
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.books.slice(start, end);
    },
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get("http://localhost:8080/api/book");
        this.books = response.data;
      } catch (error) {
        console.error("Lỗi khi tải danh sách sách:", error);
      }
    },
    getThumbnailUrl(fileName) {
      return fileName ? `http://localhost:8080/uploads/${fileName}` : null;
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
    goToDetail(id) {
      this.$router.push(`/book/${id}`);
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>
<style>
/* Cố định kích thước ảnh */
.image-wrapper {
  width: 100%;
  height: 250px; /* Chiều cao đồng bộ */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-wrapper img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover; /* Cắt ảnh vừa khung */
  border-radius: 8px;
}

/* Để nút ở phía dưới card */
.card {
  padding-bottom: 60px;
}
.card-concern {
  bottom: 15px;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
}

.pagination button {
  background-color: #007bff; /* xanh */
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.pagination button:hover {
  background-color: #0056b3; /* xanh đậm hơn khi hover */
}

.pagination button.active {
  background-color: #28a745; /* xanh lá cho trang đang chọn */
}
</style>
