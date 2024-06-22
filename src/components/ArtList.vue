
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">


      <h2>
        Art
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Genuine列 -->
        <el-table-column prop="genuine" label="Genuine">
          <template #header>
            <div>
              Genuine
              <el-select v-model="searchInputs.genuine" placeholder="Select" @change="() => {onGenuineSearchInput('genuine'); search()}" :disabled="isIdActive || isNameActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.genuine }}</span>
          </template>
        </el-table-column>

        <!-- Category列 -->
        <el-table-column prop="category" label="Category">
          <template #header>
            <div>
              Category
              <el-select v-model="searchInputs.category" placeholder="Select" @change="() => {onCategorySearchInput('category'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Housewares" value="Housewares"></el-option>        
              <el-option label="Miscellaneous" value="Miscellaneous"></el-option>        
              <el-option label="Wall-mounted" value="Wall-mounted"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.category }}</span>
          </template>
        </el-table-column>

        <!-- Buy列 -->
        <el-table-column prop="buy" label="Buy">
          <template #header>
            <div>
              Buy
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_min" placeholder="Min" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_max" placeholder="Max" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
                <el-select v-model="searchInputs.buy_sort" placeholder="Sort" @change="() => {onBuySearchInput('buy'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.buy }}</span>
          </template>
        </el-table-column>

        <!-- Sell列 -->
        <el-table-column prop="sell" label="Sell">
          <template #header>
            <div>
              Sell
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
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

        <!-- Size列 -->
        <el-table-column prop="size" label="Size">
          <template #header>
            <div>
              Size
              <el-select v-model="searchInputs.size" placeholder="Select" @change="() => {onSizeSearchInput('size'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="1x1" value="1x1"></el-option>        
              <el-option label="1x2" value="1x2"></el-option>        
              <el-option label="2x1" value="2x1"></el-option>        
              <el-option label="2x1.5" value="2x1.5"></el-option>        
              <el-option label="2x2" value="2x2"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.size }}</span>
          </template>
        </el-table-column>

        <!-- Real Artwork Title列 -->
        <el-table-column prop="realArtworkTitle" label="Real Artwork Title">
          <template #header>
            Real Artwork Title
          </template>
          <template #default="{ row }">
            <span>{{ row.realArtworkTitle }}</span>
          </template>
        </el-table-column>

        <!-- Artist列 -->
        <el-table-column prop="artist" label="Artist">
          <template #header>
            Artist
          </template>
          <template #default="{ row }">
            <span>{{ row.artist }}</span>
          </template>
        </el-table-column>

        <!-- Museum Description列 -->
        <el-table-column prop="museumDescription" label="Museum Description">
          <template #header>
            Museum Description
          </template>
          <template #default="{ row }">
            <span>{{ row.museumDescription }}</span>
          </template>
        </el-table-column>

        <!-- Hha Concept1列 -->
        <el-table-column prop="hhaConcept1" label="Hha Concept1">
          <template #header>
            <div>
              Hha Concept1
              <el-select v-model="searchInputs.hhaConcept1" placeholder="Select" @change="() => {onHhaConcept1SearchInput('hhaConcept1'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept2Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="expensive" value="expensive"></el-option>        
              <el-option label="horror" value="horror"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaConcept1 }}</span>
          </template>
        </el-table-column>

        <!-- Hha Concept2列 -->
        <el-table-column prop="hhaConcept2" label="Hha Concept2">
          <template #header>
            <div>
              Hha Concept2
              <el-select v-model="searchInputs.hhaConcept2" placeholder="Select" @change="() => {onHhaConcept2SearchInput('hhaConcept2'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="facility" value="facility"></el-option>        
              <el-option label="folk art" value="folk art"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaConcept2 }}</span>
          </template>
        </el-table-column>

        <!-- Tag列 -->
        <el-table-column prop="tag" label="Tag">
          <template #header>
            <div>
              Tag
              <el-select v-model="searchInputs.tag" placeholder="Select" @change="() => {onTagSearchInput('tag'); search()}" :disabled="isIdActive || isNameActive || isGenuineActive || isCategoryActive || isBuyActive || isSellActive || isSizeActive || isHhaConcept1Active || isHhaConcept2Active">
              <el-option label="Null" value=""></el-option>
              <el-option label="Picture" value="Picture"></el-option>        
              <el-option label="Sculpture" value="Sculpture"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.tag }}</span>
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
      genuine: '',
      category: '',
      buy_min: null,
      buy_max: null,
      buy_sort: '',
      sell_min: null,
      sell_max: null,
      sell_sort: '',
      size: '',
      hhaConcept1: '',
      hhaConcept2: '',
      tag: '',
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
    const isGenuineActive = ref(false);
    const isCategoryActive = ref(false);
    const isBuyActive = ref(false);
    const isSellActive = ref(false);
    const isSizeActive = ref(false);
    const isHhaConcept1Active = ref(false);
    const isHhaConcept2Active = ref(false);
    const isTagActive = ref(false);

    
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

    // 组件创建时从/api/art接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/art接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/art').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/art/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/art/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/art/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchGenuine接口获取搜索数据
    const fetchDataFromApiSearchGenuine = (query) => {
      axios.get(`/api/art/searchGenuine?genuine=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchCategory接口获取搜索数据
    const fetchDataFromApiSearchCategory = (query) => {
      axios.get(`/api/art/searchCategory?category=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchBuy接口获取搜索数据
    const fetchDataFromApiSearchBuy = (min, max, sort) => {
      axios.get(`/api/art/searchBuy?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/art/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchSize接口获取搜索数据
    const fetchDataFromApiSearchSize = (query) => {
      axios.get(`/api/art/searchSize?size=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchHhaConcept1接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept1 = (query) => {
      axios.get(`/api/art/searchHhaConcept1?hhaConcept1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchHhaConcept2接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept2 = (query) => {
      axios.get(`/api/art/searchHhaConcept2?hhaConcept2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/art/searchTag接口获取搜索数据
    const fetchDataFromApiSearchTag = (query) => {
      axios.get(`/api/art/searchTag?tag=${query}`).then(response => {
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

    const onGenuineSearchInput = (column) => {
      if (column === 'genuine' && searchInputs.value.genuine) {
        isGenuineActive.value = true;
      } else if (!searchInputs.value.genuine) {
        isGenuineActive.value = false;
      }
    };

    const onCategorySearchInput = (column) => {
      if (column === 'category' && searchInputs.value.category) {
        isCategoryActive.value = true;
      } else if (!searchInputs.value.category) {
        isCategoryActive.value = false;
      }
    };

    const onBuySearchInput = (column) => {
      if (column === 'buy') {
        if (searchInputs.value.buy_min ||
          searchInputs.value.buy_max ||
          searchInputs.value.buy_sort) {
          isBuyActive.value = true;
        } else {
          isBuyActive.value = false;
        }
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

    const onSizeSearchInput = (column) => {
      if (column === 'size' && searchInputs.value.size) {
        isSizeActive.value = true;
      } else if (!searchInputs.value.size) {
        isSizeActive.value = false;
      }
    };

    const onHhaConcept1SearchInput = (column) => {
      if (column === 'hhaConcept1' && searchInputs.value.hhaConcept1) {
        isHhaConcept1Active.value = true;
      } else if (!searchInputs.value.hhaConcept1) {
        isHhaConcept1Active.value = false;
      }
    };

    const onHhaConcept2SearchInput = (column) => {
      if (column === 'hhaConcept2' && searchInputs.value.hhaConcept2) {
        isHhaConcept2Active.value = true;
      } else if (!searchInputs.value.hhaConcept2) {
        isHhaConcept2Active.value = false;
      }
    };

    const onTagSearchInput = (column) => {
      if (column === 'tag' && searchInputs.value.tag) {
        isTagActive.value = true;
      } else if (!searchInputs.value.tag) {
        isTagActive.value = false;
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

      // 处理 genuine 列的搜索
      else if (searchInputs.value.genuine) {
        fetchDataFromApiSearchGenuine(searchInputs.value.genuine);
      }

      // 处理 category 列的搜索
      else if (searchInputs.value.category) {
        fetchDataFromApiSearchCategory(searchInputs.value.category);
      }

      // 处理 buy 列的搜索
      else if (searchInputs.value.buy_min || searchInputs.value.buy_max || searchInputs.value.buy_sort ) {
        const min = searchInputs.value.buy_min !== null ? searchInputs.value.buy_min : '';
        const max = searchInputs.value.buy_max !== null ? searchInputs.value.buy_max : '';
        const sort = searchInputs.value.buy_sort !== null ? searchInputs.value.buy_sort : '';
        fetchDataFromApiSearchBuy(min, max, sort);
      }

      // 处理 sell 列的搜索
      else if (searchInputs.value.sell_min || searchInputs.value.sell_max || searchInputs.value.sell_sort ) {
        const min = searchInputs.value.sell_min !== null ? searchInputs.value.sell_min : '';
        const max = searchInputs.value.sell_max !== null ? searchInputs.value.sell_max : '';
        const sort = searchInputs.value.sell_sort !== null ? searchInputs.value.sell_sort : '';
        fetchDataFromApiSearchSell(min, max, sort);
      }

      // 处理 size 列的搜索
      else if (searchInputs.value.size) {
        fetchDataFromApiSearchSize(searchInputs.value.size);
      }

      // 处理 hhaConcept1 列的搜索
      else if (searchInputs.value.hhaConcept1) {
        fetchDataFromApiSearchHhaConcept1(searchInputs.value.hhaConcept1);
      }

      // 处理 hhaConcept2 列的搜索
      else if (searchInputs.value.hhaConcept2) {
        fetchDataFromApiSearchHhaConcept2(searchInputs.value.hhaConcept2);
      }

      // 处理 tag 列的搜索
      else if (searchInputs.value.tag) {
        fetchDataFromApiSearchTag(searchInputs.value.tag);
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
      isGenuineActive.value = false;
      isCategoryActive.value = false;
      isBuyActive.value = false;
      searchInputs.value.buy_min = null;
      searchInputs.value.buy_max = null;
      isSellActive.value = false;
      searchInputs.value.sell_min = null;
      searchInputs.value.sell_max = null;
      isSizeActive.value = false;
      isHhaConcept1Active.value = false;
      isHhaConcept2Active.value = false;
      isTagActive.value = false;

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
      isGenuineActive,
      onGenuineSearchInput,
      fetchDataFromApiSearchGenuine,
      isCategoryActive,
      onCategorySearchInput,
      fetchDataFromApiSearchCategory,
      isBuyActive,
      onBuySearchInput,
      fetchDataFromApiSearchBuy,
      isSellActive,
      onSellSearchInput,
      fetchDataFromApiSearchSell,
      isSizeActive,
      onSizeSearchInput,
      fetchDataFromApiSearchSize,
      isHhaConcept1Active,
      onHhaConcept1SearchInput,
      fetchDataFromApiSearchHhaConcept1,
      isHhaConcept2Active,
      onHhaConcept2SearchInput,
      fetchDataFromApiSearchHhaConcept2,
      isTagActive,
      onTagSearchInput,
      fetchDataFromApiSearchTag,
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
