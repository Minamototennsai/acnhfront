import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 使用正确的样式路径

const app = createApp(App);

app.use(router);
app.use(ElementPlus); // 使用 ElementPlus 插件

app.mount('#app');
