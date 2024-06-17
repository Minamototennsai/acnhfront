<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getTools" class="styled-button">获取所有tool</button>  
      
      <table v-if="Tools.length">  
        <h3>[Table tool]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>variation</th>  
            <th>bodyTitle</th> 
            <th>diy</th>  
            <th>customize</th>  
            <th>kitCost</th>
            <th>uses</th>
            <th>stackSize</th>
            <th>buy</th>
            <th>sell</th>
            <th>toolSet</th>
            <th>milesPrice</th> 
            <th>source</th> 
            <th>sourceNotes</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="tool in Tools" :key="tool.id">  
            <td>{{ tool.id }}</td>
            <td>{{ tool.name }}</td>  
            <td>{{ tool.variation }}</td> 
            <td>{{ tool.bodyTitle }}</td>  
            <td>{{ tool.diy }}</td>  
            <td>{{ tool.customize }}</td> 
            <td>{{ tool.kitCost }}</td>  
            <td>{{ tool.uses }}</td>
            <td>{{ tool.stackSize }}</td>
            <td>{{ tool.buy }}</td>
            <td>{{ tool.sell }}</td>
            <td>{{ tool.toolSet }}</td>
            <td>{{ tool.milesPrice }}</td>
            <td>{{ tool.source }}</td>
            <td>{{ tool.sourceNotes }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取tool -->  
      <h2>根据ID获取tool</h2>
      <div>  
        <label for="tool-id">配件ID:</label>  
        <input type="number" id="tool-id" v-model="toolId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedtool">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedtool.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索tool -->  
      <h2>根据名称搜索tool</h2>
      <div>  
        <label for="tool-name">配件名称:</label>  
        <input type="text" id="tool-name" v-model="toolName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundtool.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>variation</th>  
            <th>bodyTitle</th> 
            <th>diy</th>  
            <th>customize</th>  
            <th>kitCost</th>
            <th>uses</th>
            <th>stackSize</th>
            <th>buy</th>
            <th>sell</th>
            <th>toolSet</th>
            <th>milesPrice</th> 
            <th>source</th> 
            <th>sourceNotes</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="tool in foundtool" :key="tool.id">  
            <td>{{ tool.id }}</td>
            <td>{{ tool.name }}</td>  
            <td>{{ tool.variation }}</td> 
            <td>{{ tool.bodyTitle }}</td>  
            <td>{{ tool.diy }}</td>  
            <td>{{ tool.customize }}</td> 
            <td>{{ tool.kitCost }}</td>  
            <td>{{ tool.uses }}</td>
            <td>{{ tool.stackSize }}</td>
            <td>{{ tool.buy }}</td>
            <td>{{ tool.sell }}</td>
            <td>{{ tool.toolSet }}</td>
            <td>{{ tool.milesPrice }}</td>
            <td>{{ tool.source }}</td>
            <td>{{ tool.sourceNotes }}</td>
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
        Tools: [],  
        selectedtool: null,  
        foundtool: [],  
        toolId: '',  
        toolName: '',  
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
      

      async getTools() {  
        try {  
          const response = await axios.get('/api/tools');  
          this.Tools = response.data;  
        } catch (error) {  
          console.error('Error fetching all tool:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.toolId) return;  
        try {  
          const response = await axios.get(`/api/tools/${this.toolId}`);  
          this.selectedtool = response.data;  
        } catch (error) {  
          console.error('Error fetching tool by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.toolName) return;  
        try {  
          const params = {  
            name: this.toolName,  
          };  
          const response = await axios.get('/api/tools/findByName', { params });  
          this.foundtool = response.data;  
        } catch (error) {  
          console.error('Error searching tool by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getTools()  
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