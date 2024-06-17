<template>
  <div class="component-container">
    <div class="back-to-top" v-if="isTopActive">  
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->  
      <button @click="scrollToTop" class="top-button">Top</button>  
    </div>  

    <div>  
      <!-- 功能一：展示整张表 -->   
      <h2>展示整张表</h2>  
      <button @click="getAllAchievements" class="styled-button">获取所有Achievements</button>  
      
      <table v-if="allAchievements.length">  
        <h3>[Table Achievements]</h3>
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>awardCriteria</th>  
            <th>internalCategory</th>  
            <th>numOfTiers</th>  
            <th>tier_1</th>  
            <th>tier_2</th>
            <th>tier_3</th>
            <th>tier_4</th>
            <th>tier_5</th>
            <th>rewardTier_1</th>
            <th>rewardTier_2</th>
            <th>rewardTier_3</th>
            <th>rewardTier_4</th>
            <th>rewardTier_5</th>
            <th>rewardTier_6</th>
            <th>sequential</th>  
          </tr>  
        </thead>  
        <tbody>  
            <tr v-for="achievement in allAchievements" :key="achievement.id">  
            <td>{{ achievement.id }}</td>
            <td>{{ achievement.name }}</td>  
            <td>{{ achievement.awardCriteria }}</td>  
            <td>{{ achievement.internalCategory }}</td>  
            <td>{{ achievement.numOfTiers }}</td>  
            <td>{{ achievement.tier_1 }}</td> 
            <td>{{ achievement.tier_2 }}</td>  
            <td>{{ achievement.tier_3 }}</td>
            <td>{{ achievement.tier_4 }}</td>
            <td>{{ achievement.tier_5 }}</td>
            <td>{{ achievement.rewardTier_1 }}</td>
            <td>{{ achievement.rewardTier_2 }}</td>
            <td>{{ achievement.rewardTier_3 }}</td>
            <td>{{ achievement.rewardTier_4 }}</td> 
            <td>{{ achievement.rewardTier_5 }}</td>
            <td>{{ achievement.rewardTier_6 }}</td>
            <td>{{ achievement.sequential  }}</td>
          </tr>  
        </tbody>  
      </table>  
  
  
  
      <!-- 功能二：根据ID获取Achievements -->  
      <h2>根据ID获取Achievements</h2>
      <div>  
        <label for="achievement-id">配件ID:</label>  
        <input type="number" id="achievement-id" v-model="achievementId" class="input-field"/>  
        <button @click="getachievementById" class="styled-button">获取配件</button>  
        <div v-if="selectedachievement">  
          <h3>选中的配件信息:</h3>  
          <p>名称: {{ selectedachievement.name }}</p>  
  
          <!-- 这里可以添加更多配件的展示信息 -->  
        </div>  
      </div>  
      
    
      <!-- 功能三：根据名称搜索Achievements -->  
      <h2>根据名称搜索Achievements</h2>
      <div>  
        <label for="achievement-name">配件名称:</label>  
        <input type="text" id="achievement-name" v-model="achievementName" class="input-field"/>  
        <button @click="findAchievementsByName" class="styled-button">搜索配件</button>  
        
      <table v-if="foundAchievements.length">  
        <thead>  
          <tr> 
            <th>ID</th> 
            <th>Name</th>  
            <th>awardCriteria</th>  
            <th>internalCategory</th>  
            <th>numOfTiers</th>  
            <th>tier_1</th>  
            <th>tier_2</th>
            <th>tier_3</th>
            <th>tier_4</th>
            <th>tier_5</th>
            <th>rewardTier_1</th>
            <th>rewardTier_2</th>
            <th>rewardTier_3</th>
            <th>rewardTier_4</th>
            <th>rewardTier_5</th>
            <th>rewardTier_6</th>
            <th>sequential</th>  
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="achievement in foundAchievements" :key="achievement.id">  
            <td>{{ achievement.id }}</td>
            <td>{{ achievement.name }}</td>  
            <td>{{ achievement.awardCriteria }}</td>  
            <td>{{ achievement.internalCategory }}</td>  
            <td>{{ achievement.numOfTiers }}</td>  
            <td>{{ achievement.tier_1 }}</td> 
            <td>{{ achievement.tier_2 }}</td>  
            <td>{{ achievement.tier_3 }}</td>
            <td>{{ achievement.tier_4 }}</td>
            <td>{{ achievement.tier_5 }}</td>
            <td>{{ achievement.rewardTier_1 }}</td>
            <td>{{ achievement.rewardTier_2 }}</td>
            <td>{{ achievement.rewardTier_3 }}</td>
            <td>{{ achievement.rewardTier_4 }}</td> 
            <td>{{ achievement.rewardTier_5 }}</td>
            <td>{{ achievement.rewardTier_6 }}</td>
            <td>{{ achievement.sequential  }}</td>
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
        allAchievements: [],  
        selectedachievement: null,  
        foundAchievements: [],  
        achievementId: '',  
        achievementName: '',  
        isTopActive: false, 
      };  
    },  
    methods: { 
      handleScroll() {
      this.isTopActive = window.scrollY > 200;
    },

      scrollToTop() {  
        // 使用 window.scrollTo 滚动到页面顶部  
        window.scrollTo({  
          top: 0,  
          behavior: 'smooth' // 可选，使滚动平滑进行  
        });  
      },  
      

      async getAllAchievements() {  
        try {  
          const response = await axios.get('/api/achievements');  
          this.allAchievements = response.data;  
        } catch (error) {  
          console.error('Error fetching all achievements:', error);  
        }  
      },  
      async getachievementById() {  
        if (!this.achievementId) return;  
        try {  
          const response = await axios.get(`/api/achievements/${this.achievementId}`);  
          this.selectedachievement = response.data;  
        } catch (error) {  
          console.error('Error fetching achievement by ID:', error);  
        }  
      },  
      async findAchievementsByName() {  
        if (!this.achievementName) return;  
        try {  
          const params = {  
            name: this.achievementName,  
          };  
          const response = await axios.get('/api/achievements/findByName', { params });  
          this.foundAchievements = response.data;  
        } catch (error) {  
          console.error('Error searching Achievements by name:', error);  
        }  
      },  
    },  
    mounted() {  
      // 可以在这里调用初始化的方法，比如getAllAchievements()  
      window.addEventListener('scroll', this.handleScroll);
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