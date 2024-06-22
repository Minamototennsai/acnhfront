
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">


      <h2>
        Achievements
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isInternalCategoryActive || isSequentialActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isInternalCategoryActive || isSequentialActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Award Criteria列 -->
        <el-table-column prop="awardCriteria" label="Award Criteria">
          <template #header>
            Award Criteria
          </template>
          <template #default="{ row }">
            <span>{{ row.awardCriteria }}</span>
          </template>
        </el-table-column>

        <!-- Internal Category列 -->
        <el-table-column prop="internalCategory" label="Internal Category">
          <template #header>
            <div>
              Internal Category
              <el-select v-model="searchInputs.internalCategory" placeholder="Select" @change="() => {onInternalCategorySearchInput('internalCategory'); search()}" :disabled="isIdActive || isNameActive || isSequentialActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Communication" value="Communication"></el-option>        
              <el-option label="DIY" value="DIY"></el-option>        
              <el-option label="Event" value="Event"></el-option>        
              <el-option label="Fish" value="Fish"></el-option>        
              <el-option label="HHA" value="HHA"></el-option>        
              <el-option label="Insect" value="Insect"></el-option>        
              <el-option label="LandMaking" value="LandMaking"></el-option>        
              <el-option label="Money" value="Money"></el-option>        
              <el-option label="MyDesign" value="MyDesign"></el-option>        
              <el-option label="Negative" value="Negative"></el-option>        
              <el-option label="Plant" value="Plant"></el-option>        
              <el-option label="Smartphone" value="Smartphone"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.internalCategory }}</span>
          </template>
        </el-table-column>

        <!-- Num Of Tiers列 -->
        <el-table-column prop="numOfTiers" label="Num Of Tiers">
          <template #header>
            Num Of Tiers
          </template>
          <template #default="{ row }">
            <span>{{ row.numOfTiers }}</span>
          </template>
        </el-table-column>

        <!-- Tier1列 -->
        <el-table-column prop="tier1" label="Tier1">
          <template #header>
            Tier1
          </template>
          <template #default="{ row }">
            <span>{{ row.tier1 }}</span>
          </template>
        </el-table-column>

        <!-- Tier2列 -->
        <el-table-column prop="tier2" label="Tier2">
          <template #header>
            Tier2
          </template>
          <template #default="{ row }">
            <span>{{ row.tier2 }}</span>
          </template>
        </el-table-column>

        <!-- Tier3列 -->
        <el-table-column prop="tier3" label="Tier3">
          <template #header>
            Tier3
          </template>
          <template #default="{ row }">
            <span>{{ row.tier3 }}</span>
          </template>
        </el-table-column>

        <!-- Tier4列 -->
        <el-table-column prop="tier4" label="Tier4">
          <template #header>
            Tier4
          </template>
          <template #default="{ row }">
            <span>{{ row.tier4 }}</span>
          </template>
        </el-table-column>

        <!-- Tier5列 -->
        <el-table-column prop="tier5" label="Tier5">
          <template #header>
            Tier5
          </template>
          <template #default="{ row }">
            <span>{{ row.tier5 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier1列 -->
        <el-table-column prop="rewardTier1" label="Reward Tier1">
          <template #header>
            Reward Tier1
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier1 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier2列 -->
        <el-table-column prop="rewardTier2" label="Reward Tier2">
          <template #header>
            Reward Tier2
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier2 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier3列 -->
        <el-table-column prop="rewardTier3" label="Reward Tier3">
          <template #header>
            Reward Tier3
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier3 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier4列 -->
        <el-table-column prop="rewardTier4" label="Reward Tier4">
          <template #header>
            Reward Tier4
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier4 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier5列 -->
        <el-table-column prop="rewardTier5" label="Reward Tier5">
          <template #header>
            Reward Tier5
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier5 }}</span>
          </template>
        </el-table-column>

        <!-- Reward Tier6列 -->
        <el-table-column prop="rewardTier6" label="Reward Tier6">
          <template #header>
            Reward Tier6
          </template>
          <template #default="{ row }">
            <span>{{ row.rewardTier6 }}</span>
          </template>
        </el-table-column>

        <!-- Sequential列 -->
        <el-table-column prop="sequential" label="Sequential">
          <template #header>
            <div>
              Sequential
              <el-select v-model="searchInputs.sequential" placeholder="Select" @change="() => {onSequentialSearchInput('sequential'); search()}" :disabled="isIdActive || isNameActive || isInternalCategoryActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>
              <el-option label="No" value="No"></el-option>
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.sequential }}</span>
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
      internalCategory: '',
      sequential: '',
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
    const isInternalCategoryActive = ref(false);
    const isSequentialActive = ref(false);

    
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

    // 组件创建时从/api/achievements接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/achievements接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/achievements').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/achievements/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/achievements/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/achievements/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/achievements/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/achievements/searchInternalCategory接口获取搜索数据
    const fetchDataFromApiSearchInternalCategory = (query) => {
      axios.get(`/api/achievements/searchInternalCategory?internalCategory=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/achievements/searchSequential接口获取搜索数据
    const fetchDataFromApiSearchSequential = (query) => {
      axios.get(`/api/achievements/searchSequential?sequential=${query}`).then(response => {
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

    const onInternalCategorySearchInput = (column) => {
      if (column === 'internalCategory' && searchInputs.value.internalCategory) {
        isInternalCategoryActive.value = true;
      } else if (!searchInputs.value.internalCategory) {
        isInternalCategoryActive.value = false;
      }
    };

    const onSequentialSearchInput = (column) => {
      if (column === 'sequential' && searchInputs.value.sequential) {
        isSequentialActive.value = true;
      } else if (!searchInputs.value.sequential) {
        isSequentialActive.value = false;
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

      // 处理 internalCategory 列的搜索
      else if (searchInputs.value.internalCategory) {
        fetchDataFromApiSearchInternalCategory(searchInputs.value.internalCategory);
      }

      // 处理 sequential 列的搜索
      else if (searchInputs.value.sequential) {
        fetchDataFromApiSearchSequential(searchInputs.value.sequential);
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
      isInternalCategoryActive.value = false;
      isSequentialActive.value = false;

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
      isInternalCategoryActive,
      onInternalCategorySearchInput,
      fetchDataFromApiSearchInternalCategory,
      isSequentialActive,
      onSequentialSearchInput,
      fetchDataFromApiSearchSequential,
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
