
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material1列 -->
        <el-table-column prop="numberOfMaterial1" label="Number Of Material1">
          <template #header>
            Number Of Material1
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial1 }}</span>
          </template>
        </el-table-column>

        <!-- Material1列 -->
        <el-table-column prop="material1" label="Material1">
          <template #header>
            Material1
          </template>
          <template #default="{ row }">
            <span>{{ row.material1 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material2列 -->
        <el-table-column prop="numberOfMaterial2" label="Number Of Material2">
          <template #header>
            Number Of Material2
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial2 }}</span>
          </template>
        </el-table-column>

        <!-- Material2列 -->
        <el-table-column prop="material2" label="Material2">
          <template #header>
            Material2
          </template>
          <template #default="{ row }">
            <span>{{ row.material2 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material3列 -->
        <el-table-column prop="numberOfMaterial3" label="Number Of Material3">
          <template #header>
            Number Of Material3
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial3 }}</span>
          </template>
        </el-table-column>

        <!-- Material3列 -->
        <el-table-column prop="material3" label="Material3">
          <template #header>
            Material3
          </template>
          <template #default="{ row }">
            <span>{{ row.material3 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material4列 -->
        <el-table-column prop="numberOfMaterial4" label="Number Of Material4">
          <template #header>
            Number Of Material4
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial4 }}</span>
          </template>
        </el-table-column>

        <!-- Material4列 -->
        <el-table-column prop="material4" label="Material4">
          <template #header>
            Material4
          </template>
          <template #default="{ row }">
            <span>{{ row.material4 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material5列 -->
        <el-table-column prop="numberOfMaterial5" label="Number Of Material5">
          <template #header>
            Number Of Material5
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial5 }}</span>
          </template>
        </el-table-column>

        <!-- Material5列 -->
        <el-table-column prop="material5" label="Material5">
          <template #header>
            Material5
          </template>
          <template #default="{ row }">
            <span>{{ row.material5 }}</span>
          </template>
        </el-table-column>

        <!-- Number Of Material6列 -->
        <el-table-column prop="numberOfMaterial6" label="Number Of Material6">
          <template #header>
            Number Of Material6
          </template>
          <template #default="{ row }">
            <span>{{ row.numberOfMaterial6 }}</span>
          </template>
        </el-table-column>

        <!-- Material6列 -->
        <el-table-column prop="material6" label="Material6">
          <template #header>
            Material6
          </template>
          <template #default="{ row }">
            <span>{{ row.material6 }}</span>
          </template>
        </el-table-column>

        <!-- Recipes To Unlock列 -->
        <el-table-column prop="recipesToUnlock" label="Recipes To Unlock">
          <template #header>
            Recipes To Unlock
          </template>
          <template #default="{ row }">
            <span>{{ row.recipesToUnlock }}</span>
          </template>
        </el-table-column>

        <!-- Category列 -->
        <el-table-column prop="category" label="Category">
          <template #header>
            Category
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
