const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'To keep your feet warm',
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg', quantity: 5 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg', quantity: 0 }
      ],
      sizes: ['S', 'M', 'L'],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1 
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    saleMessage() {
      return `${this.title} is on sale`
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity
    }
  }
})
