<template>
  <div>
    <header class="header">
      <h1 style="text-align:center;">Animal Crossing New Horizons Information</h1>    </header>
    <main id="app" class="main-box">
      <section id="div1" class="section-box">
        <h2>按种类查询</h2>
        <div class="button-container" v-if="!isComponentActive">
          <div class="button-row" v-for="(row, index) in buttonRows" :key="index">
            <div class="button-wrapper" v-for="(button, btnindex) in row" :key="btnindex">
              <button @click="navigateToComponent(button.route)" class="styled-button">
                <img :src="button.imgSrc" alt="Button Image" class="button-icon">{{ button.text }}
              </button>
            </div>
          </div>
        </div>
        
        <router-view />
      </section>
      <section id="div2" class="section-box" v-if="$route.path === '/'">
        <component31/>
      </section>
    </main>
  </div>
</template>
  
<script>  
import component31 from './components/ActivityList.vue';
export default {  
  name: 'App',  
  mounted () {
    document.title = 'ACNH Information';
  },
  components:{
    component31
  },
  data() {  
    return {  

      buttons:[
      { text: 'Accessories', imgSrc: require('@/assets/accessory.png'), route: '/component1' },
      { text: 'Achievements', imgSrc: require('@/assets/achievements.png'), route: '/component2' },
      { text: 'Art', imgSrc: require('@/assets/art.png'), route: '/component3' },
      { text: 'Bags', imgSrc: require('@/assets/Bags.png'), route: '/component4' },
      { text: 'Bottoms', imgSrc: require('@/assets/Bottoms.png'), route: '/component5' },
      { text: 'Construction', imgSrc: require('@/assets/construction.png'), route: '/component6' },
      { text: 'Dress Up', imgSrc: require('@/assets/Dress-Up.png'), route: '/component7' },
      { text: 'Fencing', imgSrc: require('@/assets/Fencing.png'), route: '/component8' },
      { text: 'Fish', imgSrc: require('@/assets/Fish.png'), route: '/component9' },
      { text: 'Floors', imgSrc: require('@/assets/floors.png'), route: '/component10' },
      { text: 'Fossils', imgSrc: require('@/assets/Fossil.png'), route: '/component11' },
      { text: 'Headwear', imgSrc: require('@/assets/Headwear.png'), route: '/component12' },
      { text: 'Housewares', imgSrc: require('@/assets/housewares.png'), route: '/component13' },
      { text: 'Insects', imgSrc: require('@/assets/insects.png'), route: '/component14' },
      { text: 'Miscellaneous', imgSrc: require('@/assets/miscellaneous.png'), route: '/component15' },
      { text: 'Music', imgSrc: require('@/assets/music.png'), route: '/component16' },
      { text: 'Other', imgSrc: require('@/assets/other.png'), route: '/component17' },
      { text: 'Photos', imgSrc: require('@/assets/photos.png'), route: '/component18' },
      { text: 'Posters', imgSrc: require('@/assets/posters.png'), route: '/component19' },
      { text: 'Reactions', imgSrc: require('@/assets/reactions.png'), route: '/component20' },
      { text: 'Recipes', imgSrc: require('@/assets/Recipe.png'), route: '/component21' },
      { text: 'Rugs', imgSrc: require('@/assets/Rug.png'), route: '/component22' },
      { text: 'Shoes', imgSrc: require('@/assets/Shoes.png'), route: '/component23' },
      { text: 'Socks', imgSrc: require('@/assets/Socks.png'), route: '/component24' },
      { text: 'Tools', imgSrc: require('@/assets/tools.png'), route: '/component25' },
      { text: 'Tops', imgSrc: require('@/assets/Tops.png'), route: '/component26' },
      { text: 'Umbrellas', imgSrc: require('@/assets/Umbrellas.png'), route: '/component27' },
      { text: 'Villagers', imgSrc: require('@/assets/villagers.png'), route: '/component28' },
      { text: 'Wall Mounted', imgSrc: require('@/assets/wall-mounted.png'), route: '/component29' },
      { text: 'Wallpaper', imgSrc: require('@/assets/Wallpaper.png'), route: '/component30' },
      { text: 'Sea Creature', imgSrc: require('@/assets/Sea_Creature.png'), route: '/component32' },
      { text: 'Paradise Planning', imgSrc: require('@/assets/Paradise_Planning.png'), route: '/component33' },
      ],
      isComponentActive: false, // 用于跟踪是否应显示“返回主页”链接  
    };  
  },  
  computed: {
    buttonRows() {
      const rows = [];
      const buttonsPerPage = 4; // 每行显示的按钮数
      for (let i = 0; i < this.buttons.length; i += buttonsPerPage) {
        rows.push(this.buttons.slice(i, i + buttonsPerPage));
      }
      return rows;
    }
  },
  methods: {  
    navigateToComponent(path) {  
      this.isComponentActive = true; // 导航前设置状态  
      this.$router.push(path); // 使用编程式导航  
    },  
    // 可以添加一个方法来处理从子组件返回主页的逻辑（如果需要的话）  
    goBackToHome() {  
      this.isComponentActive = false; // 返回主页时重置状态  
      this.$router.push('/'); // 导航回主页  
    },  
  },  
  watch: {  
    '$route'(to) {  
      // 根据路由变化来更新isComponentActive状态  
      if (to.path === '/' || to.path.startsWith('/other-non-component-paths')) {  
        this.isComponentActive = false;  
      } else {  
        this.isComponentActive = true;  
      }  
    },  
  },  
  // ... 其他选项和方法 ...  
};  
</script>

