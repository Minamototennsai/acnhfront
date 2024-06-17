<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getWallMounteds" class="styled-button">获取所有wallMounted</button>  
      
      <table v-if="WallMounteds.length">  
        <h3>[Table wallMounted]</h3>
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
            <th>lightingType</th> 
            <th>doorDeco</th> 
            <th>catalog</th>
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="wallMounted in WallMounteds" :key="wallMounted.id">  
            <td>{{ wallMounted.id }}</td>
            <td>{{ wallMounted.name }}</td>  
            <td>{{ wallMounted.variation }}</td> 
            <td>{{ wallMounted.bodyTitle }}</td>  
            <td>{{ wallMounted.pattern }}</td>  
            <td>{{ wallMounted.patternTitle }}</td>  
            <td>{{ wallMounted.diy }}</td> 
            <td>{{ wallMounted.bodyCustomize }}</td>  
            <td>{{ wallMounted.patternCustomize }}</td>
            <td>{{ wallMounted.kitCost }}</td>
            <td>{{ wallMounted.buy }}</td>
            <td>{{ wallMounted.sell }}</td>
            <td>{{ wallMounted.color_1 }}</td>
            <td>{{ wallMounted.color_2 }}</td>
            <td>{{ wallMounted.size }}</td>
            <td>{{ wallMounted.source }}</td>
            <td>{{ wallMounted.sourceNotes }}</td>
            <td>{{ wallMounted.hhaConcept_1 }}</td>
            <td>{{ wallMounted.hhaConcept_2 }}</td>
            <td>{{ wallMounted.hhaSeries }}</td>
            <td>{{ wallMounted.hhaSet }}</td>
            <td>{{ wallMounted.interact }}</td>
            <td>{{ wallMounted.tag }}</td>
            <td>{{ wallMounted.lightingType }}</td>
            <td>{{ wallMounted.doorDeco }}</td>
            <td>{{ wallMounted.catalog }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取wallMounted -->  
      <h2>根据ID获取wallMounted</h2>
      <div>  
        <label for="wallMounted-id">配件ID:</label>  
        <input type="number" id="wallMounted-id" v-model="wallMountedId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedwallMounted">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedwallMounted.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索wallMounted -->  
      <h2>根据名称搜索wallMounted</h2>
      <div>  
        <label for="wallMounted-name">配件名称:</label>  
        <input type="text" id="wallMounted-name" v-model="wallMountedName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundwallMounted.length">  
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
            <th>lightingType</th> 
            <th>doorDeco</th> 
            <th>catalog</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="wallMounted in foundwallMounted" :key="wallMounted.id">  
            <td>{{ wallMounted.id }}</td>
            <td>{{ wallMounted.name }}</td>  
            <td>{{ wallMounted.variation }}</td> 
            <td>{{ wallMounted.bodyTitle }}</td>  
            <td>{{ wallMounted.pattern }}</td>  
            <td>{{ wallMounted.patternTitle }}</td>  
            <td>{{ wallMounted.diy }}</td> 
            <td>{{ wallMounted.bodyCustomize }}</td>  
            <td>{{ wallMounted.patternCustomize }}</td>
            <td>{{ wallMounted.kitCost }}</td>
            <td>{{ wallMounted.buy }}</td>
            <td>{{ wallMounted.sell }}</td>
            <td>{{ wallMounted.color_1 }}</td>
            <td>{{ wallMounted.color_2 }}</td>
            <td>{{ wallMounted.size }}</td>
            <td>{{ wallMounted.source }}</td>
            <td>{{ wallMounted.sourceNotes }}</td>
            <td>{{ wallMounted.hhaConcept_1 }}</td>
            <td>{{ wallMounted.hhaConcept_2 }}</td>
            <td>{{ wallMounted.hhaSeries }}</td>
            <td>{{ wallMounted.hhaSet }}</td>
            <td>{{ wallMounted.interact }}</td>
            <td>{{ wallMounted.tag }}</td>
            <td>{{ wallMounted.lightingType }}</td>
            <td>{{ wallMounted.doorDeco }}</td>
            <td>{{ wallMounted.catalog }}</td>
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
        WallMounteds: [],  
        selectedwallMounted: null,  
        foundwallMounted: [],  
        wallMountedId: '',  
        wallMountedName: '',  
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
      

      async getWallMounteds() {  
        try {  
          const response = await axios.get('/api/wall_mounted');  
          this.WallMounteds = response.data;  
        } catch (error) {  
          console.error('Error fetching all wallMounted:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.wallMountedId) return;  
        try {  
          const response = await axios.get(`/api/wall_mounted/${this.wallMountedId}`);  
          this.selectedwallMounted = response.data;  
        } catch (error) {  
          console.error('Error fetching wallMounted by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.wallMountedName) return;  
        try {  
          const params = {  
            name: this.wallMountedName,  
          };  
          const response = await axios.get('/api/wall_mounted/findByName', { params });  
          this.foundwallMounted = response.data;  
        } catch (error) {  
          console.error('Error searching wallMounted by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getWallMounteds()  
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