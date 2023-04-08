import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { key, store } from "./store/store";


createApp(App)
  .use(store, key)
  .mount("#app");
