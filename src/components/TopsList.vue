<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getTops" class="styled-button">获取所有top</button>  
      
      <table v-if="Tops.length">  
        <h3>[Table top]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>variation</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>seasonalAvailability</th>
            <th>mannequinPiece</th> 
            <th>style</th> 
            <th>labelThemes</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="top in Tops" :key="top.id">  
            <td>{{ top.id }}</td>
            <td>{{ top.name }}</td>  
            <td>{{ top.variation }}</td> 
            <td>{{ top.diy }}</td>  
            <td>{{ top.buy }}</td>  
            <td>{{ top.sell }}</td> 
            <td>{{ top.color_1 }}</td>  
            <td>{{ top.color_2 }}</td>
            <td>{{ top.milesPrice }}</td>
            <td>{{ top.source }}</td>
            <td>{{ top.sourceNotes }}</td>
            <td>{{ top.seasonalAvailability }}</td>
            <td>{{ top.mannequinPiece }}</td>
            <td>{{ top.style }}</td>
            <td>{{ top.labelThemes }}</td>
            <td>{{ top.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取top -->  
      <h2>根据ID获取top</h2>
      <div>  
        <label for="top-id">配件ID:</label>  
        <input type="number" id="top-id" v-model="topId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedtop">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedtop.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索top -->  
      <h2>根据名称搜索top</h2>
      <div>  
        <label for="top-name">配件名称:</label>  
        <input type="text" id="top-name" v-model="topName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundtop.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>variation</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>seasonalAvailability</th>
            <th>mannequinPiece</th> 
            <th>style</th> 
            <th>labelThemes</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="top in foundtop" :key="top.id">  
            <td>{{ top.id }}</td>
            <td>{{ top.name }}</td>  
            <td>{{ top.variation }}</td> 
            <td>{{ top.diy }}</td>  
            <td>{{ top.buy }}</td>  
            <td>{{ top.sell }}</td> 
            <td>{{ top.color_1 }}</td>  
            <td>{{ top.color_2 }}</td>
            <td>{{ top.milesPrice }}</td>
            <td>{{ top.source }}</td>
            <td>{{ top.sourceNotes }}</td>
            <td>{{ top.seasonalAvailability }}</td>
            <td>{{ top.mannequinPiece }}</td>
            <td>{{ top.style }}</td>
            <td>{{ top.labelThemes }}</td>
            <td>{{ top.catalog }}</td>
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
        Tops: [],  
        selectedtop: null,  
        foundtop: [],  
        topId: '',  
        topName: '',  
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
      

      async getTops() {  
        try {  
          const response = await axios.get('/api/tops');  
          this.Tops = response.data;  
        } catch (error) {  
          console.error('Error fetching all top:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.topId) return;  
        try {  
          const response = await axios.get(`/api/tops/${this.topId}`);  
          this.selectedtop = response.data;  
        } catch (error) {  
          console.error('Error fetching top by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.topName) return;  
        try {  
          const params = {  
            name: this.topName,  
          };  
          const response = await axios.get('/api/tops/findByName', { params });  
          this.foundtop = response.data;  
        } catch (error) {  
          console.error('Error searching top by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getTops()  
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