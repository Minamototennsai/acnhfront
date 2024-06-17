<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
        <!-- error -->
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getInsects" class="styled-button">获取所有insect</button>  
      
      <table v-if="Insects.length">  
        <h3>[Table insect]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>   
            <th>sell</th>  
            <th>whereHow</th>
            <th>weather</th>
            <th>totalCatchesToUnlock</th>
            <th>spawnRates</th>
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
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="insect in Insects" :key="insect.id">  
            <td>{{ insect.id }}</td>
            <td>{{ insect.name }}</td>  
            <td>{{ insect.sell }}</td> 
            <td>{{ insect.whereHow }}</td>  
            <td>{{ insect.weather }}</td>  
            <td>{{ insect.totalCatchesToUnlock }}</td> 
            <td>{{ insect.spawnRates }}</td>  
            <td>{{ insect.nhJan }}</td>
            <td>{{ insect.nhFeb }}</td>
            <td>{{ insect.nhMar }}</td>
            <td>{{ insect.nhApr }}</td>
            <td>{{ insect.nhMay }}</td>
            <td>{{ insect.nhJul }}</td>
            <td>{{ insect.nhAug }}</td>
            <td>{{ insect.nhSep }}</td>
            <td>{{ insect.nhOct }}</td>
            <td>{{ insect.nhNov }}</td>
            <td>{{ insect.nhDec }}</td>
            <td>{{ insect.shJan }}</td>
            <td>{{ insect.shFeb }}</td>
            <td>{{ insect.shMar }}</td>
            <td>{{ insect.shApr }}</td>
            <td>{{ insect.shMay }}</td>
            <td>{{ insect.shJun }}</td>
            <td>{{ insect.shJul }}</td>
            <td>{{ insect.shAug }}</td>
            <td>{{ insect.shSep }}</td>
            <td>{{ insect.shOct }}</td>
            <td>{{ insect.shNov }}</td>
            <td>{{ insect.shDec }}</td>
            <td>{{ insect.color_1 }}</td>
            <td>{{ insect.color_2 }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取insect -->  
      <h2>根据ID获取insect</h2>
      <div>  
        <label for="insect-id">配件ID:</label>  
        <input type="number" id="insect-id" v-model="insectId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedinsect">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedinsect.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索insect -->  
      <h2>根据名称搜索insect</h2>
      <div>  
        <label for="insect-name">配件名称:</label>  
        <input type="text" id="insect-name" v-model="insectName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundinsect.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>   
            <th>sell</th>  
            <th>whereHow</th>
            <th>weather</th>
            <th>totalCatchesToUnlock</th>
            <th>spawnRates</th>
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
          </tr>
        </thead>  
        <tbody>  
          <tr v-for="insect in foundinsect" :key="insect.id">  
            <td>{{ insect.id }}</td>
            <td>{{ insect.name }}</td>  
            <td>{{ insect.sell }}</td> 
            <td>{{ insect.whereHow }}</td>  
            <td>{{ insect.weather }}</td>  
            <td>{{ insect.totalCatchesToUnlock }}</td> 
            <td>{{ insect.spawnRates }}</td>  
            <td>{{ insect.nhJan }}</td>
            <td>{{ insect.nhFeb }}</td>
            <td>{{ insect.nhMar }}</td>
            <td>{{ insect.nhApr }}</td>
            <td>{{ insect.nhMay }}</td>
            <td>{{ insect.nhJul }}</td>
            <td>{{ insect.nhAug }}</td>
            <td>{{ insect.nhSep }}</td>
            <td>{{ insect.nhOct }}</td>
            <td>{{ insect.nhNov }}</td>
            <td>{{ insect.nhDec }}</td>
            <td>{{ insect.shJan }}</td>
            <td>{{ insect.shFeb }}</td>
            <td>{{ insect.shMar }}</td>
            <td>{{ insect.shApr }}</td>
            <td>{{ insect.shMay }}</td>
            <td>{{ insect.shJun }}</td>
            <td>{{ insect.shJul }}</td>
            <td>{{ insect.shAug }}</td>
            <td>{{ insect.shSep }}</td>
            <td>{{ insect.shOct }}</td>
            <td>{{ insect.shNov }}</td>
            <td>{{ insect.shDec }}</td>
            <td>{{ insect.color_1 }}</td>
            <td>{{ insect.color_2 }}</td>
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
        Insects: [],  
        selectedinsect: null,  
        foundinsect: [],  
        insectId: '',  
        insectName: '',  
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
      

      async getInsects() {  
        try {  
          const response = await axios.get('/api/insects');  
          this.Insects = response.data;  
        } catch (error) {  
          console.error('Error fetching all insect:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.insectId) return;  
        try {  
          const response = await axios.get(`/api/insects/${this.insectId}`);  
          this.selectedinsect = response.data;  
        } catch (error) {  
          console.error('Error fetching insect by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.insectName) return;  
        try {  
          const params = {  
            name: this.insectName,  
          };  
          const response = await axios.get('/api/insects/findByName', { params });  
          this.foundinsect = response.data;  
        } catch (error) {  
          console.error('Error searching insect by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getInsects()  
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