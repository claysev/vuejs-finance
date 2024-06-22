import { createApp } from 'vue'

// Components
import App from "./App.vue";

import "./style.css";
import '@splidejs/splide/css';

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
   theme: false,
   components,
   directives,
});

createApp(App).use(vuetify).mount("#app");
