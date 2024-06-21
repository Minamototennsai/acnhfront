
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">


      <h2>
        Sea_creatures
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isSellActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isSellActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Sell列 -->
        <el-table-column prop="sell" label="Sell">
          <template #header>
            <div>
              Sell
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.sell }}</span>
          </template>
        </el-table-column>

        <!-- Shadow列 -->
        <el-table-column prop="shadow" label="Shadow">
          <template #header>
            Shadow
          </template>
          <template #default="{ row }">
            <span>{{ row.shadow }}</span>
          </template>
        </el-table-column>

        <!-- Movement Speed列 -->
        <el-table-column prop="movementSpeed" label="Movement Speed">
          <template #header>
            Movement Speed
          </template>
          <template #default="{ row }">
            <span>{{ row.movementSpeed }}</span>
          </template>
        </el-table-column>

        <!-- Total Catches To Unlock列 -->
        <el-table-column prop="totalCatchesToUnlock" label="Total Catches To Unlock">
          <template #header>
            Total Catches To Unlock
          </template>
          <template #default="{ row }">
            <span>{{ row.totalCatchesToUnlock }}</span>
          </template>
        </el-table-column>

        <!-- Spawn Rates列 -->
        <el-table-column prop="spawnRates" label="Spawn Rates">
          <template #header>
            Spawn Rates
          </template>
          <template #default="{ row }">
            <span>{{ row.spawnRates }}</span>
          </template>
        </el-table-column>

        <!-- Nh Jan列 -->
        <el-table-column prop="nhJan" label="Nh Jan">
          <template #header>
            Nh Jan
          </template>
          <template #default="{ row }">
            <span>{{ row.nhJan }}</span>
          </template>
        </el-table-column>

        <!-- Nh Feb列 -->
        <el-table-column prop="nhFeb" label="Nh Feb">
          <template #header>
            Nh Feb
          </template>
          <template #default="{ row }">
            <span>{{ row.nhFeb }}</span>
          </template>
        </el-table-column>

        <!-- Nh Mar列 -->
        <el-table-column prop="nhMar" label="Nh Mar">
          <template #header>
            Nh Mar
          </template>
          <template #default="{ row }">
            <span>{{ row.nhMar }}</span>
          </template>
        </el-table-column>

        <!-- Nh Apr列 -->
        <el-table-column prop="nhApr" label="Nh Apr">
          <template #header>
            Nh Apr
          </template>
          <template #default="{ row }">
            <span>{{ row.nhApr }}</span>
          </template>
        </el-table-column>

        <!-- Nh May列 -->
        <el-table-column prop="nhMay" label="Nh May">
          <template #header>
            Nh May
          </template>
          <template #default="{ row }">
            <span>{{ row.nhMay }}</span>
          </template>
        </el-table-column>

        <!-- Nh Jun列 -->
        <el-table-column prop="nhJun" label="Nh Jun">
          <template #header>
            Nh Jun
          </template>
          <template #default="{ row }">
            <span>{{ row.nhJun }}</span>
          </template>
        </el-table-column>

        <!-- Nh Jul列 -->
        <el-table-column prop="nhJul" label="Nh Jul">
          <template #header>
            Nh Jul
          </template>
          <template #default="{ row }">
            <span>{{ row.nhJul }}</span>
          </template>
        </el-table-column>

        <!-- Nh Aug列 -->
        <el-table-column prop="nhAug" label="Nh Aug">
          <template #header>
            Nh Aug
          </template>
          <template #default="{ row }">
            <span>{{ row.nhAug }}</span>
          </template>
        </el-table-column>

        <!-- Nh Sep列 -->
        <el-table-column prop="nhSep" label="Nh Sep">
          <template #header>
            Nh Sep
          </template>
          <template #default="{ row }">
            <span>{{ row.nhSep }}</span>
          </template>
        </el-table-column>

        <!-- Nh Oct列 -->
        <el-table-column prop="nhOct" label="Nh Oct">
          <template #header>
            Nh Oct
          </template>
          <template #default="{ row }">
            <span>{{ row.nhOct }}</span>
          </template>
        </el-table-column>

        <!-- Nh Nov列 -->
        <el-table-column prop="nhNov" label="Nh Nov">
          <template #header>
            Nh Nov
          </template>
          <template #default="{ row }">
            <span>{{ row.nhNov }}</span>
          </template>
        </el-table-column>

        <!-- Nh Dec列 -->
        <el-table-column prop="nhDec" label="Nh Dec">
          <template #header>
            Nh Dec
          </template>
          <template #default="{ row }">
            <span>{{ row.nhDec }}</span>
          </template>
        </el-table-column>

        <!-- Sh Jan列 -->
        <el-table-column prop="shJan" label="Sh Jan">
          <template #header>
            Sh Jan
          </template>
          <template #default="{ row }">
            <span>{{ row.shJan }}</span>
          </template>
        </el-table-column>

        <!-- Sh Feb列 -->
        <el-table-column prop="shFeb" label="Sh Feb">
          <template #header>
            Sh Feb
          </template>
          <template #default="{ row }">
            <span>{{ row.shFeb }}</span>
          </template>
        </el-table-column>

        <!-- Sh Mar列 -->
        <el-table-column prop="shMar" label="Sh Mar">
          <template #header>
            Sh Mar
          </template>
          <template #default="{ row }">
            <span>{{ row.shMar }}</span>
          </template>
        </el-table-column>

        <!-- Sh Apr列 -->
        <el-table-column prop="shApr" label="Sh Apr">
          <template #header>
            Sh Apr
          </template>
          <template #default="{ row }">
            <span>{{ row.shApr }}</span>
          </template>
        </el-table-column>

        <!-- Sh May列 -->
        <el-table-column prop="shMay" label="Sh May">
          <template #header>
            Sh May
          </template>
          <template #default="{ row }">
            <span>{{ row.shMay }}</span>
          </template>
        </el-table-column>

        <!-- Sh Jun列 -->
        <el-table-column prop="shJun" label="Sh Jun">
          <template #header>
            Sh Jun
          </template>
          <template #default="{ row }">
            <span>{{ row.shJun }}</span>
          </template>
        </el-table-column>

        <!-- Sh Jul列 -->
        <el-table-column prop="shJul" label="Sh Jul">
          <template #header>
            Sh Jul
          </template>
          <template #default="{ row }">
            <span>{{ row.shJul }}</span>
          </template>
        </el-table-column>

        <!-- Sh Aug列 -->
        <el-table-column prop="shAug" label="Sh Aug">
          <template #header>
            Sh Aug
          </template>
          <template #default="{ row }">
            <span>{{ row.shAug }}</span>
          </template>
        </el-table-column>

        <!-- Sh Sep列 -->
        <el-table-column prop="shSep" label="Sh Sep">
          <template #header>
            Sh Sep
          </template>
          <template #default="{ row }">
            <span>{{ row.shSep }}</span>
          </template>
        </el-table-column>

        <!-- Sh Oct列 -->
        <el-table-column prop="shOct" label="Sh Oct">
          <template #header>
            Sh Oct
          </template>
          <template #default="{ row }">
            <span>{{ row.shOct }}</span>
          </template>
        </el-table-column>

        <!-- Sh Nov列 -->
        <el-table-column prop="shNov" label="Sh Nov">
          <template #header>
            Sh Nov
          </template>
          <template #default="{ row }">
            <span>{{ row.shNov }}</span>
          </template>
        </el-table-column>

        <!-- Sh Dec列 -->
        <el-table-column prop="shDec" label="Sh Dec">
          <template #header>
            Sh Dec
          </template>
          <template #default="{ row }">
            <span>{{ row.shDec }}</span>
          </template>
        </el-table-column>

        <!-- Surface列 -->
        <el-table-column prop="surface" label="Surface">
          <template #header>
            Surface
          </template>
          <template #default="{ row }">
            <span>{{ row.surface }}</span>
          </template>
        </el-table-column>

        <!-- Lighting Type列 -->
        <el-table-column prop="lightingType" label="Lighting Type">
          <template #header>
            Lighting Type
          </template>
          <template #default="{ row }">
            <span>{{ row.lightingType }}</span>
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
      sell_min: null,
      sell_max: null,
      sell_sort: '',
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
    const isSellActive = ref(false);

    
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

    // 组件创建时从/api/sea_creatures接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/sea_creatures接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/sea_creatures').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/sea_creatures/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/sea_creatures/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/sea_creatures/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/sea_creatures/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/sea_creatures/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/sea_creatures/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
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

    const onSellSearchInput = (column) => {
      if (column === 'sell') {
        if (searchInputs.value.sell_min ||
          searchInputs.value.sell_max ||
          searchInputs.value.sell_sort) {
          isSellActive.value = true;
        } else {
          isSellActive.value = false;
        }
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

      // 处理 sell 列的搜索
      else if (searchInputs.value.sell_min || searchInputs.value.sell_max || searchInputs.value.sell_sort ) {
        const min = searchInputs.value.sell_min !== null ? searchInputs.value.sell_min : '';
        const max = searchInputs.value.sell_max !== null ? searchInputs.value.sell_max : '';
        const sort = searchInputs.value.sell_sort !== null ? searchInputs.value.sell_sort : '';
        fetchDataFromApiSearchSell(min, max, sort);
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
      isSellActive.value = false;
      searchInputs.value.sell_min = null;
      searchInputs.value.sell_max = null;

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
      isSellActive,
      onSellSearchInput,
      fetchDataFromApiSearchSell,
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
