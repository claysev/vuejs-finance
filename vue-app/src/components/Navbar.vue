<template>
   <nav>
      <ul>
         <li v-for="page in pages" :key="page.page">
            <a :href="page.link">{{ page.page }}</a>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   name: 'Navbar',
   data() {
      return {
         pages: [
            {page: 'Business', link: '/business'},
            {page: 'Services', link: '/services'},
            {page: 'Contact Us', link: '/contact'}
         ]
      }
   }
}
</script>

<style scoped>
   nav { margin-left: auto; }
   ul { display: flex; gap: 10px; list-style: none; }
   a { text-decoration: none; color: #000; }
   a:hover { text-decoration: underline; }
</style>