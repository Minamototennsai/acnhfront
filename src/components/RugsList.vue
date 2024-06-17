<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getRugs" class="styled-button">获取所有rug</button>  
      
      <table v-if="Rugs.length">  
        <h3>[Table rug]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>size</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>hhaConcept_1</th> 
            <th>hhaConcept_2</th> 
            <th>hhaSeries</th> 
            <th>tag</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="rug in Rugs" :key="rug.id">  
            <td>{{ rug.id }}</td>
            <td>{{ rug.name }}</td>  
            <td>{{ rug.diy }}</td>  
            <td>{{ rug.buy }}</td>  
            <td>{{ rug.sell }}</td> 
            <td>{{ rug.color_1 }}</td>  
            <td>{{ rug.color_2 }}</td>
            <td>{{ rug.size }}</td>
            <td>{{ rug.milesPrice }}</td>
            <td>{{ rug.source }}</td>
            <td>{{ rug.sourceNotes }}</td>
            <td>{{ rug.hhaConcept_1 }}</td>
            <td>{{ rug.hhaConcept_2 }}</td>
            <td>{{ rug.hhaSeries }}</td>
            <td>{{ rug.tag }}</td>
            <td>{{ rug.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取rug -->  
      <h2>根据ID获取rug</h2>
      <div>  
        <label for="rug-id">配件ID:</label>  
        <input type="number" id="rug-id" v-model="rugId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedrug">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedrug.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索rug -->  
      <h2>根据名称搜索rug</h2>
      <div>  
        <label for="rug-name">配件名称:</label>  
        <input type="text" id="rug-name" v-model="rugName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundrug.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>diy</th> 
            <th>buy</th>  
            <th>sell</th>  
            <th>color_1</th>
            <th>color_2</th>
            <th>size</th>
            <th>milesPrice</th>
            <th>source</th>
            <th>sourceNotes</th>
            <th>hhaConcept_1</th> 
            <th>hhaConcept_2</th> 
            <th>hhaSeries</th> 
            <th>tag</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="rug in foundrug" :key="rug.id">  
            <td>{{ rug.id }}</td>
            <td>{{ rug.name }}</td>  
            <td>{{ rug.diy }}</td>  
            <td>{{ rug.buy }}</td>  
            <td>{{ rug.sell }}</td> 
            <td>{{ rug.color_1 }}</td>  
            <td>{{ rug.color_2 }}</td>
            <td>{{ rug.size }}</td>
            <td>{{ rug.milesPrice }}</td>
            <td>{{ rug.source }}</td>
            <td>{{ rug.sourceNotes }}</td>
            <td>{{ rug.hhaConcept_1 }}</td>
            <td>{{ rug.hhaConcept_2 }}</td>
            <td>{{ rug.hhaSeries }}</td>
            <td>{{ rug.tag }}</td>
            <td>{{ rug.catalog }}</td>
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
        Rugs: [],  
        selectedrug: null,  
        foundrug: [],  
        rugId: '',  
        rugName: '',  
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
      

      async getRugs() {  
        try {  
          const response = await axios.get('/api/rugs');  
          this.Rugs = response.data;  
        } catch (error) {  
          console.error('Error fetching all rug:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.rugId) return;  
        try {  
          const response = await axios.get(`/api/rugs/${this.rugId}`);  
          this.selectedrug = response.data;  
        } catch (error) {  
          console.error('Error fetching rug by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.rugName) return;  
        try {  
          const params = {  
            name: this.rugName,  
          };  
          const response = await axios.get('/api/rugs/findByName', { params });  
          this.foundrug = response.data;  
        } catch (error) {  
          console.error('Error searching rug by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getRugs()  
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