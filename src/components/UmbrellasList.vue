<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getUmbrellas" class="styled-button">获取所有umbrella</button>  
      
      <table v-if="Umbrellas.length">  
        <h3>[Table umbrella]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="umbrella in Umbrellas" :key="umbrella.id">  
            <td>{{ umbrella.id }}</td>
            <td>{{ umbrella.name }}</td>  
            <td>{{ umbrella.diy }}</td>  
            <td>{{ umbrella.buy }}</td>  
            <td>{{ umbrella.sell }}</td> 
            <td>{{ umbrella.color_1 }}</td>  
            <td>{{ umbrella.color_2 }}</td>
            <td>{{ umbrella.milesPrice }}</td>
            <td>{{ umbrella.source }}</td>
            <td>{{ umbrella.sourceNotes }}</td>
            <td>{{ umbrella.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取umbrella -->  
      <h2>根据ID获取umbrella</h2>
      <div>  
        <label for="umbrella-id">配件ID:</label>  
        <input type="number" id="umbrella-id" v-model="umbrellaId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedumbrella">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedumbrella.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索umbrella -->  
      <h2>根据名称搜索umbrella</h2>
      <div>  
        <label for="umbrella-name">配件名称:</label>  
        <input type="text" id="umbrella-name" v-model="umbrellaName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundumbrella.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="umbrella in foundumbrella" :key="umbrella.id">  
            <td>{{ umbrella.id }}</td>
            <td>{{ umbrella.name }}</td>  
            <td>{{ umbrella.diy }}</td>  
            <td>{{ umbrella.buy }}</td>  
            <td>{{ umbrella.sell }}</td> 
            <td>{{ umbrella.color_1 }}</td>  
            <td>{{ umbrella.color_2 }}</td>
            <td>{{ umbrella.milesPrice }}</td>
            <td>{{ umbrella.source }}</td>
            <td>{{ umbrella.sourceNotes }}</td>
            <td>{{ umbrella.catalog }}</td>
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
        Umbrellas: [],  
        selectedumbrella: null,  
        foundumbrella: [],  
        umbrellaId: '',  
        umbrellaName: '',  
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
      

      async getUmbrellas() {  
        try {  
          const response = await axios.get('/api/umbrellas');  
          this.Umbrellas = response.data;  
        } catch (error) {  
          console.error('Error fetching all umbrella:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.umbrellaId) return;  
        try {  
          const response = await axios.get(`/api/umbrellas/${this.umbrellaId}`);  
          this.selectedumbrella = response.data;  
        } catch (error) {  
          console.error('Error fetching umbrella by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.umbrellaName) return;  
        try {  
          const params = {  
            name: this.umbrellaName,  
          };  
          const response = await axios.get('/api/umbrellas/findByName', { params });  
          this.foundumbrella = response.data;  
        } catch (error) {  
          console.error('Error searching umbrella by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getUmbrellas()  
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