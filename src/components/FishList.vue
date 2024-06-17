<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getFishes" class="styled-button">获取所有fish</button>  
      
      <table v-if="Fishes.length">  
        <h3>[Table fish]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>   
            <th>sell</th>  
            <th>whereHow</th>
            <th>shadow</th>
            <th>totalCatchesToUnlock</th>
            <th>spawnRates</th>
            <th>rainSnowCatchUp</th>
            <th>nhJan</th>
            <th>nhFeb</th> 
            <th>nhMar</th> 
            <th>nhApr</th> 
            <th>nhMay</th> 
            <th>nhJun</th> 
            <th>nhJul</th> 
            <th>nhAug</th> 
            <th>nhSep</th> 
            <th>nhOct</th> 
            <th>nhNov</th> 
            <th>nhDec</th> 
            <th>shJan</th> 
            <th>shFeb</th> 
            <th>shMar</th> 
            <th>shApr</th> 
            <th>shMay</th> 
            <th>shJun</th> 
            <th>shJul</th> 
            <th>shAug</th> 
            <th>shSep</th>
            <th>shOct</th>
            <th>shNov</th>
            <th>shDec</th>
            <th>color_1</th>
            <th>color_2</th>
            <th>size</th>
            <th>lightingType</th>
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="fish in Fishes" :key="fish.id">  
            <td>{{ fish.id }}</td>
            <td>{{ fish.name }}</td>  
            <td>{{ fish.sell }}</td> 
            <td>{{ fish.whereHow }}</td>  
            <td>{{ fish.shadow }}</td>  
            <td>{{ fish.totalCatchesToUnlock }}</td> 
            <td>{{ fish.rainSnowCatchUp }}</td>  
            <td>{{ fish.nhJan }}</td>
            <td>{{ fish.nhFeb }}</td>
            <td>{{ fish.nhMar }}</td>
            <td>{{ fish.nhApr }}</td>
            <td>{{ fish.nhMay }}</td>
            <td>{{ fish.nhJul }}</td>
            <td>{{ fish.nhAug }}</td>
            <td>{{ fish.nhSep }}</td>
            <td>{{ fish.nhOct }}</td>
            <td>{{ fish.nhNov }}</td>
            <td>{{ fish.nhDec }}</td>
            <td>{{ fish.shJan }}</td>
            <td>{{ fish.shFeb }}</td>
            <td>{{ fish.shMar }}</td>
            <td>{{ fish.shApr }}</td>
            <td>{{ fish.shMay }}</td>
            <td>{{ fish.shJun }}</td>
            <td>{{ fish.shJul }}</td>
            <td>{{ fish.shAug }}</td>
            <td>{{ fish.shSep }}</td>
            <td>{{ fish.shOct }}</td>
            <td>{{ fish.shNov }}</td>
            <td>{{ fish.shDec }}</td>
            <td>{{ fish.color_1 }}</td>
            <td>{{ fish.color_2 }}</td>
            <td>{{ fish.size }}</td>
            <td>{{ fish.lightingType }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取fish -->  
      <h2>根据ID获取fish</h2>
      <div>  
        <label for="fish-id">配件ID:</label>  
        <input type="number" id="fish-id" v-model="fishId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedfish">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedfish.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索fish -->  
      <h2>根据名称搜索fish</h2>
      <div>  
        <label for="fish-name">配件名称:</label>  
        <input type="text" id="fish-name" v-model="fishName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundfish.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>   
            <th>sell</th>  
            <th>whereHow</th>
            <th>shadow</th>
            <th>totalCatchesToUnlock</th>
            <th>spawnRates</th>
            <th>rainSnowCatchUp</th>
            <th>nhJan</th>
            <th>nhFeb</th> 
            <th>nhMar</th> 
            <th>nhApr</th> 
            <th>nhMay</th> 
            <th>nhJun</th> 
            <th>nhJul</th> 
            <th>nhAug</th> 
            <th>nhSep</th> 
            <th>nhOct</th> 
            <th>nhNov</th> 
            <th>nhDec</th> 
            <th>shJan</th> 
            <th>shFeb</th> 
            <th>shMar</th> 
            <th>shApr</th> 
            <th>shMay</th> 
            <th>shJun</th> 
            <th>shJul</th> 
            <th>shAug</th> 
            <th>shSep</th>
            <th>shOct</th>
            <th>shNov</th>
            <th>shDec</th>
            <th>color_1</th>
            <th>color_2</th>
            <th>size</th>
            <th>lightingType</th>
          </tr>
        </thead>  
        <tbody>  
          <tr v-for="fish in foundfish" :key="fish.id">  
            <td>{{ fish.id }}</td>
            <td>{{ fish.name }}</td>  
            <td>{{ fish.sell }}</td> 
            <td>{{ fish.whereHow }}</td>  
            <td>{{ fish.shadow }}</td>  
            <td>{{ fish.totalCatchesToUnlock }}</td> 
            <td>{{ fish.rainSnowCatchUp }}</td>  
            <td>{{ fish.nhJan }}</td>
            <td>{{ fish.nhFeb }}</td>
            <td>{{ fish.nhMar }}</td>
            <td>{{ fish.nhApr }}</td>
            <td>{{ fish.nhMay }}</td>
            <td>{{ fish.nhJul }}</td>
            <td>{{ fish.nhAug }}</td>
            <td>{{ fish.nhSep }}</td>
            <td>{{ fish.nhOct }}</td>
            <td>{{ fish.nhNov }}</td>
            <td>{{ fish.nhDec }}</td>
            <td>{{ fish.shJan }}</td>
            <td>{{ fish.shFeb }}</td>
            <td>{{ fish.shMar }}</td>
            <td>{{ fish.shApr }}</td>
            <td>{{ fish.shMay }}</td>
            <td>{{ fish.shJun }}</td>
            <td>{{ fish.shJul }}</td>
            <td>{{ fish.shAug }}</td>
            <td>{{ fish.shSep }}</td>
            <td>{{ fish.shOct }}</td>
            <td>{{ fish.shNov }}</td>
            <td>{{ fish.shDec }}</td>
            <td>{{ fish.color_1 }}</td>
            <td>{{ fish.color_2 }}</td>
            <td>{{ fish.size }}</td>
            <td>{{ fish.lightingType }}</td>
          </tr>  
        </tbody>
        </table>
      </div>
    </div>

    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
  </div>
</template>   
    
  <script>  
  import axios from 'axios';  
    
  export default {  
    data() {  
      return {  
        Fishes: [],  
        selectedfish: null,  
        foundfish: [],  
        fishId: '',  
        fishName: '',  
        isTopActive: false, 
      };  
    },  
    methods: { 
      scrollToTop() {  
        // 使用 window.scrollTo 滚动到页面顶部  
        window.scrollTo({  
          top: 0,  
          behavior: 'smooth' // 可选，使滚动平滑进行  
        });  
      },  
      

      async getFishes() {  
        try {  
          const response = await axios.get('/api/fish');  
          this.Fishes = response.data;  
        } catch (error) {  
          console.error('Error fetching all fish:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.fishId) return;  
        try {  
          const response = await axios.get(`/api/fish/${this.fishId}`);  
          this.selectedfish = response.data;  
        } catch (error) {  
          console.error('Error fetching fish by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.fishName) return;  
        try {  
          const params = {  
            name: this.fishName,  
          };  
          const response = await axios.get('/api/fish/findByName', { params });  
          this.foundfish = response.data;  
        } catch (error) {  
          console.error('Error searching fish by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getFishes()  
    },  
  };  
  </script>  
<style scoped>
.component-container {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.styled-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, transform 0.3s;
}

.styled-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.input-field {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 10px;
  font-size: 1em;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.top-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, transform 0.3s;
}

.top-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.back-to-home {
  text-align: center;
  margin-top: 20px;
}

.home-link {
  font-size: 1.2em;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.home-link:hover {
  color: #0056b3;
}
</style>