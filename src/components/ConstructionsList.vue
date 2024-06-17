<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getConstructions" class="styled-button">获取所有construction</button>  
      
      <table v-if="Constructions.length">  
        <h3>[Table construction]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>    
            <th>buy</th>  
            <th>category</th>  
            <th>source</th>
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="construction in Constructions" :key="construction.id">  
            <td>{{ construction.id }}</td>
            <td>{{ construction.name }}</td>  
            <td>{{ construction.buy }}</td>  
            <td>{{ construction.category }}</td> 
            <td>{{ construction.source }}</td>  
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取construction -->  
      <h2>根据ID获取construction</h2>
      <div>  
        <label for="construction-id">配件ID:</label>  
        <input type="number" id="construction-id" v-model="constructionId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedconstruction">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedconstruction.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索construction -->  
      <h2>根据名称搜索construction</h2>
      <div>  
        <label for="construction-name">配件名称:</label>  
        <input type="text" id="construction-name" v-model="constructionName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundconstruction.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>    
            <th>buy</th>  
            <th>category</th>  
            <th>source</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="construction in foundconstruction" :key="construction.id">  
            <td>{{ construction.id }}</td>
            <td>{{ construction.name }}</td>  
            <td>{{ construction.buy }}</td>  
            <td>{{ construction.category }}</td> 
            <td>{{ construction.source }}</td>  
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
        Constructions: [],  
        selectedconstruction: null,  
        foundconstruction: [],  
        constructionId: '',  
        constructionName: '',  
        isTopActive: false, 
      };  
    },  
    methods: { 
      handleScroll() {
      this.isTopActive = window.scrollY > 200;
    },

      scrollToTop() {  
        // 使用 window.scrollTo 滚动到页面顶部  
        window.scrollTo({  
          top: 0,  
          behavior: 'smooth' // 可选，使滚动平滑进行  
        });  
      },  
      

      async getConstructions() {  
        try {  
          const response = await axios.get('/api/construction');  
          this.Constructions = response.data;  
        } catch (error) {  
          console.error('Error fetching all construction:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.constructionId) return;  
        try {  
          const response = await axios.get(`/api/construction/${this.constructionId}`);  
          this.selectedconstruction = response.data;  
        } catch (error) {  
          console.error('Error fetching construction by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.constructionName) return;  
        try {  
          const params = {  
            name: this.constructionName,  
          };  
          const response = await axios.get('/api/construction/findByName', { params });  
          this.foundconstruction = response.data;  
        } catch (error) {  
          console.error('Error searching construction by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getConstructions()  
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