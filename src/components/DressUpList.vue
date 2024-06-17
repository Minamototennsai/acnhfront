<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getDressUps" class="styled-button">获取所有dressUp</button>  
      
      <table v-if="DressUps.length">  
        <h3>[Table dressUp]</h3>
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
            <th>source</th>
            <th>sourceNotes</th>
            <th>seasonalAvailability</th>
            <th>mannequinPiece</th> 
            <th>style</th> 
            <th>labelThemes</th> 
            <th>catalog</th> 
            <th>primaryShape</th> 
            <th>secondaryShape</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="dressUp in DressUps" :key="dressUp.id">  
            <td>{{ dressUp.id }}</td>
            <td>{{ dressUp.name }}</td>  
            <td>{{ dressUp.variation }}</td> 
            <td>{{ dressUp.diy }}</td>  
            <td>{{ dressUp.buy }}</td>  
            <td>{{ dressUp.sell }}</td> 
            <td>{{ dressUp.color_1 }}</td>  
            <td>{{ dressUp.color_2 }}</td>
            <td>{{ dressUp.source }}</td>
            <td>{{ dressUp.sourceNotes }}</td>
            <td>{{ dressUp.seasonalAvailability }}</td>
            <td>{{ dressUp.mannequinPiece }}</td>
            <td>{{ dressUp.style }}</td>
            <td>{{ dressUp.labelThemes }}</td>
            <td>{{ dressUp.catalog }}</td>
            <td>{{ dressUp.primaryShape }}</td>
            <td>{{ dressUp.secondaryShape }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取dressUp -->  
      <h2>根据ID获取dressUp</h2>
      <div>  
        <label for="dressUp-id">配件ID:</label>  
        <input type="number" id="dressUp-id" v-model="dressUpId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selecteddressUp">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selecteddressUp.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索dressUp -->  
      <h2>根据名称搜索dressUp</h2>
      <div>  
        <label for="dressUp-name">配件名称:</label>  
        <input type="text" id="dressUp-name" v-model="dressUpName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="founddressUp.length">  
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
            <th>source</th>
            <th>sourceNotes</th>
            <th>seasonalAvailability</th>
            <th>mannequinPiece</th> 
            <th>style</th> 
            <th>labelThemes</th> 
            <th>catalog</th> 
            <th>primaryShape</th> 
            <th>secondaryShape</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="dressUp in founddressUp" :key="dressUp.id">  
            <td>{{ dressUp.id }}</td>
            <td>{{ dressUp.name }}</td>  
            <td>{{ dressUp.variation }}</td> 
            <td>{{ dressUp.diy }}</td>  
            <td>{{ dressUp.buy }}</td>  
            <td>{{ dressUp.sell }}</td> 
            <td>{{ dressUp.color_1 }}</td>  
            <td>{{ dressUp.color_2 }}</td>
            <td>{{ dressUp.source }}</td>
            <td>{{ dressUp.sourceNotes }}</td>
            <td>{{ dressUp.seasonalAvailability }}</td>
            <td>{{ dressUp.mannequinPiece }}</td>
            <td>{{ dressUp.style }}</td>
            <td>{{ dressUp.labelThemes }}</td>
            <td>{{ dressUp.catalog }}</td>
            <td>{{ dressUp.primaryShape }}</td>
            <td>{{ dressUp.secondaryShape }}</td>
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
        DressUps: [],  
        selecteddressUp: null,  
        founddressUp: [],  
        dressUpId: '',  
        dressUpName: '',  
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
      

      async getDressUps() {  
        try {  
          const response = await axios.get('/api/dress_up');  
          this.DressUps = response.data;  
        } catch (error) {  
          console.error('Error fetching all dressUp:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.dressUpId) return;  
        try {  
          const response = await axios.get(`/api/dress_up/${this.dressUpId}`);  
          this.selecteddressUp = response.data;  
        } catch (error) {  
          console.error('Error fetching dressUp by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.dressUpName) return;  
        try {  
          const params = {  
            name: this.dressUpName,  
          };  
          const response = await axios.get('/api/dress_up/findByName', { params });  
          this.founddressUp = response.data;  
        } catch (error) {  
          console.error('Error searching dressUp by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getDressUps()  
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