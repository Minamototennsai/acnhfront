<template>
  <div class="component-container">

    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getRecipes" class="styled-button">获取所有recipe</button>  
      
      <table v-if="Recipes.length">  
        <h3>[Table recipe]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>numberOfMaterial_1</th>  
            <th>material_1</th> 
            <th>numberOfMaterial_2</th>  
            <th>material_2</th>  
            <th>numberOfMaterial_3</th>
            <th>material_3</th>
            <th>numberOfMaterial_4</th>
            <th>material_4</th>
            <th>numberOfMaterial_5</th>
            <th>material_5</th>
            <th>numberOfMaterial_6</th> 
            <th>material_6</th> 
            <th>recipesToUnlock</th> 
            <th>category</th> 
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="recipe in Recipes" :key="recipe.id">  
            <td>{{ recipe.id }}</td>
            <td>{{ recipe.name }}</td>  
            <td>{{ recipe.numberOfMaterial_1 }}</td> 
            <td>{{ recipe.material_1 }}</td>  
            <td>{{ recipe.numberOfMaterial_2 }}</td>  
            <td>{{ recipe.material_2 }}</td> 
            <td>{{ recipe.numberOfMaterial_3 }}</td>  
            <td>{{ recipe.material_3 }}</td>
            <td>{{ recipe.numberOfMaterial_4 }}</td>
            <td>{{ recipe.material_4 }}</td>
            <td>{{ recipe.numberOfMaterial_5 }}</td>
            <td>{{ recipe.material_5 }}</td>
            <td>{{ recipe.numberOfMaterial_6 }}</td>
            <td>{{ recipe.material_6 }}</td>
            <td>{{ recipe.recipesToUnlock }}</td>
            <td>{{ recipe.category }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取recipe -->  
      <h2>根据ID获取recipe</h2>
      <div>  
        <label for="recipe-id">配件ID:</label>  
        <input type="number" id="recipe-id" v-model="recipeId" class="input-field"/>  
        <button @click="getArtById" class="styled-button">获取配件</button>  
        <div v-if="selectedrecipe">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedrecipe.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索recipe -->  
      <h2>根据名称搜索recipe</h2>
      <div>  
        <label for="recipe-name">配件名称:</label>  
        <input type="text" id="recipe-name" v-model="recipeName" class="input-field"/>  
        <button @click="findArtByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundrecipe.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>numberOfMaterial_1</th>  
            <th>material_1</th> 
            <th>numberOfMaterial_2</th>  
            <th>material_2</th>  
            <th>numberOfMaterial_3</th>
            <th>material_3</th>
            <th>numberOfMaterial_4</th>
            <th>material_4</th>
            <th>numberOfMaterial_5</th>
            <th>material_5</th>
            <th>numberOfMaterial_6</th> 
            <th>material_6</th> 
            <th>recipesToUnlock</th> 
            <th>category</th>
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="recipe in foundrecipe" :key="recipe.id">  
            <td>{{ recipe.id }}</td>
            <td>{{ recipe.name }}</td>  
            <td>{{ recipe.numberOfMaterial_1 }}</td> 
            <td>{{ recipe.material_1 }}</td>  
            <td>{{ recipe.numberOfMaterial_2 }}</td>  
            <td>{{ recipe.material_2 }}</td> 
            <td>{{ recipe.numberOfMaterial_3 }}</td>  
            <td>{{ recipe.material_3 }}</td>
            <td>{{ recipe.numberOfMaterial_4 }}</td>
            <td>{{ recipe.material_4 }}</td>
            <td>{{ recipe.numberOfMaterial_5 }}</td>
            <td>{{ recipe.material_5 }}</td>
            <td>{{ recipe.numberOfMaterial_6 }}</td>
            <td>{{ recipe.material_6 }}</td>
            <td>{{ recipe.recipesToUnlock }}</td>
            <td>{{ recipe.category }}</td>
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
        Recipes: [],  
        selectedrecipe: null,  
        foundrecipe: [],  
        recipeId: '',  
        recipeName: '',  
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
      

      async getRecipes() {  
        try {  
          const response = await axios.get('/api/recipes');  
          this.Recipes = response.data;  
        } catch (error) {  
          console.error('Error fetching all recipe:', error);  
        }  
      },  
      async getArtById() {  
        if (!this.recipeId) return;  
        try {  
          const response = await axios.get(`/api/recipes/${this.recipeId}`);  
          this.selectedrecipe = response.data;  
        } catch (error) {  
          console.error('Error fetching recipe by ID:', error);  
        }  
      },  
      async findArtByName() {  
        if (!this.recipeName) return;  
        try {  
          const params = {  
            name: this.recipeName,  
          };  
          const response = await axios.get('/api/recipes/findByName', { params });  
          this.foundrecipe = response.data;  
        } catch (error) {  
          console.error('Error searching recipe by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getRecipes()  
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