<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getVillagers" class="styled-button">获取所有villager</button>  
      
      <table v-if="Villagers.length">  
        <h3>[Table villager]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>species</th>  
            <th>gender</th> 
            <th>personality</th>  
            <th>hobby</th>  
            <th>birthday</th>
            <th>catchphrase</th>
            <th>favoriteSong</th>
            <th>style_1</th>
            <th>style_2</th>
            <th>color_1</th>
            <th>color_2</th> 
            <th>wallpaper</th> 
            <th>flooring</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="villager in Villagers" :key="villager.id">  
            <td>{{ villager.id }}</td>
            <td>{{ villager.name }}</td>  
            <td>{{ villager.species }}</td> 
            <td>{{ villager.gender }}</td>  
            <td>{{ villager.personality }}</td>  
            <td>{{ villager.hobby }}</td> 
            <td>{{ villager.birthday }}</td>  
            <td>{{ villager.catchphrase }}</td>
            <td>{{ villager.favoriteSong }}</td>
            <td>{{ villager.style_1 }}</td>
            <td>{{ villager.style_2 }}</td>
            <td>{{ villager.color_1 }}</td>
            <td>{{ villager.color_2 }}</td>
            <td>{{ villager.wallpaper }}</td>
            <td>{{ villager.flooring }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取villager -->  
      <h2>根据ID获取villager</h2>
      <div>  
        <label for="villager-id">配件ID:</label>  
        <input type="number" id="villager-id" v-model="villagerId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedvillager">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedvillager.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索villager -->  
      <h2>根据名称搜索villager</h2>
      <div>  
        <label for="villager-name">配件名称:</label>  
        <input type="text" id="villager-name" v-model="villagerName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundvillager.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>species</th>  
            <th>gender</th> 
            <th>personality</th>  
            <th>hobby</th>  
            <th>birthday</th>
            <th>catchphrase</th>
            <th>favoriteSong</th>
            <th>style_1</th>
            <th>style_2</th>
            <th>color_1</th>
            <th>color_2</th> 
            <th>wallpaper</th> 
            <th>flooring</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="villager in foundvillager" :key="villager.id">  
            <td>{{ villager.id }}</td>
            <td>{{ villager.name }}</td>  
            <td>{{ villager.species }}</td> 
            <td>{{ villager.gender }}</td>  
            <td>{{ villager.personality }}</td>  
            <td>{{ villager.hobby }}</td> 
            <td>{{ villager.birthday }}</td>  
            <td>{{ villager.catchphrase }}</td>
            <td>{{ villager.favoriteSong }}</td>
            <td>{{ villager.style_1 }}</td>
            <td>{{ villager.style_2 }}</td>
            <td>{{ villager.color_1 }}</td>
            <td>{{ villager.color_2 }}</td>
            <td>{{ villager.wallpaper }}</td>
            <td>{{ villager.flooring }}</td>
          </tr>  
        </tbody>  
      </table>  
      <!-- <div v-else>  
        <p>没有可用的数据</p>  
      </div>   -->
      </div>  
      <!--功能四 搜索村民-->>
      <div>
    <h1>搜索村民</h1>
    <form @submit.prevent="searchVillagers" class="styled-button">
      
      <label for="species">物种：</label>
      <input type="text" id="species" v-model="species" placeholder="输入物种" class="input-field">
      <label for="gender">性别：</label>
      <input type="text" id="gender" v-model="gender" placeholder="输入性别" class="input-field">
      <label for="personality">个性：</label>
      <input type="text" id="personality" v-model="personality" placeholder="输入个性" class="input-field">
      <label for="hobby">爱好：</label>
      <input type="text" id="hobby" v-model="hobby" placeholder="输入爱好" class="input-field">
      <label for="birthday">生日月份：</label>
      <input type="text" id="birthday" v-model="birthdayMonth" placeholder="输入生日月份 如:“7-Jun”" class="input-field">
      <button type="submit" class="styled-button">搜索</button>
    </form>
    <h2>搜索结果：</h2>
    <!-- <ul>
      <li v-for="villager in search_villagers" :key="villager.id">
        {{ villager.name }} - {{ villager.species }} - {{ villager.gender }} 
      </li>
    </ul> -->
    <table v-if="search_villagers.length">  
        <h3>[Table villager]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>species</th>  
            <th>gender</th> 
            <th>personality</th>  
            <th>hobby</th>  
            <th>birthday</th>
            <th>catchphrase</th>
            <th>favoriteSong</th>
            <th>style_1</th>
            <th>style_2</th>
            <th>color_1</th>
            <th>color_2</th> 
            <th>wallpaper</th> 
            <th>flooring</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="villager in search_villagers" :key="villager.id">  
            <td>{{ villager.id }}</td>
            <td>{{ villager.name }}</td>  
            <td>{{ villager.species }}</td> 
            <td>{{ villager.gender }}</td>  
            <td>{{ villager.personality }}</td>  
            <td>{{ villager.hobby }}</td> 
            <td>{{ villager.birthday }}</td>  
            <td>{{ villager.catchphrase }}</td>
            <td>{{ villager.favoriteSong }}</td>
            <td>{{ villager.style_1 }}</td>
            <td>{{ villager.style_2 }}</td>
            <td>{{ villager.color_1 }}</td>
            <td>{{ villager.color_2 }}</td>
            <td>{{ villager.wallpaper }}</td>
            <td>{{ villager.flooring }}</td>
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
        species: '',
        Villagers: [],  
        selectedvillager: null,  
        foundvillager: [],  
        villagerId: '',  
        villagerName: '',  
        isTopActive: false, 
        gender: '',
        personality: '',
        hobby: '',
        birthdayMonth: '',
        search_villagers: [],
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
      

      async getVillagers() {  
        try {  
          const response = await axios.get('/api/villagers');  
          this.Villagers = response.data;  
        } catch (error) {  
          console.error('Error fetching all villager:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.villagerId) return;  
        try {  
          const response = await axios.get(`/api/villagers/${this.villagerId}`);  
          this.selectedvillager = response.data;  
        } catch (error) {  
          console.error('Error fetching villager by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.villagerName) return;  
        try {  
          const params = {  
            name: this.villagerName,  
          };  
          const response = await axios.get('/api/villagers/findByName', { params });  
          this.foundvillager = response.data;  
        } catch (error) {  
          console.error('Error searching villager by name:', error);  
        }  
      }, 
      async searchVillagers() {
        try {  
          const response = await axios.get(`/api/villagers/search?species=${this.species}&gender=${this.gender}&personality=${this.personality}&hobby=${this.hobby}&birthday=${this.birthdayMonth}`);  
          this.search_villagers = response.data;  
        } catch (error) {  
          console.error('Error fetching all villager:', error);  
        } 
      } 
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getVillagers()  
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