
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">


      <h2>
        Recipes
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material1列 -->
        <el-table-column prop="numberOfMaterial1" label="Number Of Material1">
          <template #header>
            <div>
              Number Of Material1
              <el-input v-model="searchInputs.numberOfMaterial1" placeholder="Search in Number Of Material1" @input="onNumberOfMaterial1SearchInput('numberOfMaterial1')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial1 }}</span>
          </template>
        </el-table-column>

        <!-- Material1列 -->
        <el-table-column prop="material1" label="Material1">
          <template #header>
            <div>
              Material1
              <el-input v-model="searchInputs.material1" placeholder="Search in Material1" @input="onMaterial1SearchInput('material1')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material1 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material2列 -->
        <el-table-column prop="numberOfMaterial2" label="Number Of Material2">
          <template #header>
            <div>
              Number Of Material2
              <el-input v-model="searchInputs.numberOfMaterial2" placeholder="Search in Number Of Material2" @input="onNumberOfMaterial2SearchInput('numberOfMaterial2')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial2 }}</span>
          </template>
        </el-table-column>

        <!-- Material2列 -->
        <el-table-column prop="material2" label="Material2">
          <template #header>
            <div>
              Material2
              <el-input v-model="searchInputs.material2" placeholder="Search in Material2" @input="onMaterial2SearchInput('material2')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material2 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material3列 -->
        <el-table-column prop="numberOfMaterial3" label="Number Of Material3">
          <template #header>
            <div>
              Number Of Material3
              <el-input v-model="searchInputs.numberOfMaterial3" placeholder="Search in Number Of Material3" @input="onNumberOfMaterial3SearchInput('numberOfMaterial3')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial3 }}</span>
          </template>
        </el-table-column>

        <!-- Material3列 -->
        <el-table-column prop="material3" label="Material3">
          <template #header>
            <div>
              Material3
              <el-input v-model="searchInputs.material3" placeholder="Search in Material3" @input="onMaterial3SearchInput('material3')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material3 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material4列 -->
        <el-table-column prop="numberOfMaterial4" label="Number Of Material4">
          <template #header>
            <div>
              Number Of Material4
              <el-input v-model="searchInputs.numberOfMaterial4" placeholder="Search in Number Of Material4" @input="onNumberOfMaterial4SearchInput('numberOfMaterial4')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial4 }}</span>
          </template>
        </el-table-column>

        <!-- Material4列 -->
        <el-table-column prop="material4" label="Material4">
          <template #header>
            <div>
              Material4
              <el-input v-model="searchInputs.material4" placeholder="Search in Material4" @input="onMaterial4SearchInput('material4')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material4 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material5列 -->
        <el-table-column prop="numberOfMaterial5" label="Number Of Material5">
          <template #header>
            <div>
              Number Of Material5
              <el-input v-model="searchInputs.numberOfMaterial5" placeholder="Search in Number Of Material5" @input="onNumberOfMaterial5SearchInput('numberOfMaterial5')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial5 }}</span>
          </template>
        </el-table-column>

        <!-- Material5列 -->
        <el-table-column prop="material5" label="Material5">
          <template #header>
            <div>
              Material5
              <el-input v-model="searchInputs.material5" placeholder="Search in Material5" @input="onMaterial5SearchInput('material5')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material5 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material6列 -->
        <el-table-column prop="numberOfMaterial6" label="Number Of Material6">
          <template #header>
            <div>
              Number Of Material6
              <el-input v-model="searchInputs.numberOfMaterial6" placeholder="Search in Number Of Material6" @input="onNumberOfMaterial6SearchInput('numberOfMaterial6')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial6 }}</span>
          </template>
        </el-table-column>

        <!-- Material6列 -->
        <el-table-column prop="material6" label="Material6">
          <template #header>
            <div>
              Material6
              <el-input v-model="searchInputs.material6" placeholder="Search in Material6" @input="onMaterial6SearchInput('material6')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isRecipesToUnlockActive || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.material6 }}</span>
          </template>
        </el-table-column>

        <!-- Recipes To Unlock列 -->
        <el-table-column prop="recipesToUnlock" label="Recipes To Unlock">
          <template #header>
            <div>
              Recipes To Unlock
              <el-input v-model="searchInputs.recipesToUnlock" placeholder="Search in Recipes To Unlock" @input="onRecipesToUnlockSearchInput('recipesToUnlock')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isCategoryActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.recipesToUnlock }}</span>
          </template>
        </el-table-column>

        <!-- Category列 -->
        <el-table-column prop="category" label="Category">
          <template #header>
            <div>
              Category
              <el-select v-model="searchInputs.category" placeholder="Select" @change="() => {onCategorySearchInput('category'); search()}" :disabled="isIdActive || isNameActive || isNumberOfMaterial1Active || isMaterial1Active || isNumberOfMaterial2Active || isMaterial2Active || isNumberOfMaterial3Active || isMaterial3Active || isNumberOfMaterial4Active || isMaterial4Active || isNumberOfMaterial5Active || isMaterial5Active || isNumberOfMaterial6Active || isMaterial6Active || isRecipesToUnlockActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Accessories" value="Accessories"></el-option>        
              <el-option label="Bags" value="Bags"></el-option>        
              <el-option label="Bottoms" value="Bottoms"></el-option>        
              <el-option label="Dresses" value="Dresses"></el-option>        
              <el-option label="Fencing" value="Fencing"></el-option>        
              <el-option label="Floors" value="Floors"></el-option>        
              <el-option label="Headwear" value="Headwear"></el-option>        
              <el-option label="Housewares" value="Housewares"></el-option>        
              <el-option label="Miscellaneous" value="Miscellaneous"></el-option>        
              <el-option label="Other" value="Other"></el-option>        
              <el-option label="Rugs" value="Rugs"></el-option>        
              <el-option label="Shoes" value="Shoes"></el-option>        
              <el-option label="Tools" value="Tools"></el-option>        
              <el-option label="Umbrellas" value="Umbrellas"></el-option>        
              <el-option label="Wall-mounted" value="Wall-mounted"></el-option>        
              <el-option label="Wallpaper" value="Wallpaper"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.category }}</span>
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
      numberOfMaterial1: '',
      material1: '',
      numberOfMaterial2: '',
      material2: '',
      numberOfMaterial3: '',
      material3: '',
      numberOfMaterial4: '',
      material4: '',
      numberOfMaterial5: '',
      material5: '',
      numberOfMaterial6: '',
      material6: '',
      recipesToUnlock: '',
      category: '',
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
    const isNumberOfMaterial1Active = ref(false);
    const isMaterial1Active = ref(false);
    const isNumberOfMaterial2Active = ref(false);
    const isMaterial2Active = ref(false);
    const isNumberOfMaterial3Active = ref(false);
    const isMaterial3Active = ref(false);
    const isNumberOfMaterial4Active = ref(false);
    const isMaterial4Active = ref(false);
    const isNumberOfMaterial5Active = ref(false);
    const isMaterial5Active = ref(false);
    const isNumberOfMaterial6Active = ref(false);
    const isMaterial6Active = ref(false);
    const isRecipesToUnlockActive = ref(false);
    const isCategoryActive = ref(false);

    
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

    // 组件创建时从/api/recipes接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/recipes接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/recipes').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/recipes/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/recipes/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/recipes/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial1接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial1 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial1?numberOfMaterial1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial1接口获取搜索数据
    const fetchDataFromApiSearchMaterial1 = (query) => {
      axios.get(`/api/recipes/searchMaterial1?material1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial2接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial2 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial2?numberOfMaterial2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial2接口获取搜索数据
    const fetchDataFromApiSearchMaterial2 = (query) => {
      axios.get(`/api/recipes/searchMaterial2?material2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial3接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial3 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial3?numberOfMaterial3=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial3接口获取搜索数据
    const fetchDataFromApiSearchMaterial3 = (query) => {
      axios.get(`/api/recipes/searchMaterial3?material3=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial4接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial4 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial4?numberOfMaterial4=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial4接口获取搜索数据
    const fetchDataFromApiSearchMaterial4 = (query) => {
      axios.get(`/api/recipes/searchMaterial4?material4=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial5接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial5 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial5?numberOfMaterial5=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial5接口获取搜索数据
    const fetchDataFromApiSearchMaterial5 = (query) => {
      axios.get(`/api/recipes/searchMaterial5?material5=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchNumberOfMaterial6接口获取搜索数据
    const fetchDataFromApiSearchNumberOfMaterial6 = (query) => {
      axios.get(`/api/recipes/searchNumberOfMaterial6?numberOfMaterial6=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchMaterial6接口获取搜索数据
    const fetchDataFromApiSearchMaterial6 = (query) => {
      axios.get(`/api/recipes/searchMaterial6?material6=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchRecipesToUnlock接口获取搜索数据
    const fetchDataFromApiSearchRecipesToUnlock = (query) => {
      axios.get(`/api/recipes/searchRecipesToUnlock?recipesToUnlock=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/recipes/searchCategory接口获取搜索数据
    const fetchDataFromApiSearchCategory = (query) => {
      axios.get(`/api/recipes/searchCategory?category=${query}`).then(response => {
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

    const onNumberOfMaterial1SearchInput = (column) => {
      if (column === 'numberOfMaterial1' && searchInputs.value.numberOfMaterial1) {
        isNumberOfMaterial1Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial1) {
        isNumberOfMaterial1Active.value = false;
      }
    };

    const onMaterial1SearchInput = (column) => {
      if (column === 'material1' && searchInputs.value.material1) {
        isMaterial1Active.value = true;
      } else if (!searchInputs.value.material1) {
        isMaterial1Active.value = false;
      }
    };

    const onNumberOfMaterial2SearchInput = (column) => {
      if (column === 'numberOfMaterial2' && searchInputs.value.numberOfMaterial2) {
        isNumberOfMaterial2Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial2) {
        isNumberOfMaterial2Active.value = false;
      }
    };

    const onMaterial2SearchInput = (column) => {
      if (column === 'material2' && searchInputs.value.material2) {
        isMaterial2Active.value = true;
      } else if (!searchInputs.value.material2) {
        isMaterial2Active.value = false;
      }
    };

    const onNumberOfMaterial3SearchInput = (column) => {
      if (column === 'numberOfMaterial3' && searchInputs.value.numberOfMaterial3) {
        isNumberOfMaterial3Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial3) {
        isNumberOfMaterial3Active.value = false;
      }
    };

    const onMaterial3SearchInput = (column) => {
      if (column === 'material3' && searchInputs.value.material3) {
        isMaterial3Active.value = true;
      } else if (!searchInputs.value.material3) {
        isMaterial3Active.value = false;
      }
    };

    const onNumberOfMaterial4SearchInput = (column) => {
      if (column === 'numberOfMaterial4' && searchInputs.value.numberOfMaterial4) {
        isNumberOfMaterial4Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial4) {
        isNumberOfMaterial4Active.value = false;
      }
    };

    const onMaterial4SearchInput = (column) => {
      if (column === 'material4' && searchInputs.value.material4) {
        isMaterial4Active.value = true;
      } else if (!searchInputs.value.material4) {
        isMaterial4Active.value = false;
      }
    };

    const onNumberOfMaterial5SearchInput = (column) => {
      if (column === 'numberOfMaterial5' && searchInputs.value.numberOfMaterial5) {
        isNumberOfMaterial5Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial5) {
        isNumberOfMaterial5Active.value = false;
      }
    };

    const onMaterial5SearchInput = (column) => {
      if (column === 'material5' && searchInputs.value.material5) {
        isMaterial5Active.value = true;
      } else if (!searchInputs.value.material5) {
        isMaterial5Active.value = false;
      }
    };

    const onNumberOfMaterial6SearchInput = (column) => {
      if (column === 'numberOfMaterial6' && searchInputs.value.numberOfMaterial6) {
        isNumberOfMaterial6Active.value = true;
      } else if (!searchInputs.value.numberOfMaterial6) {
        isNumberOfMaterial6Active.value = false;
      }
    };

    const onMaterial6SearchInput = (column) => {
      if (column === 'material6' && searchInputs.value.material6) {
        isMaterial6Active.value = true;
      } else if (!searchInputs.value.material6) {
        isMaterial6Active.value = false;
      }
    };

    const onRecipesToUnlockSearchInput = (column) => {
      if (column === 'recipesToUnlock' && searchInputs.value.recipesToUnlock) {
        isRecipesToUnlockActive.value = true;
      } else if (!searchInputs.value.recipesToUnlock) {
        isRecipesToUnlockActive.value = false;
      }
    };

    const onCategorySearchInput = (column) => {
      if (column === 'category' && searchInputs.value.category) {
        isCategoryActive.value = true;
      } else if (!searchInputs.value.category) {
        isCategoryActive.value = false;
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

      // 处理 numberOfMaterial1 列的搜索
      else if (searchInputs.value.numberOfMaterial1) {
        fetchDataFromApiSearchNumberOfMaterial1(searchInputs.value.numberOfMaterial1);
      }

      // 处理 material1 列的搜索
      else if (searchInputs.value.material1) {
        fetchDataFromApiSearchMaterial1(searchInputs.value.material1);
      }

      // 处理 numberOfMaterial2 列的搜索
      else if (searchInputs.value.numberOfMaterial2) {
        fetchDataFromApiSearchNumberOfMaterial2(searchInputs.value.numberOfMaterial2);
      }

      // 处理 material2 列的搜索
      else if (searchInputs.value.material2) {
        fetchDataFromApiSearchMaterial2(searchInputs.value.material2);
      }

      // 处理 numberOfMaterial3 列的搜索
      else if (searchInputs.value.numberOfMaterial3) {
        fetchDataFromApiSearchNumberOfMaterial3(searchInputs.value.numberOfMaterial3);
      }

      // 处理 material3 列的搜索
      else if (searchInputs.value.material3) {
        fetchDataFromApiSearchMaterial3(searchInputs.value.material3);
      }

      // 处理 numberOfMaterial4 列的搜索
      else if (searchInputs.value.numberOfMaterial4) {
        fetchDataFromApiSearchNumberOfMaterial4(searchInputs.value.numberOfMaterial4);
      }

      // 处理 material4 列的搜索
      else if (searchInputs.value.material4) {
        fetchDataFromApiSearchMaterial4(searchInputs.value.material4);
      }

      // 处理 numberOfMaterial5 列的搜索
      else if (searchInputs.value.numberOfMaterial5) {
        fetchDataFromApiSearchNumberOfMaterial5(searchInputs.value.numberOfMaterial5);
      }

      // 处理 material5 列的搜索
      else if (searchInputs.value.material5) {
        fetchDataFromApiSearchMaterial5(searchInputs.value.material5);
      }

      // 处理 numberOfMaterial6 列的搜索
      else if (searchInputs.value.numberOfMaterial6) {
        fetchDataFromApiSearchNumberOfMaterial6(searchInputs.value.numberOfMaterial6);
      }

      // 处理 material6 列的搜索
      else if (searchInputs.value.material6) {
        fetchDataFromApiSearchMaterial6(searchInputs.value.material6);
      }

      // 处理 recipesToUnlock 列的搜索
      else if (searchInputs.value.recipesToUnlock) {
        fetchDataFromApiSearchRecipesToUnlock(searchInputs.value.recipesToUnlock);
      }

      // 处理 category 列的搜索
      else if (searchInputs.value.category) {
        fetchDataFromApiSearchCategory(searchInputs.value.category);
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
      isNumberOfMaterial1Active.value = false;
      isMaterial1Active.value = false;
      isNumberOfMaterial2Active.value = false;
      isMaterial2Active.value = false;
      isNumberOfMaterial3Active.value = false;
      isMaterial3Active.value = false;
      isNumberOfMaterial4Active.value = false;
      isMaterial4Active.value = false;
      isNumberOfMaterial5Active.value = false;
      isMaterial5Active.value = false;
      isNumberOfMaterial6Active.value = false;
      isMaterial6Active.value = false;
      isRecipesToUnlockActive.value = false;
      isCategoryActive.value = false;

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
      isNumberOfMaterial1Active,
      onNumberOfMaterial1SearchInput,
      fetchDataFromApiSearchNumberOfMaterial1,
      isMaterial1Active,
      onMaterial1SearchInput,
      fetchDataFromApiSearchMaterial1,
      isNumberOfMaterial2Active,
      onNumberOfMaterial2SearchInput,
      fetchDataFromApiSearchNumberOfMaterial2,
      isMaterial2Active,
      onMaterial2SearchInput,
      fetchDataFromApiSearchMaterial2,
      isNumberOfMaterial3Active,
      onNumberOfMaterial3SearchInput,
      fetchDataFromApiSearchNumberOfMaterial3,
      isMaterial3Active,
      onMaterial3SearchInput,
      fetchDataFromApiSearchMaterial3,
      isNumberOfMaterial4Active,
      onNumberOfMaterial4SearchInput,
      fetchDataFromApiSearchNumberOfMaterial4,
      isMaterial4Active,
      onMaterial4SearchInput,
      fetchDataFromApiSearchMaterial4,
      isNumberOfMaterial5Active,
      onNumberOfMaterial5SearchInput,
      fetchDataFromApiSearchNumberOfMaterial5,
      isMaterial5Active,
      onMaterial5SearchInput,
      fetchDataFromApiSearchMaterial5,
      isNumberOfMaterial6Active,
      onNumberOfMaterial6SearchInput,
      fetchDataFromApiSearchNumberOfMaterial6,
      isMaterial6Active,
      onMaterial6SearchInput,
      fetchDataFromApiSearchMaterial6,
      isRecipesToUnlockActive,
      onRecipesToUnlockSearchInput,
      fetchDataFromApiSearchRecipesToUnlock,
      isCategoryActive,
      onCategorySearchInput,
      fetchDataFromApiSearchCategory,
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
