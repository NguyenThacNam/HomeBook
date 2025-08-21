import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || []
  }),
  getters: {
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalItems: (state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      let existing = this.cart.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }
})
