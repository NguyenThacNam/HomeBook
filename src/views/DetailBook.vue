<template>
  <section class="content-header">
    <h1>Chi tiết sách</h1>
  </section>

  <section class="content">
    <div class="box box-primary">
      <div class="box-body">
        <div v-if="book" class="book-detail-layout">
          <div class="left-column">
            <h2>{{ book.title }}</h2>
            <p>
              <strong>Khóa học:</strong> {{ book.course?.name || "Không có" }}
            </p>
            <div v-if="book.thumbnail">
              <img :src="getThumbnailUrl(book.thumbnail)" width="200" />
            </div>
          </div>

          <div class="right-column">
            <h3>📖 Nội dung</h3>
            <p>{{ book.content }}</p>

            <div v-if="book.pdfFile" style="margin-top: 20px">
              <button @click="viewPdfContent(book.id)">
                📄 Xem nội dung PDF
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <p>Vui lòng đăng nhập để xem ....</p>
        </div>
      </div>
    </div>
    <!-- Modal PDF -->
    <div v-if="showPdfViewer" class="pdf-modal-overlay">
      <div class="pdf-modal-content">
        <div
          style="display: flex; justify-content: flex-end; margin-bottom: 10px"
        >
          <span @click="closePdfContent" class="close-btn">❌ Đóng</span>
        </div>
        <div class="pdf-scroll-container">
          <div v-for="page in pdfPages" :key="page.pageNumber" class="pdf-page">
            <h4>📄 Trang {{ page.pageNumber }}</h4>
            <img :src="page.imagesBase64[0]" alt="PDF Page" class="pdf-image" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="showPasswordModal" class="pdf-modal-overlay">
    <div class="pdf-modal-content">
      <h3>🔐 Nhập mật khẩu để xem PDF</h3>
      <input
        v-model="pdfPassword"
        type="password"
        placeholder="Nhập mật khẩu..."
        class="password-input"
      />
      <div style="margin-top: 10px">
        <button @click="submitPassword">✅ Xác nhận</button>
        <button @click="closePasswordModal" style="margin-left: 10px">
          ❌ Hủy
        </button>
      </div>
      <p v-if="passwordError" style="color: red; margin-top: 10px">
        {{ passwordError }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailBook",
  data() {
    return {
      book: null,
      pdfPages: [],
      showPdfViewer: false,
      showPasswordModal: false,
      pdfPassword: "",
      passwordError: "",
      authenticatedBooks: [], // lưu trạng thái đã xác thực
    };
  },
  mounted() {
    const bookId = this.$route.params.id;
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/book/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.book = res.data;
      })
      .catch((err) => {
        console.error("Lỗi khi tải sách:", err);
      });
  },

  methods: {
    getThumbnailUrl(filename) {
      return `http://localhost:8080/uploads/${filename}`;
    },

    // Khi người dùng bấm nút "Xem PDF"
    viewPdfContent(bookId) {
      if (this.authenticatedBooks.includes(bookId)) {
        this.loadPdfPages(bookId);
        return;
      }
      this.showPasswordModal = true;
      this.pdfPassword = "";
      this.passwordError = "";
    },

    // Gọi API để lấy nội dung PDF sau khi xác thực
    async loadPdfPages(bookId) {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/book/${bookId}/pdf-image-pages`,
          {
            params: { password: this.pdfPassword },
          }
        );
        this.pdfPages = res.data;
        this.showPdfViewer = true;
        this.authenticatedBooks.push(bookId); // lưu trạng thái đã xác thực
        this.showPasswordModal = false;
      } catch (err) {
        if (err.response && err.response.status === 403) {
          this.passwordError = "Sai mật khẩu. Vui lòng thử lại.";
        } else {
          this.passwordError = "Lỗi khi tải nội dung PDF.";
        }
        console.error("Lỗi khi lấy nội dung PDF:", err);
      }
    },

    // Khi người dùng bấm nút "Xác nhận" trong modal
    submitPassword() {
      this.loadPdfPages(this.book.id);
    },

   
    closePasswordModal() {
      this.showPasswordModal = false;
      this.pdfPassword = "";
      this.passwordError = "";
    },

    
    closePdfContent() {
      this.pdfPages = [];
      this.showPdfViewer = false;
    },

    goBack() {
      this.$router.push("/product");
    },
  },
};
</script>

<style scoped>
.content-header h1 {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
}

.content-header small {
  font-size: 14px;
  color: #6b7280;
}

.box {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.box-primary {
  border-top: 4px solid #3b82f6;
}

.box-body h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.box-body h3 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
}

.box-body p {
  font-size: 15px;
  line-height: 1.6;
  color: #374151;
}

.box-body img {
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
}

.box-body button {
  margin-top: 10px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.box-body button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
}
.book-detail-layout {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.left-column {
  flex: 1;
  min-width: 250px;
}

.right-column {
  flex: 2;
  min-width: 300px;
}

.pdf-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 41, 55, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.pdf-modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-height: 90vh;
  overflow-y: auto;
  width: 80%;
}

.pdf-scroll-container {
  max-height: 80vh;
  overflow-y: auto;
}

.pdf-page {
  margin-bottom: 30px;
}

.pdf-image {
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.close-btn {
  cursor: pointer;
  color: #ef4444;
  font-weight: bold;
  font-size: 18px;
  padding: 4px 10px;
  border: 1px solid #ef4444;
  border-radius: 4px;
  background-color: #fff0f0;
  transition: 0.2s;
}

.close-btn:hover {
  background-color: #ffe4e4;
}
.pdf-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.pdf-modal-content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 0.3s ease-out;
}

.pdf-modal-content h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #1f2937;
}

.password-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.password-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.pdf-modal-content button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pdf-modal-content button:first-child {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.pdf-modal-content button:first-child:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
}

.pdf-modal-content button:last-child {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
}

.pdf-modal-content button:last-child:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(239, 68, 68, 0.3);
}

.pdf-modal-content p {
  font-size: 14px;
  margin-top: 12px;
  color: #ef4444;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