<style scoped>  
/* 左右分页 */



.box {
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: row;
}
.box > div {
  height: 22px;
  flex: 1;
}

.header {
    background-color: #b2e0e6;
    padding: 20px;
    text-align: center;
    font-size: 2em;
    color: #2c5c5d;
  }
  
  .main-box {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .section-box {
    background-color: rgb(195, 222, 237);
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }


button {  
  display: flex; /* 使用Flexbox布局 */
  flex-direction: column; /* 垂直排列图标和文本 */
  align-items: center; /* 居中对齐 */
  justify-content: center; /* 居中对齐 */
  width: 98%; /* 根据容器宽度自动调整按钮宽度 */
  height: 98%;
  padding: 10px 20px; /* 增加内边距以提供足够的点击区域 */
  margin-bottom: 10px; /* 如果容器内有多个按钮，设置下外边距 */
  font-size: 16px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
  color: #fff; /* 设置字体颜色 */
  background-color: #3498db; /* 设置背景颜色 */
  border: none; /* 移除边框 */
  border-radius: 5px; /* 设置边框圆角 */
  cursor: pointer; /* 鼠标悬停时显示小手图标，表示可点击 */
  transition: background-color 0.3s ease; /* 添加过渡效果，使背景色变化更平滑 */
  
  /* 添加阴影效果 */  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
  
  /* 悬停效果 */  
  &:hover {  
    background-color: #2980b9; /* 鼠标悬停时改变背景颜色 */  
  }  
  
  /* 焦点效果（例如，通过键盘访问时） */  
  &:focus {  
    outline: none; /* 移除默认的焦点轮廓 */  
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5); /* 添加焦点时的阴影效果 */  
  }  
  
  /* 活动效果（例如，按钮被按下时） */  
  &:active {  
    background-color: #20638f; /* 按下按钮时改变背景颜色 */  
    box-shadow: none; /* 移除阴影效果 */  
  }  
}
/* 添加一些样式来美化你的按钮 */  
.button-container {  
  display: flex;  
  flex-direction: column;
  justify-content: center;  
  margin-top: 20px;  
  padding: 10px;  
  width: 700px;
  /* height: 40px; */
  background-color: #fdfcfd;  
  border-radius: 5px;  
  /* 其他样式属性... */  
} 
  
.my-button {
  width: 100%; /* 设置按钮宽度为100% */
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f4f4f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  
.button-row {
  display: flex;
  width: 100%;
}

.button-icon {
  width: 32px; /* 根据需要调整图标大小 */
  margin-right: 5px; /* 添加与文字之间的空白 */
} 
.button-wrapper {
  width: 1000px
}

.my-button:hover {  
  background-color: #ddd;  
}  
</style>