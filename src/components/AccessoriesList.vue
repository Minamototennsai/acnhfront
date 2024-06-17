<template>
  <div class="component-container">
    <div class="back-to-top" v-if="isTopActive">
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->
      <button @click="scrollToTop" class="top-button">Top</button>
    </div>

    <div class="content">
      <!-- 功能一：展示整张表 -->
      <h2>展示整张表</h2>
      <button @click="getAllAccessories" class="styled-button">获取所有Accessories</button>

      <table v-if="allAccessories.length">
        <h3>[Table Accessories]</h3>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Variation</th>
            <th>DIY</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Color_1</th>
            <th>Color_2</th>
            <th>MilesPrice</th>
            <th>Source</th>
            <th>SourseNotes</th>
            <th>SeasonalAvailability</th>
            <th>MannequinPiece</th>
            <th>Style</th>
            <th>LabelThemes</th>
            <th>Type</th>
            <th>VillagerEquippable</th>
            <th>Catalog</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="accessory in allAccessories" :key="accessory.id">
            <td>{{ accessory.id }}</td>
            <td>{{ accessory.name }}</td>
            <td>{{ accessory.variation }}</td>
            <td>{{ accessory.diy }}</td>
            <td>{{ accessory.buy }}</td>
            <td>{{ accessory.sell }}</td>
            <td>{{ accessory.color_1 }}</td>
            <td>{{ accessory.color_2 }}</td>
            <td>{{ accessory.milesPrice }}</td>
            <td>{{ accessory.source }}</td>
            <td>{{ accessory.sourceNotes }}</td>
            <td>{{ accessory.seasonalAvailability }}</td>
            <td>{{ accessory.mannequinPiece }}</td>
            <td>{{ accessory.style }}</td>
            <td>{{ accessory.labelThemes }}</td>
            <td>{{ accessory.type }}</td>
            <td>{{ accessory.villagerEquippable }}</td>
            <td>{{ accessory.catalog }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 功能二：根据ID获取Accessories -->
      <h2>根据ID获取Accessories</h2>
      <div>
        <label for="accessory-id">配件ID:</label>
        <input type="number" id="accessory-id" v-model="accessoryId" class="input-field" />
        <button @click="getAccessoryById" class="styled-button">获取配件</button>
        <div v-if="selectedAccessory">
          <h3>选中的配件信息:</h3>
          <p>名称: {{ selectedAccessory.name }}</p >
        </div>
      </div>

      <!-- 功能三：根据名称搜索Accessories -->
      <h2>根据名称搜索Accessories</h2>
      <div>
        <label for="accessory-name">配件名称:</label>
        <input type="text" id="accessory-name" v-model="accessoryName" class="input-field" />
        <button @click="findAccessoriesByName" class="styled-button">搜索配件</button>

        <table v-if="foundAccessories.length">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Variation</th>
              <th>DIY</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Color_1</th>
              <th>Color_2</th>
              <th>MilesPrice</th>
              <th>Source</th>
              <th>SourseNotes</th>
              <th>SeasonalAvailability</th>
              <th>MannequinPiece</th>
              <th>Style</th>
              <th>LabelThemes</th>
              <th>Type</th>
              <th>VillagerEquippable</th>
              <th>Catalog</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="accessory in foundAccessories" :key="accessory.id">
              <td>{{ accessory.id }}</td>
              <td>{{ accessory.name }}</td>
              <td>{{ accessory.variation }}</td>
              <td>{{ accessory.diy }}</td>
              <td>{{ accessory.buy }}</td>
              <td>{{ accessory.sell }}</td>
              <td>{{ accessory.color_1 }}</td>
              <td>{{ accessory.color_2 }}</td>
              <td>{{ accessory.milesPrice }}</td>
              <td>{{ accessory.source }}</td>
              <td>{{ accessory.sourceNotes }}</td>
              <td>{{ accessory.sourceNotes }}</td>
              <td>{{ accessory.seasonalAvailability }}</td>
              <td>{{ accessory.mannequinPiece }}</td>
              <td>{{ accessory.style }}</td>
              <td>{{ accessory.labelThemes }}</td>
              <td>{{ accessory.type }}</td>
              <td>{{ accessory.villagerEquippable }}</td>
              <td>{{ accessory.catalog }}</td>
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
      allAccessories: [],
      selectedAccessory: null,
      foundAccessories: [],
      accessoryId: '',
      accessoryName: '',
      isTopActive: false,
    };
  },
  methods: {
    handleScroll() {
      this.isTopActive = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    async getAllAccessories() {
      try {
        const response = await axios.get('/api/accessories');
        this.allAccessories = response.data;
      } catch (error) {
        console.error('Error fetching all accessories:', error);
      }
    },
    async getAccessoryById() {
      if (!this.accessoryId) return;
      try {
        const response = await axios.get(`/api/accessories/${this.accessoryId}`);
        this.selectedAccessory = response.data;
      } catch (error) {
        console.error('Error fetching accessory by ID:', error);
      }
    },
    async findAccessoriesByName() {
      if (!this.accessoryName) return;
      try {
        const params = {
          name: this.accessoryName,
        };
        const response = await axios.get('/api/accessories/findByName', { params });
        this.foundAccessories = response.data;
      } catch (error) {
        console.error('Error searching accessories by name:', error);
      }
    },
  },
  mounted() {
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