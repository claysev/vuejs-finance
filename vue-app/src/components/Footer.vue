<template>
   <footer>
      <v-container>
         <v-row class="flex-column">
            <v-col>
               <div id="splide" class="splide">
                  <div class="splide__track">
                     <ul class="splide__list">
                        <li class="splide__slide" v-for="parceiro in parceiros" :key="parceiro.parceiro">
                           <a :href="parceiro.url">{{ parceiro.parceiro }}</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </v-col>
            <v-col class="d-flex justify-center">
               <span>2024 — Clayton Severo</span>
            </v-col>
         </v-row>
      </v-container>
   </footer>
</template>

<script>
import { Splide } from '@splidejs/splide';

export default {
   name: 'Footer',
   data() {
      return {
         parceiros: [
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' },
            { parceiro: "Partner", url: '/parceiro' }
         ]
      }
   },
   mounted() {
      new Splide('#splide', {
         type: 'loop',
         perPage: 6,
         perMove: 1,
         autoplay: true,
         arrows: false,
         pagination: false,
         trimSpace: true,
         gap: '1rem',
         padding: '1rem',
         breakpoints: {
            992: {
               perPage: 4
            },
            768: {
               perPage: 3
            },
            576: {
               perPage: 2
            }
         }
      }).mount();
   }
};
</script>

<style scoped>
@import '@splidejs/splide/dist/css/splide.min.css';

footer { margin-top: 60px; }
li { display: flex; }
a { display: flex; justify-content: center; text-decoration: none; color: #000; padding: .5rem; min-width: 100%; border: 1px dashed #000; border-radius: 30px; }
</style>