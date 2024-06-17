<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getFossils" class="styled-button">获取所有fossil</button>  
      
      <table v-if="Fossils.length">  
        <h3>[Table fossil]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>size</th>
            <th>museum</th>
            <th>interact</th>
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="fossil in Fossils" :key="fossil.id">  
            <td>{{ fossil.id }}</td>
            <td>{{ fossil.name }}</td>  
            <td>{{ fossil.sell }}</td> 
            <td>{{ fossil.color_1 }}</td>  
            <td>{{ fossil.color_2 }}</td>
            <td>{{ fossil.size }}</td>
            <td>{{ fossil.museum }}</td>
            <td>{{ fossil.interact }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取fossil -->  
      <h2>根据ID获取fossil</h2>
      <div>  
        <label for="fossil-id">配件ID:</label>  
        <input type="number" id="fossil-id" v-model="fossilId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedfossil">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedfossil.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索fossil -->  
      <h2>根据名称搜索fossil</h2>
      <div>  
        <label for="fossil-name">配件名称:</label>  
        <input type="text" id="fossil-name" v-model="fossilName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundfossil.length">  
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
            <th>style</th>
            <th>labelThemes</th>
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="fossil in foundfossil" :key="fossil.id">  
            <td>{{ fossil.id }}</td>
            <td>{{ fossil.name }}</td>  
            <td>{{ fossil.variation }}</td> 
            <td>{{ fossil.diy }}</td>  
            <td>{{ fossil.buy }}</td>  
            <td>{{ fossil.sell }}</td> 
            <td>{{ fossil.color_1 }}</td>  
            <td>{{ fossil.color_2 }}</td>
            <td>{{ fossil.milesPrice }}</td>
            <td>{{ fossil.source }}</td>
            <td>{{ fossil.style }}</td>
            <td>{{ fossil.labelThemes }}</td>
            <td>{{ fossil.catalog }}</td>
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
        Fossils: [],  
        selectedfossil: null,  
        foundfossil: [],  
        fossilId: '',  
        fossilName: '',  
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
      

      async getFossils() {  
        try {  
          const response = await axios.get('/api/fossils');  
          this.Fossils = response.data;  
        } catch (error) {  
          console.error('Error fetching all fossil:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.fossilId) return;  
        try {  
          const response = await axios.get(`/api/fossils/${this.fossilId}`);  
          this.selectedfossil = response.data;  
        } catch (error) {  
          console.error('Error fetching fossil by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.fossilName) return;  
        try {  
          const params = {  
            name: this.fossilName,  
          };  
          const response = await axios.get('/api/fossils/findByName', { params });  
          this.foundfossil = response.data;  
        } catch (error) {  
          console.error('Error searching fossil by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getFossils()  
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