<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getMiscellaneous" class="styled-button">获取所有miscellaneous</button>  
      
      <table v-if="Miscellaneous.length">  
        <h3>[Table miscellaneous]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>variation</th>  
            <th>bodyTitle</th> 
            <th>pattern</th>  
            <th>patternTitle</th>  
            <th>diy</th>
            <th>bodyCustomize</th>
            <th>patternCustomize</th>
            <th>kitCost</th>
            <th>buy</th>
            <th>sell</th>
            <th>color_1</th> 
            <th>color_2</th> 
            <th>size</th> 
            <th>source</th> 
            <th>sourceNotes</th> 
            <th>hhaConcept_1</th> 
            <th>hhaConcept_2</th> 
            <th>hhaSeries</th> 
            <th>hhaSet</th> 
            <th>interact</th> 
            <th>tag</th> 
            <th>outdoor</th> 
            <th>speakerType</th> 
            <th>lightingType</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="miscellaneous in Miscellaneous" :key="miscellaneous.id">  
            <td>{{ miscellaneous.id }}</td>
            <td>{{ miscellaneous.name }}</td>  
            <td>{{ miscellaneous.variation }}</td> 
            <td>{{ miscellaneous.bodyTitle }}</td>  
            <td>{{ miscellaneous.pattern }}</td>  
            <td>{{ miscellaneous.patternTitle }}</td> 
            <td>{{ miscellaneous.diy }}</td>  
            <td>{{ miscellaneous.bodyCustomize }}</td>
            <td>{{ miscellaneous.patternCustomize }}</td>
            <td>{{ miscellaneous.kitCost }}</td>
            <td>{{ miscellaneous.buy }}</td>
            <td>{{ miscellaneous.sell }}</td>
            <td>{{ miscellaneous.color_1 }}</td>
            <td>{{ miscellaneous.color_2 }}</td>
            <td>{{ miscellaneous.size }}</td>
            <td>{{ miscellaneous.source }}</td>
            <td>{{ miscellaneous.sourceNotes }}</td>
            <td>{{ miscellaneous.hhaConcept_1 }}</td>
            <td>{{ miscellaneous.hhaConcept_2 }}</td>
            <td>{{ miscellaneous.hhaSeries }}</td>
            <td>{{ miscellaneous.hhaSet }}</td>
            <td>{{ miscellaneous.interact }}</td>
            <td>{{ miscellaneous.tag }}</td>
            <td>{{ miscellaneous.outdoor }}</td>
            <td>{{ miscellaneous.speakerType }}</td>
            <td>{{ miscellaneous.lightingType }}</td>
            <td>{{ miscellaneous.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取miscellaneous -->  
      <h2>根据ID获取miscellaneous</h2>
      <div>  
        <label for="miscellaneous-id">配件ID:</label>  
        <input type="number" id="miscellaneous-id" v-model="miscellaneousId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedmiscellaneous">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedmiscellaneous.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索miscellaneous -->  
      <h2>根据名称搜索miscellaneous</h2>
      <div>  
        <label for="miscellaneous-name">配件名称:</label>  
        <input type="text" id="miscellaneous-name" v-model="miscellaneousName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundmiscellaneous.length">  
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
          <tr v-for="miscellaneous in foundmiscellaneous" :key="miscellaneous.id">  
            <td>{{ miscellaneous.id }}</td>
            <td>{{ miscellaneous.name }}</td>  
            <td>{{ miscellaneous.variation }}</td> 
            <td>{{ miscellaneous.diy }}</td>  
            <td>{{ miscellaneous.buy }}</td>  
            <td>{{ miscellaneous.sell }}</td> 
            <td>{{ miscellaneous.color_1 }}</td>  
            <td>{{ miscellaneous.color_2 }}</td>
            <td>{{ miscellaneous.milesPrice }}</td>
            <td>{{ miscellaneous.source }}</td>
            <td>{{ miscellaneous.style }}</td>
            <td>{{ miscellaneous.labelThemes }}</td>
            <td>{{ miscellaneous.catalog }}</td>
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
        Miscellaneous: [],  
        selectedmiscellaneous: null,  
        foundmiscellaneous: [],  
        miscellaneousId: '',  
        miscellaneousName: '',  
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
      

      async getMiscellaneous() {  
        try {  
          const response = await axios.get('/api/miscellaneous');  
          this.Miscellaneous = response.data;  
        } catch (error) {  
          console.error('Error fetching all miscellaneous:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.miscellaneousId) return;  
        try {  
          const response = await axios.get(`/api/miscellaneous/${this.miscellaneousId}`);  
          this.selectedmiscellaneous = response.data;  
        } catch (error) {  
          console.error('Error fetching miscellaneous by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.miscellaneousName) return;  
        try {  
          const params = {  
            name: this.miscellaneousName,  
          };  
          const response = await axios.get('/api/miscellaneous/findByName', { params });  
          this.foundmiscellaneous = response.data;  
        } catch (error) {  
          console.error('Error searching miscellaneous by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getMiscellaneous()  
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