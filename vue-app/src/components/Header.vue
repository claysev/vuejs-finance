<template>
   <header>
      <v-container class="border-b mb-4">
         <v-row>
            <v-col class="d-sm-flex align-center">
               <span>PlusBank.</span>
               <Navbar />
            </v-col>
         </v-row>
      </v-container>
   </header>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
   name: 'Header',
   components: {
      Navbar
   }
}
</script>

<style scoped>
span {
   font-size: 32px;
   font-weight: 700;
}
</style>