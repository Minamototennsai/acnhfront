
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">


      <h2>
        Villagers
      </h2>
      <!-- 搜索表单 -->
      <el-form :inline="true" @submit.prevent="search">
        <el-form-item>
          <!-- 搜索按钮 -->
          <el-button type="primary" @click="search">搜索</el-button>
          <!-- 清除按钮 -->
          <el-button @click="reset">清除</el-button>
        </el-form-item>
      </el-form>
      
      <!-- 表格 -->
      <el-table :data="paginatedData" style="width: 100%">

        <!-- Id列 -->
        <el-table-column prop="id" label="Id">
          <template #header>
            <div>
              Id
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <!-- Name列 -->
        <el-table-column prop="name" label="Name">
          <template #header>
            <div>
              Name
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Species列 -->
        <el-table-column prop="species" label="Species">
          <template #header>
            <div>
              Species
              <el-select v-model="searchInputs.species" placeholder="Select" @change="() => {onSpeciesSearchInput('species'); search()}" :disabled="isIdActive || isNameActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Alligator" value="Alligator"></el-option>        
              <el-option label="Anteater" value="Anteater"></el-option>        
              <el-option label="Bear" value="Bear"></el-option>        
              <el-option label="Bird" value="Bird"></el-option>        
              <el-option label="Bull" value="Bull"></el-option>        
              <el-option label="Cat" value="Cat"></el-option>        
              <el-option label="Chicken" value="Chicken"></el-option>        
              <el-option label="Cow" value="Cow"></el-option>        
              <el-option label="Cub" value="Cub"></el-option>        
              <el-option label="Deer" value="Deer"></el-option>        
              <el-option label="Dog" value="Dog"></el-option>        
              <el-option label="Duck" value="Duck"></el-option>        
              <el-option label="Eagle" value="Eagle"></el-option>        
              <el-option label="Elephant" value="Elephant"></el-option>        
              <el-option label="Frog" value="Frog"></el-option>        
              <el-option label="Goat" value="Goat"></el-option>        
              <el-option label="Gorilla" value="Gorilla"></el-option>        
              <el-option label="Hamster" value="Hamster"></el-option>        
              <el-option label="Hippo" value="Hippo"></el-option>        
              <el-option label="Horse" value="Horse"></el-option>        
              <el-option label="Kangaroo" value="Kangaroo"></el-option>        
              <el-option label="Koala" value="Koala"></el-option>        
              <el-option label="Lion" value="Lion"></el-option>        
              <el-option label="Monkey" value="Monkey"></el-option>        
              <el-option label="Mouse" value="Mouse"></el-option>        
              <el-option label="Octopus" value="Octopus"></el-option>        
              <el-option label="Ostrich" value="Ostrich"></el-option>        
              <el-option label="Penguin" value="Penguin"></el-option>        
              <el-option label="Pig" value="Pig"></el-option>        
              <el-option label="Rabbit" value="Rabbit"></el-option>        
              <el-option label="Rhino" value="Rhino"></el-option>        
              <el-option label="Sheep" value="Sheep"></el-option>        
              <el-option label="Squirrel" value="Squirrel"></el-option>        
              <el-option label="Tiger" value="Tiger"></el-option>        
              <el-option label="Wolf" value="Wolf"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.species }}</span>
          </template>
        </el-table-column>

        <!-- Gender列 -->
        <el-table-column prop="gender" label="Gender">
          <template #header>
            <div>
              Gender
              <el-select v-model="searchInputs.gender" placeholder="Select" @change="() => {onGenderSearchInput('gender'); search()}" :disabled="isIdActive || isNameActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Male" value="Male"></el-option>        
              <el-option label="Female" value="Female"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.gender }}</span>
          </template>
        </el-table-column>

        <!-- Personality列 -->
        <el-table-column prop="personality" label="Personality">
          <template #header>
            <div>
              Personality
              <el-select v-model="searchInputs.personality" placeholder="Select" @change="() => {onPersonalitySearchInput('personality'); search()}" :disabled="isIdActive || isNameActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Big Sister" value="Big Sister"></el-option>        
              <el-option label="Cranky" value="Cranky"></el-option>        
              <el-option label="Jock" value="Jock"></el-option>        
              <el-option label="Lazy" value="Lazy"></el-option>        
              <el-option label="Normal" value="Normal"></el-option>        
              <el-option label="Peppy" value="Peppy"></el-option>        
              <el-option label="Smug" value="Smug"></el-option>        
              <el-option label="Snooty" value="Snooty"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.personality }}</span>
          </template>
        </el-table-column>

        <!-- Hobby列 -->
        <el-table-column prop="hobby" label="Hobby">
          <template #header>
            <div>
              Hobby
              <el-select v-model="searchInputs.hobby" placeholder="Select" @change="() => {onHobbySearchInput('hobby'); search()}" :disabled="isIdActive || isNameActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Education" value="Education"></el-option>        
              <el-option label="Fashion" value="Fashion"></el-option>        
              <el-option label="Fitness" value="Fitness"></el-option>        
              <el-option label="Music" value="Music"></el-option>        
              <el-option label="Nature" value="Nature"></el-option>        
              <el-option label="Play" value="Play"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hobby }}</span>
          </template>
        </el-table-column>

        <!-- Birthday列 -->
        <el-table-column prop="birthday" label="Birthday">
          <template #header>
            <div>
              Birthday
              <el-select v-model="searchInputs.birthday" placeholder="Select" @change="() => {onBirthdaySearchInput('birthday'); search()}" :disabled="isIdActive || isNameActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Jan" value="Jan"></el-option>        
              <el-option label="Feb" value="Feb"></el-option>        
              <el-option label="Mar" value="Mar"></el-option>        
              <el-option label="Apr" value="Apr"></el-option>        
              <el-option label="May" value="May"></el-option>        
              <el-option label="Jun" value="Jun"></el-option>        
              <el-option label="Jul" value="Jul"></el-option>        
              <el-option label="Aug" value="Aug"></el-option>        
              <el-option label="Sep" value="Sep"></el-option>        
              <el-option label="Oct" value="Oct"></el-option>        
              <el-option label="Nov" value="Nov"></el-option>        
              <el-option label="Dec" value="Dec"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.birthday }}</span>
          </template>
        </el-table-column>

        <!-- Catchphrase列 -->
        <el-table-column prop="catchphrase" label="Catchphrase">
          <template #header>
            <div>
              Catchphrase
              <el-input v-model="searchInputs.catchphrase" placeholder="Search in Catchphrase" @input="onCatchphraseSearchInput('catchphrase')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.catchphrase }}</span>
          </template>
        </el-table-column>

        <!-- Favorite Song列 -->
        <el-table-column prop="favoriteSong" label="Favorite Song">
          <template #header>
            <div>
              Favorite Song
              <el-input v-model="searchInputs.favoriteSong" placeholder="Search in Favorite Song" @input="onFavoriteSongSearchInput('favoriteSong')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.favoriteSong }}</span>
          </template>
        </el-table-column>

        <!-- Style1列 -->
        <el-table-column prop="style1" label="Style1">
          <template #header>
            <div>
              Style1
              <el-select v-model="searchInputs.style1" placeholder="Select" @change="() => {onStyle1SearchInput('style1'); search()}" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Simple" value="Simple"></el-option>        
              <el-option label="Cute" value="Cute"></el-option>        
              <el-option label="Active" value="Active"></el-option>        
              <el-option label="Cool" value="Cool"></el-option>        
              <el-option label="Gorgeous" value="Gorgeous"></el-option>        
              <el-option label="Elegant" value="Elegant"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.style1 }}</span>
          </template>
        </el-table-column>

        <!-- Style2列 -->
        <el-table-column prop="style2" label="Style2">
          <template #header>
            <div>
              Style2
              <el-select v-model="searchInputs.style2" placeholder="Select" @change="() => {onStyle2SearchInput('style2'); search()}" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isColor1Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Simple" value="Simple"></el-option>        
              <el-option label="Cute" value="Cute"></el-option>        
              <el-option label="Active" value="Active"></el-option>        
              <el-option label="Cool" value="Cool"></el-option>        
              <el-option label="Gorgeous" value="Gorgeous"></el-option>        
              <el-option label="Elegant" value="Elegant"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.style2 }}</span>
          </template>
        </el-table-column>

        <!-- Color1列 -->
        <el-table-column prop="color1" label="Color1">
          <template #header>
            <div>
              Color1
              <el-select v-model="searchInputs.color1" placeholder="Select" @change="() => {onColor1SearchInput('color1'); search()}" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor2Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Beige" value="Beige"></el-option>        
              <el-option label="Black" value="Black"></el-option>        
              <el-option label="Blue" value="Blue"></el-option>        
              <el-option label="Brown" value="Brown"></el-option>        
              <el-option label="Colorful" value="Colorful"></el-option>        
              <el-option label="Gray" value="Gray"></el-option>        
              <el-option label="Green" value="Green"></el-option>        
              <el-option label="Light blue" value="Light blue"></el-option>        
              <el-option label="Orange" value="Orange"></el-option>        
              <el-option label="Pink" value="Pink"></el-option>        
              <el-option label="Purple" value="Purple"></el-option>        
              <el-option label="Red" value="Red"></el-option>        
              <el-option label="White" value="White"></el-option>        
              <el-option label="Yellow" value="Yellow"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.color1 }}</span>
          </template>
        </el-table-column>

        <!-- Color2列 -->
        <el-table-column prop="color2" label="Color2">
          <template #header>
            <div>
              Color2
              <el-select v-model="searchInputs.color2" placeholder="Select" @change="() => {onColor2SearchInput('color2'); search()}" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isWallpaperActive || isFlooringActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Beige" value="Beige"></el-option>        
              <el-option label="Black" value="Black"></el-option>        
              <el-option label="Blue" value="Blue"></el-option>        
              <el-option label="Brown" value="Brown"></el-option>        
              <el-option label="Colorful" value="Colorful"></el-option>        
              <el-option label="Gray" value="Gray"></el-option>        
              <el-option label="Green" value="Green"></el-option>        
              <el-option label="Light blue" value="Light blue"></el-option>        
              <el-option label="Orange" value="Orange"></el-option>        
              <el-option label="Pink" value="Pink"></el-option>        
              <el-option label="Purple" value="Purple"></el-option>        
              <el-option label="Red" value="Red"></el-option>        
              <el-option label="White" value="White"></el-option>        
              <el-option label="Yellow" value="Yellow"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.color2 }}</span>
          </template>
        </el-table-column>

        <!-- Wallpaper列 -->
        <el-table-column prop="wallpaper" label="Wallpaper">
          <template #header>
            <div>
              Wallpaper
              <el-input v-model="searchInputs.wallpaper" placeholder="Search in Wallpaper" @input="onWallpaperSearchInput('wallpaper')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isFlooringActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.wallpaper }}</span>
          </template>
        </el-table-column>

        <!-- Flooring列 -->
        <el-table-column prop="flooring" label="Flooring">
          <template #header>
            <div>
              Flooring
              <el-input v-model="searchInputs.flooring" placeholder="Search in Flooring" @input="onFlooringSearchInput('flooring')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isSpeciesActive || isGenderActive || isPersonalityActive || isHobbyActive || isBirthdayActive || isCatchphraseActive || isFavoriteSongActive || isStyle1Active || isStyle2Active || isColor1Active || isColor2Active || isWallpaperActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.flooring }}</span>
          </template>
        </el-table-column>

      </el-table>

      <!-- 分页组件 -->
      <el-select v-model="pageSize" placeholder="每页条数" @change="handlePageSizeChange" style="width: 125px;">
        <el-option label="20条/页" :value="20"></el-option>
        <el-option label="50条/页" :value="50"></el-option>
        <el-option label="100条/页" :value="100"></el-option>
      </el-select>

      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        @current-change="handlePageChange"
        style="margin-top: 20px; text-align: center;">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {

    // 搜索输入框的数据绑定
    const searchInputs = ref({
      id: '',
      name: '',
      species: '',
      gender: '',
      personality: '',
      hobby: '',
      birthday: '',
      catchphrase: '',
      favoriteSong: '',
      style1: '',
      style2: '',
      color1: '',
      color2: '',
      wallpaper: '',
      flooring: '',
    });


    // 表格数据
    const tableData = ref([]);
    // 当前页码
    const currentPage = ref(1);
    // 数据总数
    const total = ref(0);
    // 当前每页显示条目数
    const pageSize = ref(20);
      
    // 活动标识
    const isIdActive = ref(false);
    const isNameActive = ref(false);
    const isSpeciesActive = ref(false);
    const isGenderActive = ref(false);
    const isPersonalityActive = ref(false);
    const isHobbyActive = ref(false);
    const isBirthdayActive = ref(false);
    const isCatchphraseActive = ref(false);
    const isFavoriteSongActive = ref(false);
    const isStyle1Active = ref(false);
    const isStyle2Active = ref(false);
    const isColor1Active = ref(false);
    const isColor2Active = ref(false);
    const isWallpaperActive = ref(false);
    const isFlooringActive = ref(false);

    
    // 计算当前页需要显示的数据
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return tableData.value.slice(start, end);
    });
    
    // 每页条目数变化时的处理逻辑
    const handlePageSizeChange = (value) => {
      pageSize.value = value;
      handlePageChange(currentPage.value);
    }

    // 组件创建时从/api/villagers接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/villagers接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/villagers').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/villagers/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/villagers/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/villagers/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/search接口获取搜索数据
    const fetchDataFromApiSearch = (species, gender, personality, hobby, birthday) => {
      axios.get(`/api/villagers/search?species=${species}&gender=${gender}&personality=${personality}&birthday=${hobby}&hobby=${birthday}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchCatchphrase接口获取搜索数据
    const fetchDataFromApiSearchCatchphrase = (query) => {
      axios.get(`/api/villagers/searchCatchphrase?catchphrase=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchFavoriteSong接口获取搜索数据
    const fetchDataFromApiSearchFavoriteSong = (query) => {
      axios.get(`/api/villagers/searchFavoriteSong?favoriteSong=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchStyle1接口获取搜索数据
    const fetchDataFromApiSearchStyle1 = (query) => {
      axios.get(`/api/villagers/searchStyle1?style1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchStyle2接口获取搜索数据
    const fetchDataFromApiSearchStyle2 = (query) => {
      axios.get(`/api/villagers/searchStyle2?style2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchColor1接口获取搜索数据
    const fetchDataFromApiSearchColor1 = (query) => {
      axios.get(`/api/villagers/searchColor1?color1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchColor2接口获取搜索数据
    const fetchDataFromApiSearchColor2 = (query) => {
      axios.get(`/api/villagers/searchColor2?color2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchWallpaper接口获取搜索数据
    const fetchDataFromApiSearchWallpaper = (query) => {
      axios.get(`/api/villagers/searchWallpaper?wallpaper=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/villagers/searchFlooring接口获取搜索数据
    const fetchDataFromApiSearchFlooring = (query) => {
      axios.get(`/api/villagers/searchFlooring?flooring=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };
    
    //处理筛选条件变化事件
    const onIdSearchInput = (column) => {
      if (column === 'id' && searchInputs.value.id) {
        isIdActive.value = true;
      } else if (!searchInputs.value.id) {
        isIdActive.value = false;
      }
    };

    const onNameSearchInput = (column) => {
      if (column === 'name' && searchInputs.value.name) {
        isNameActive.value = true;
      } else if (!searchInputs.value.name) {
        isNameActive.value = false;
      }
    };

    const onSpeciesSearchInput = (column) => {
      if (column === 'species' && searchInputs.value.species) {
        isSpeciesActive.value = true;
      } else if (!searchInputs.value.species) {
        isSpeciesActive.value = false;
      }
    };

    const onGenderSearchInput = (column) => {
      if (column === 'gender' && searchInputs.value.gender) {
        isGenderActive.value = true;
      } else if (!searchInputs.value.gender) {
        isGenderActive.value = false;
      }
    };

    const onPersonalitySearchInput = (column) => {
      if (column === 'personality' && searchInputs.value.personality) {
        isPersonalityActive.value = true;
      } else if (!searchInputs.value.personality) {
        isPersonalityActive.value = false;
      }
    };

    const onHobbySearchInput = (column) => {
      if (column === 'hobby' && searchInputs.value.hobby) {
        isHobbyActive.value = true;
      } else if (!searchInputs.value.hobby) {
        isHobbyActive.value = false;
      }
    };

    const onBirthdaySearchInput = (column) => {
      if (column === 'birthday' && searchInputs.value.birthday) {
        isBirthdayActive.value = true;
      } else if (!searchInputs.value.birthday) {
        isBirthdayActive.value = false;
      }
    };

    const onCatchphraseSearchInput = (column) => {
      if (column === 'catchphrase' && searchInputs.value.catchphrase) {
        isCatchphraseActive.value = true;
      } else if (!searchInputs.value.catchphrase) {
        isCatchphraseActive.value = false;
      }
    };

    const onFavoriteSongSearchInput = (column) => {
      if (column === 'favoriteSong' && searchInputs.value.favoriteSong) {
        isFavoriteSongActive.value = true;
      } else if (!searchInputs.value.favoriteSong) {
        isFavoriteSongActive.value = false;
      }
    };

    const onStyle1SearchInput = (column) => {
      if (column === 'style1' && searchInputs.value.style1) {
        isStyle1Active.value = true;
      } else if (!searchInputs.value.style1) {
        isStyle1Active.value = false;
      }
    };

    const onStyle2SearchInput = (column) => {
      if (column === 'style2' && searchInputs.value.style2) {
        isStyle2Active.value = true;
      } else if (!searchInputs.value.style2) {
        isStyle2Active.value = false;
      }
    };

    const onColor1SearchInput = (column) => {
      if (column === 'color1' && searchInputs.value.color1) {
        isColor1Active.value = true;
      } else if (!searchInputs.value.color1) {
        isColor1Active.value = false;
      }
    };

    const onColor2SearchInput = (column) => {
      if (column === 'color2' && searchInputs.value.color2) {
        isColor2Active.value = true;
      } else if (!searchInputs.value.color2) {
        isColor2Active.value = false;
      }
    };

    const onWallpaperSearchInput = (column) => {
      if (column === 'wallpaper' && searchInputs.value.wallpaper) {
        isWallpaperActive.value = true;
      } else if (!searchInputs.value.wallpaper) {
        isWallpaperActive.value = false;
      }
    };

    const onFlooringSearchInput = (column) => {
      if (column === 'flooring' && searchInputs.value.flooring) {
        isFlooringActive.value = true;
      } else if (!searchInputs.value.flooring) {
        isFlooringActive.value = false;
      }
    };

    
    // 搜索按钮点击事件
    const search = () => {

      // 处理 id 列的搜索
      if (searchInputs.value.id) {
        fetchDataFromApiGetById(searchInputs.value.id);
      }

      // 处理 name 列的搜索
      else if (searchInputs.value.name) {
        fetchDataFromApiFindByName(searchInputs.value.name);
      }

      // 处理叠加搜索
      else if (searchInputs.value.species || searchInputs.value.gender || searchInputs.value.personality || searchInputs.value.hobby || searchInputs.value.birthday) {
        fetchDataFromApiSearch(searchInputs.value.species, searchInputs.value.gender, searchInputs.value.personality, searchInputs.value.hobby, searchInputs.value.birthday);
      }

      // 处理 catchphrase 列的搜索
      else if (searchInputs.value.catchphrase) {
        fetchDataFromApiSearchCatchphrase(searchInputs.value.catchphrase);
      }

      // 处理 favoriteSong 列的搜索
      else if (searchInputs.value.favoriteSong) {
        fetchDataFromApiSearchFavoriteSong(searchInputs.value.favoriteSong);
      }

      // 处理 style1 列的搜索
      else if (searchInputs.value.style1) {
        fetchDataFromApiSearchStyle1(searchInputs.value.style1);
      }

      // 处理 style2 列的搜索
      else if (searchInputs.value.style2) {
        fetchDataFromApiSearchStyle2(searchInputs.value.style2);
      }

      // 处理 color1 列的搜索
      else if (searchInputs.value.color1) {
        fetchDataFromApiSearchColor1(searchInputs.value.color1);
      }

      // 处理 color2 列的搜索
      else if (searchInputs.value.color2) {
        fetchDataFromApiSearchColor2(searchInputs.value.color2);
      }

      // 处理 wallpaper 列的搜索
      else if (searchInputs.value.wallpaper) {
        fetchDataFromApiSearchWallpaper(searchInputs.value.wallpaper);
      }

      // 处理 flooring 列的搜索
      else if (searchInputs.value.flooring) {
        fetchDataFromApiSearchFlooring(searchInputs.value.flooring);
      }

      else {
        fetchAllData();
      }

    };
    
    // 清除按钮点击事件
    const reset = () => {
      for (let key in searchInputs.value) {
        searchInputs.value[key] = '';
      }
      isIdActive.value = false;
      isNameActive.value = false;
      isSpeciesActive.value = false;
      isGenderActive.value = false;
      isPersonalityActive.value = false;
      isHobbyActive.value = false;
      isBirthdayActive.value = false;
      isCatchphraseActive.value = false;
      isFavoriteSongActive.value = false;
      isStyle1Active.value = false;
      isStyle2Active.value = false;
      isColor1Active.value = false;
      isColor2Active.value = false;
      isWallpaperActive.value = false;
      isFlooringActive.value = false;

      fetchAllData();
    };
    
    // 处理分页切换事件
    const handlePageChange = (page) => {
      currentPage.value = page;
    };
    
    // 函数返回值
    return {

      searchInputs,
      tableData,
      currentPage,
      total,
      search,
      reset,
      pageSize,
      handlePageChange,
      handlePageSizeChange,
      paginatedData,  
      isIdActive,
      onIdSearchInput,
      fetchDataFromApiGetById,
      isNameActive,
      onNameSearchInput,
      fetchDataFromApiFindByName,
      isSpeciesActive,
      onSpeciesSearchInput,
      fetchDataFromApiSearch,
      isGenderActive,
      onGenderSearchInput,
      isPersonalityActive,
      onPersonalitySearchInput,
      isHobbyActive,
      onHobbySearchInput,
      isBirthdayActive,
      onBirthdaySearchInput,
      isCatchphraseActive,
      onCatchphraseSearchInput,
      fetchDataFromApiSearchCatchphrase,
      isFavoriteSongActive,
      onFavoriteSongSearchInput,
      fetchDataFromApiSearchFavoriteSong,
      isStyle1Active,
      onStyle1SearchInput,
      fetchDataFromApiSearchStyle1,
      isStyle2Active,
      onStyle2SearchInput,
      fetchDataFromApiSearchStyle2,
      isColor1Active,
      onColor1SearchInput,
      fetchDataFromApiSearchColor1,
      isColor2Active,
      onColor2SearchInput,
      fetchDataFromApiSearchColor2,
      isWallpaperActive,
      onWallpaperSearchInput,
      fetchDataFromApiSearchWallpaper,
      isFlooringActive,
      onFlooringSearchInput,
      fetchDataFromApiSearchFlooring,
    };
  }
};
</script>

<style scoped>
.content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.back-to-home {
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
