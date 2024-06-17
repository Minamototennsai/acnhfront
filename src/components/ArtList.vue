<template>
 <div class="component-container">
    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop" class="top-button">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getArts" class="styled-button">获取所有art</button>  
      
      <table v-if="Arts.length">  
        <h3>[Table art]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>genuine</th>  
            <th>category</th>  
            <th>buy</th>  
            <th>sell</th>  
            <th>size</th>
            <th>realArtworkTitle</th>
            <th>artist</th>
            <th>museumDescription</th>
            <th>hhaConcept_1</th>
            <th>hhaConcept_2</th>
            <th>tag</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="art in Arts" :key="art.id">  
            <td>{{ art.id }}</td>
            <td>{{ art.name }}</td>  
            <td>{{ art.genuine }}</td>  
            <td>{{ art.category }}</td>  
            <td>{{ art.buy }}</td>  
            <td>{{ art.sell }}</td> 
            <td>{{ art.size }}</td>  
            <td>{{ art.realArtworkTitle }}</td>
            <td>{{ art.artist }}</td>
            <td>{{ art.museumDescription }}</td>
            <td>{{ art.hhaConcept_1 }}</td>
            <td>{{ art.hhaConcept_2 }}</td>
            <td>{{ art.tag }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取art -->  
      <h2>根据ID获取art</h2>
      <div>  
        <label for="art-id">配件ID:</label>  
        <input type="number" id="art-id" v-model="artId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedart">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedart.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索art -->  
      <h2>根据名称搜索art</h2>
      <div>  
        <label for="art-name">配件名称:</label>  
        <input type="text" id="art-name" v-model="artName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundart.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>genuine</th>  
            <th>category</th>  
            <th>buy</th>  
            <th>sell</th>  
            <th>size</th>
            <th>realArtworkTitle</th>
            <th>artist</th>
            <th>museumDescription</th>
            <th>hhaConcept_1</th>
            <th>hhaConcept_2</th>
            <th>tag</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="art in foundart" :key="art.id">  
            <td>{{ art.id }}</td>
            <td>{{ art.name }}</td>  
            <td>{{ art.genuine }}</td>  
            <td>{{ art.category }}</td>  
            <td>{{ art.buy }}</td>  
            <td>{{ art.sell }}</td> 
            <td>{{ art.size }}</td>  
            <td>{{ art.realArtworkTitle }}</td>
            <td>{{ art.artist }}</td>
            <td>{{ art.museumDescription }}</td>
            <td>{{ art.hhaConcept_1 }}</td>
            <td>{{ art.hhaConcept_2 }}</td>
            <td>{{ art.tag }}</td>
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
        Arts: [],  
        selectedart: null,  
        foundart: [],  
        artId: '',  
        artName: '',  
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
      

      async getArts() {  
        try {  
          const response = await axios.get('/api/art');  
          this.Arts = response.data;  
        } catch (error) {  
          console.error('Error fetching all art:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.artId) return;  
        try {  
          const response = await axios.get(`/api/art/${this.artId}`);  
          this.selectedart = response.data;  
        } catch (error) {  
          console.error('Error fetching art by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.artName) return;  
        try {  
          const params = {  
            name: this.artName,  
          };  
          const response = await axios.get('/api/art/findByName', { params });  
          this.foundart = response.data;  
        } catch (error) {  
          console.error('Error searching art by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getArts() 
      window.addEventListener('scroll', this.handleScroll); 
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