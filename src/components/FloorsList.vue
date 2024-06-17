<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getFloors" class="styled-button">获取所有floor</button>  
      
      <table v-if="Floors.length">  
        <h3>[Table floor]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>vfx</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>hhaConcept_1</th>
            <th>hhaConcept_2</th>
            <th>hhaSeries</th> 
            <th>tag</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="floor in Floors" :key="floor.id">  
            <td>{{ floor.id }}</td>
            <td>{{ floor.name }}</td>  
            <td>{{ floor.vfx }}</td> 
            <td>{{ floor.diy }}</td>  
            <td>{{ floor.buy }}</td>  
            <td>{{ floor.sell }}</td> 
            <td>{{ floor.color_1 }}</td>  
            <td>{{ floor.color_2 }}</td>
            <td>{{ floor.milesPrice }}</td>
            <td>{{ floor.source }}</td>
            <td>{{ floor.hhaConcept_1 }}</td>
            <td>{{ floor.hhaConcept_2 }}</td>
            <td>{{ floor.hhaSeries }}</td>
            <td>{{ floor.tag }}</td>
            <td>{{ floor.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取floor -->  
      <h2>根据ID获取floor</h2>
      <div>  
        <label for="floor-id">配件ID:</label>  
        <input type="number" id="floor-id" v-model="floorId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedfloor">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedfloor.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索floor -->  
      <h2>根据名称搜索floor</h2>
      <div>  
        <label for="floor-name">配件名称:</label>  
        <input type="text" id="floor-name" v-model="floorName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundfloor.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>vfx</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>hhaConcept_1</th>
            <th>hhaConcept_2</th>
            <th>hhaSeries</th> 
            <th>tag</th> 
            <th>catalog</th>  
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="floor in foundfloor" :key="floor.id">  
            <td>{{ floor.id }}</td>
            <td>{{ floor.name }}</td>  
            <td>{{ floor.vfx }}</td> 
            <td>{{ floor.diy }}</td>  
            <td>{{ floor.buy }}</td>  
            <td>{{ floor.sell }}</td> 
            <td>{{ floor.color_1 }}</td>  
            <td>{{ floor.color_2 }}</td>
            <td>{{ floor.milesPrice }}</td>
            <td>{{ floor.source }}</td>
            <td>{{ floor.hhaConcept_1 }}</td>
            <td>{{ floor.hhaConcept_2 }}</td>
            <td>{{ floor.hhaSeries }}</td>
            <td>{{ floor.tag }}</td>
            <td>{{ floor.catalog }}</td>
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
        Floors: [],  
        selectedfloor: null,  
        foundfloor: [],  
        floorId: '',  
        floorName: '',  
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
      

      async getFloors() {  
        try {  
          const response = await axios.get('/api/floors');  
          this.Floors = response.data;  
        } catch (error) {  
          console.error('Error fetching all floor:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.floorId) return;  
        try {  
          const response = await axios.get(`/api/floors/${this.floorId}`);  
          this.selectedfloor = response.data;  
        } catch (error) {  
          console.error('Error fetching floor by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.floorName) return;  
        try {  
          const params = {  
            name: this.floorName,  
          };  
          const response = await axios.get('/api/floors/findByName', { params });  
          this.foundfloor = response.data;  
        } catch (error) {  
          console.error('Error searching floor by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getFloors()  
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