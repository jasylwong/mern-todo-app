const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'To keep your feet warm',
      image: './assets/images/socks_green.jpeg',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      inventory: 20,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' }
      ],
      sizes: ['S', 'M', 'L']
    }
  }
})
