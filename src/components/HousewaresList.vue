<template>
  <div class="component-container">
    <div class="back-to-top" v-if="isTopActive">
      <!-- 仅在 isTopActive 为 true 时显示“返回顶部”按钮 -->
      <button @click="scrollToTop" class="top-button">Top</button>
    </div>

    <div class="content">
      <!-- 功能一：展示整张表 -->
      <h2>展示整张表</h2>
      <button @click="getBottoms" class="styled-button">获取所有houseware</button>

      <table v-if="Bottoms.length">
        <h3>[Table houseware]</h3>
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
            <th>Size</th>
            <th>Tag</th>
            <th>outdoor</th> 
              <th>source</th> 
              <th>sourceNotes</th> 
              <th>hhaConcept_1</th> 
              <th>hhaConcept_2</th> 
              <th>hhaSeries</th> 
              <th>hhaSet</th> 
              <th>speakerType</th> 
              <th>lightingType</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="houseware in Bottoms" :key="houseware.id">
            <td>{{ houseware.id }}</td>
            <td>{{ houseware.name }}</td>
            <td>{{ houseware.variation }}</td>
            <td>{{ houseware.diy }}</td>
            <td>{{ houseware.buyPrice }}</td>
            <td>{{ houseware.sellPrice }}</td>
            <td>{{ houseware.color_1 }}</td>
            <td>{{ houseware.color_2 }}</td>
            <td>{{ houseware.size }}</td>
            <td>{{ houseware.tag }}</td>
            <td>{{ houseware.outdoor }}</td>
          <td>{{ houseware.source }}</td>
          <td>{{ houseware.sourceNotes }}</td>
          <td>{{ houseware.hhaConcept_1 }}</td>
          <td>{{ houseware.hhaConcept_2 }}</td>
          <td>{{ houseware.hhaSeries }}</td>
          <td>{{ houseware.hhaSet }}</td>
          <td>{{ houseware.speakerType }}</td>
          <td>{{ houseware.lightingType }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 功能二：根据ID获取houseware -->
      <h2>根据ID获取houseware</h2>
      <div>
        <label for="houseware-id">配件ID:</label>
        <input type="number" id="houseware-id" v-model="housewareId" class="input-field" />
        <button @click="getArtById" class="styled-button">获取配件</button>
        <div v-if="selectedhouseware">
          <h3>选中的配件信息:</h3>
          <p>名称: {{ selectedhouseware.name }}</p >
        </div>
      </div>

      <!-- 功能三：根据名称搜索houseware -->
      <h2>根据名称搜索houseware</h2>
      <div>
        <label for="houseware-name">配件名称:</label>
        <input type="text" id="houseware-name" v-model="housewareName" class="input-field" />
        <button @click="findArtByName" class="styled-button">搜索配件</button>

        <table v-if="foundhouseware.length">
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
              <th>Size</th>
              <th>Tag</th>
              <th>outdoor</th> 
          <th>source</th> 
          <th>sourceNotes</th> 
          <th>hhaConcept_1</th> 
          <th>hhaConcept_2</th> 
          <th>hhaSeries</th> 
          <th>hhaSet</th> 
          <th>speakerType</th> 
          <th>lightingType</th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="houseware in foundhouseware" :key="houseware.id">
              <td>{{ houseware.id }}</td>
              <td>{{ houseware.name }}</td>
              <td>{{ houseware.variation }}</td>
              <td>{{ houseware.diy }}</td>
              <td>{{ houseware.buyPrice }}</td>
              <td>{{ houseware.sellPrice }}</td>
              <td>{{ houseware.color_1 }}</td>
              <td>{{ houseware.color_2 }}</td>
              <td>{{ houseware.size }}</td>
              <td>{{ houseware.tag }}</td>
              <td>{{ houseware.outdoor }}</td>
          <td>{{ houseware.source }}</td>
          <td>{{ houseware.sourceNotes }}</td>
          <td>{{ houseware.hhaConcept_1 }}</td>
          <td>{{ houseware.hhaConcept_2 }}</td>
          <td>{{ houseware.hhaSeries }}</td>
          <td>{{ houseware.hhaSet }}</td>
          <td>{{ houseware.speakerType }}</td>
          <td>{{ houseware.lightingType }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 功能四：材料搜索 -->
      <h2>材料搜索</h2>
      <div>
        <label for="housewarename">配件名称:</label>
        <input type="text" id="housewarename" v-model="materials" class="input-field" />
        <button @click="findArtByMaterials" class="styled-button">搜索配件</button>
        <div v-if="materialslist.length">
          <h3>材料信息:</h3>
          <ul class="materials-list">
            <li v-for="houseware in materialslist" :key="houseware.id" class="materials-item">
              <p>{{ houseware.material1 }} - {{ houseware.material2 }} - {{ houseware.material3 }} - {{ houseware.material4 }} - {{ houseware.material5 }} - {{ houseware.material6 }}</p >
            </li>
          </ul>
        </div>
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
      Bottoms: [],
      selectedhouseware: null,
      foundhouseware: [],
      housewareId: '',
      housewareName: '',
      isTopActive: false,
      materials: '',
      materialslist: [],
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
    async getBottoms() {
      try {
        const response = await axios.get('/api/housewares');
        this.Bottoms = response.data;
      } catch (error) {
        console.error('Error fetching all houseware:', error);
      }
    },
    async getArtById() {
      if (!this.housewareId) return;
      try {
        const response = await axios.get(`/api/housewares/${this.housewareId}`);
        this.selectedhouseware = response.data;
      } catch (error) {
        console.error('Error fetching houseware by ID:', error);
      }
    },
    async findArtByName() {
      if (!this.housewareName) return;
      try {
        const params = {
          name: this.housewareName,
        };
        const response = await axios.get('/api/housewares/findByName', { params });
        this.foundhouseware = response.data;
      } catch (error) {
        console.error('Error searching houseware by name:', error);
      }
    },
    async findArtByMaterials() {
      if (!this.materials) return;
      try {
        const params = {
          name: this.materials,
        };
        const response = await axios.get('/api/housewares/materials', { params });
        this.materialslist = response.data;
      } catch (error) {
        console.error('Error searching houseware by materials:', error);
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

.materials-list {
  list-style-type: none;
  padding: 0;
}

.materials-item {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  transition: background-color 0.3s;
}

.materials-item:hover {
  background-color: #e0e0e0;
}

.materials-item p {
  margin: 0;
}
</style>