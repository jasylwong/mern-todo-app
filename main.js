const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'To keep your feet warm',
      image: './assets/images/socks_green.jpeg',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      inventory: 1,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg' }
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
    updateImage(variantImage) {
      this.image = variantImage
    }
  }
})
