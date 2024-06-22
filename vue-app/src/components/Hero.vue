<template>
   <v-main>
      <v-container>
         <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column align-start justify-center">
               <h1 class="hero-title">Move your Finance <span>Move with Plusbank</span></h1>
               <p class="hero-content">Easily open a bank account in minutes and make money management simples. Enjoy a bank account with flexibilty and rewarding bank.</p>
               <button>Get Started</button>
            </v-col>
            <v-col cols="12" md="6">
               <img :src="imageHero" alt="" class="w-100" />
            </v-col>
         </v-row>
      </v-container>
   </v-main>
</template>

<script>

export default {
   name: 'Hero',
   data() {
      return {
         imageHero: '/img/bank.png',
         imageDescription: 'Bank illustration'
      }
   }
}
</script>

<style scoped>
   .hero-title { font-weight: 300; font-size: 60px; line-height: normal; margin-bottom: 2rem; }
   .hero-title span { display: block; }
   .hero-content { margin-bottom: 2rem; }
   button { background-color: #000; color: #fff; padding: .5rem 1rem; border-radius: 1.2rem }

   @media (max-width: 576px) {
      .hero-title {
         font-size: 30px;
         margin-bottom: 1rem;
      }

      button { width: 100%; }
   }
</style>