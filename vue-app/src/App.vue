<template>
  <v-app>
    <Header />
    <Hero />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Footer
  }
}
</script>

<style scoped></style>
