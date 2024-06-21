// router/index.js  
import { createRouter, createWebHistory } from 'vue-router'  
  
// 导入你的组件  
import Component1 from '@/components/AccessoriesList.vue'  
import Component2 from '@/components/AchievementsList.vue' 
import Component3 from '@/components/ArtList.vue' 
import Component4 from '@/components/BagsList.vue'
import Component5 from '@/components/BottomsList.vue'
import Component6 from '@/components/ConstructionList.vue'
import Component7 from '@/components/DressUpList.vue'
import Component8 from '@/components/FencingList.vue'
import Component9 from '@/components/FishList.vue'
import Component10 from '@/components/FloorsList.vue'
import Component11 from '@/components/FossilsList.vue'
import Component12 from '@/components/HeadwearList.vue'
import Component13 from '@/components/HousewaresList.vue'
import Component14 from '@/components/InsectsList.vue'
import Component15 from '@/components/MiscellaneousList.vue'
import Component16 from '@/components/MusicList.vue'
import Component17 from '@/components/OtherList.vue'
import Component18 from '@/components/PhotosList.vue'
import Component19 from '@/components/PostersList.vue'
import Component20 from '@/components/ReactionsList.vue'
import Component21 from '@/components/RecipesList.vue'
import Component22 from '@/components/RugsList.vue'
import Component23 from '@/components/ShoesList.vue'
import Component24 from '@/components/SocksList.vue'
import Component25 from '@/components/ToolsList.vue'
import Component26 from '@/components/TopsList.vue'
import Component27 from '@/components/UmbrellasList.vue'
import Component28 from '@/components/VillagersList.vue'
import Component29 from '@/components/WallMountedList.vue'
import Component30 from '@/components/WallpaperList.vue'
import Component31 from '@/components/ActivityList.vue'
import Component32 from '@/components/SeaCreaturesList.vue'
import Component33 from '@/components/ParadisePlanningList.vue'
// ... 导入其他组件  
  
const routes = [  
  { path: '/component1', component: Component1 },  
  { path: '/component2', component: Component2 },  
  { path: '/component3', component: Component3 },  
  { path: '/component4', component: Component4 }, 
  { path: '/component5', component: Component5 },
  { path: '/component6', component: Component6 },
  { path: '/component7', component: Component7 },
  { path: '/component8', component: Component8 },
  { path: '/component9', component: Component9 },
  { path: '/component10', component: Component10 },
  { path: '/component11', component: Component11 },
  { path: '/component12', component: Component12 },
  { path: '/component13', component: Component13 },
  { path: '/component14', component: Component14 },
  { path: '/component15', component: Component15 },
  { path: '/component16', component: Component16 },
  { path: '/component17', component: Component17 },
  { path: '/component18', component: Component18 },
  { path: '/component19', component: Component19 },
  { path: '/component20', component: Component20 },
  { path: '/component21', component: Component21 },
  { path: '/component22', component: Component22 },
  { path: '/component23', component: Component23 },
  { path: '/component24', component: Component24 },
  { path: '/component25', component: Component25 },
  { path: '/component26', component: Component26 },
  { path: '/component27', component: Component27 },
  { path: '/component28', component: Component28 },
  { path: '/component29', component: Component29 },
  { path: '/component30', component: Component30 },
  { path: '/component31', component: Component31},
  { path: '/component32', component: Component32},
  { path: '/component33', component: Component33},

  // ... 其他路由配置  
]  
  
const router = createRouter({  
  history: createWebHistory(process.env.BASE_URL),  
  routes  
})  
  
export default router