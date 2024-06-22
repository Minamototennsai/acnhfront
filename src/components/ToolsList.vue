
<template>
  <div>
    <div class="back-to-home">
      <router-link to="/" class="home-link">返回主页</router-link>
    </div>
    
    <div class="content">

      <h2>按名称搜索DIY所需材料</h2>
      <div>
        <!-- 搜索表单 -->
        <el-form :inline="true" @submit.prevent="findMaterials" style="display: flex; align-items: center;">
          <el-form-item style="margin-right: 10px;">
            <el-button type="primary" @click="findMaterials">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-input v-model="materials" @keyup.enter="findMaterials"></el-input>
          </el-form-item>
        </el-form>
        <div v-if="materialslist.length && materials.length">
          <h3>材料信息:</h3>
          <ul class="materials-list">
            <li v-for="tools in materialslist" :key="tools.id" class="materials-item">
              <p>{{ tools.name }} : {{ tools.numberOfMaterial1 }} {{ tools.material1 }} {{ tools.numberOfMaterial2 }} {{ tools.material2 }} {{ tools.numberOfMaterial3 }} {{ tools.material3 }} {{ tools.numberOfMaterial4 }} {{ tools.material4 }} {{ tools.numberOfMaterial5 }} {{ tools.material5 }} {{ tools.numberOfMaterial6 }} {{ tools.material6 }}</p >
            </li>
          </ul>
        </div>
        <div v-else-if="searched">
          <h3>未找到该物品</h3>
        </div>
      </div>


      <h2>
        Tools
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Variation列 -->
        <el-table-column prop="variation" label="Variation">
          <template #header>
            <div>
              Variation
              <el-input v-model="searchInputs.variation" placeholder="Search in Variation" @input="onVariationSearchInput('variation')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.variation }}</span>
          </template>
        </el-table-column>

        <!-- Body Title列 -->
        <el-table-column prop="bodyTitle" label="Body Title">
          <template #header>
            <div>
              Body Title
              <el-input v-model="searchInputs.bodyTitle" placeholder="Search in Body Title" @input="onBodyTitleSearchInput('bodyTitle')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.bodyTitle }}</span>
          </template>
        </el-table-column>

        <!-- Diy列 -->
        <el-table-column prop="diy" label="Diy">
          <template #header>
            <div>
              Diy
              <el-select v-model="searchInputs.diy" placeholder="Select" @change="() => {onDiySearchInput('diy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.diy }}</span>
          </template>
        </el-table-column>

        <!-- Customize列 -->
        <el-table-column prop="customize" label="Customize">
          <template #header>
            <div>
              Customize
              <el-select v-model="searchInputs.customize" placeholder="Select" @change="() => {onCustomizeSearchInput('customize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.customize }}</span>
          </template>
        </el-table-column>

        <!-- Kit Cost列 -->
        <el-table-column prop="kitCost" label="Kit Cost">
          <template #header>
            <div>
              Kit Cost
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_min" placeholder="Min" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_max" placeholder="Max" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-select v-model="searchInputs.kitCost_sort" placeholder="Sort" @change="() => {onKitCostSearchInput('kitCost'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.kitCost }}</span>
          </template>
        </el-table-column>

        <!-- Uses列 -->
        <el-table-column prop="uses" label="Uses">
          <template #header>
            <div>
              Uses
              <el-select v-model="searchInputs.uses" placeholder="Select" @change="() => {onUsesSearchInput('uses'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>
              <el-option label="3" value="3"></el-option>        
              <el-option label="9.5" value="9.5"></el-option>        
              <el-option label="10" value="10"></el-option>        
              <el-option label="20" value="20"></el-option>        
              <el-option label="30" value="30"></el-option>        
              <el-option label="40" value="40"></el-option>        
              <el-option label="60" value="60"></el-option>        
              <el-option label="90" value="90"></el-option>        
              <el-option label="100" value="100"></el-option>        
              <el-option label="180" value="180"></el-option>        
              <el-option label="200" value="200"></el-option>        
              <el-option label="Unlimited" value="Unlimited"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.uses }}</span>
          </template>
        </el-table-column>

        <!-- Stack Size列 -->
        <el-table-column prop="stackSize" label="Stack Size">
          <template #header>
            <div>
              Stack Size
              <el-select v-model="searchInputs.stackSize" placeholder="Select" @change="() => {onStackSizeSearchInput('stackSize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>
              <el-option label="10" value="10"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.stackSize }}</span>
          </template>
        </el-table-column>

        <!-- Buy列 -->
        <el-table-column prop="buy" label="Buy">
          <template #header>
            <div>
              Buy
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_min" placeholder="Min" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_max" placeholder="Max" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-select v-model="searchInputs.buy_sort" placeholder="Sort" @change="() => {onBuySearchInput('buy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isSellActive || isToolSetActive || isMilesPriceActive || isSourceActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isToolSetActive || isMilesPriceActive || isSourceActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isToolSetActive || isMilesPriceActive || isSourceActive">
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

        <!-- Tool Set列 -->
        <el-table-column prop="toolSet" label="Tool Set">
          <template #header>
            <div>
              Tool Set
              <el-select v-model="searchInputs.toolSet" placeholder="Select" @change="() => {onToolSetSearchInput('toolSet'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isMilesPriceActive || isSourceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Colorful Tools" value="Colorful Tools"></el-option>        
              <el-option label="Outdoor Tools" value="Outdoor Tools"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.toolSet }}</span>
          </template>
        </el-table-column>

        <!-- Miles Price列 -->
        <el-table-column prop="milesPrice" label="Miles Price">
          <template #header>
            <div>
              Miles Price
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_min" placeholder="Min" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isSourceActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_max" placeholder="Max" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isSourceActive"></el-input>
                <el-select v-model="searchInputs.milesPrice_sort" placeholder="Sort" @change="() => {onMilesPriceSearchInput('milesPrice'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isSourceActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.milesPrice }}</span>
          </template>
        </el-table-column>

        <!-- Source列 -->
        <el-table-column prop="source" label="Source">
          <template #header>
            <div>
              Source
              <el-select v-model="searchInputs.source" placeholder="Select" @change="() => {onSourceSearchInput('source'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isDiyActive || isCustomizeActive || isKitCostActive || isUsesActive || isStackSizeActive || isBuyActive || isSellActive || isToolSetActive || isMilesPriceActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Bug-Off" value="Bug-Off"></el-option>        
              <el-option label="Fishing Tourney" value="Fishing Tourney"></el-option>        
              <el-option label="Isabelle" value="Isabelle"></el-option>        
              <el-option label="Nook's Cranny" value="Nook's Cranny"></el-option>        
              <el-option label="May Day Tour" value="May Day Tour"></el-option>        
              <el-option label="Nook Miles Shop" value="Nook Miles Shop"></el-option>        
              <el-option label="Crafting" value="Crafting"></el-option>        
              <el-option label="Wedding Season" value="Wedding Season"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.source }}</span>
          </template>
        </el-table-column>

        <!-- Source Notes列 -->
        <el-table-column prop="sourceNotes" label="Source Notes">
          <template #header>
            Source Notes
          </template>
          <template #default="{ row }">
            <span>{{ row.sourceNotes }}</span>
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

    // 查询材料
    const materials = ref('');
    const materialslist = ref([]);
    const searched = ref(false);
    const findMaterials = async () => {
      if (!materials.value) return;
      try {
        const params = {
          name: materials.value,
        };
        const response = await axios.get('/api/tools/materials', { params });
        materialslist.value = response.data;
        searched.value = true;
      } catch (error) {
        console.error('Error searching materials of:', error);
      }
    };

    // 搜索输入框的数据绑定
    const searchInputs = ref({
      id: '',
      name: '',
      variation: '',
      bodyTitle: '',
      diy: '',
      customize: '',
      kitCost_min: null,
      kitCost_max: null,
      kitCost_sort: '',
      uses: '',
      stackSize: '',
      buy_min: null,
      buy_max: null,
      buy_sort: '',
      sell_min: null,
      sell_max: null,
      sell_sort: '',
      toolSet: '',
      milesPrice_min: null,
      milesPrice_max: null,
      milesPrice_sort: '',
      source: '',
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
    const isVariationActive = ref(false);
    const isBodyTitleActive = ref(false);
    const isDiyActive = ref(false);
    const isCustomizeActive = ref(false);
    const isKitCostActive = ref(false);
    const isUsesActive = ref(false);
    const isStackSizeActive = ref(false);
    const isBuyActive = ref(false);
    const isSellActive = ref(false);
    const isToolSetActive = ref(false);
    const isMilesPriceActive = ref(false);
    const isSourceActive = ref(false);

    
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

    // 组件创建时从/api/tools接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/tools接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/tools').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/tools/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/tools/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/tools/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchVariation接口获取搜索数据
    const fetchDataFromApiSearchVariation = (query) => {
      axios.get(`/api/tools/searchVariation?variation=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchBodyTitle接口获取搜索数据
    const fetchDataFromApiSearchBodyTitle = (query) => {
      axios.get(`/api/tools/searchBodyTitle?bodyTitle=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchDiy接口获取搜索数据
    const fetchDataFromApiSearchDiy = (query) => {
      axios.get(`/api/tools/searchDiy?diy=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchCustomize接口获取搜索数据
    const fetchDataFromApiSearchCustomize = (query) => {
      axios.get(`/api/tools/searchCustomize?customize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchKitCost接口获取搜索数据
    const fetchDataFromApiSearchKitCost = (min, max, sort) => {
      axios.get(`/api/tools/searchKitCost?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchUses接口获取搜索数据
    const fetchDataFromApiSearchUses = (query) => {
      axios.get(`/api/tools/searchUses?uses=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchStackSize接口获取搜索数据
    const fetchDataFromApiSearchStackSize = (query) => {
      axios.get(`/api/tools/searchStackSize?stackSize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchBuy接口获取搜索数据
    const fetchDataFromApiSearchBuy = (min, max, sort) => {
      axios.get(`/api/tools/searchBuy?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/tools/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchToolSet接口获取搜索数据
    const fetchDataFromApiSearchToolSet = (query) => {
      axios.get(`/api/tools/searchToolSet?toolSet=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchMilesPrice接口获取搜索数据
    const fetchDataFromApiSearchMilesPrice = (min, max, sort) => {
      axios.get(`/api/tools/searchMilesPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/tools/searchSource接口获取搜索数据
    const fetchDataFromApiSearchSource = (query) => {
      axios.get(`/api/tools/searchSource?source=${query}`).then(response => {
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

    const onVariationSearchInput = (column) => {
      if (column === 'variation' && searchInputs.value.variation) {
        isVariationActive.value = true;
      } else if (!searchInputs.value.variation) {
        isVariationActive.value = false;
      }
    };

    const onBodyTitleSearchInput = (column) => {
      if (column === 'bodyTitle' && searchInputs.value.bodyTitle) {
        isBodyTitleActive.value = true;
      } else if (!searchInputs.value.bodyTitle) {
        isBodyTitleActive.value = false;
      }
    };

    const onDiySearchInput = (column) => {
      if (column === 'diy' && searchInputs.value.diy) {
        isDiyActive.value = true;
      } else if (!searchInputs.value.diy) {
        isDiyActive.value = false;
      }
    };

    const onCustomizeSearchInput = (column) => {
      if (column === 'customize' && searchInputs.value.customize) {
        isCustomizeActive.value = true;
      } else if (!searchInputs.value.customize) {
        isCustomizeActive.value = false;
      }
    };

    const onKitCostSearchInput = (column) => {
      if (column === 'kitCost') {
        if (searchInputs.value.kitCost_min ||
          searchInputs.value.kitCost_max ||
          searchInputs.value.kitCost_sort) {
          isKitCostActive.value = true;
        } else {
          isKitCostActive.value = false;
        }
      }
    };

    const onUsesSearchInput = (column) => {
      if (column === 'uses' && searchInputs.value.uses) {
        isUsesActive.value = true;
      } else if (!searchInputs.value.uses) {
        isUsesActive.value = false;
      }
    };

    const onStackSizeSearchInput = (column) => {
      if (column === 'stackSize' && searchInputs.value.stackSize) {
        isStackSizeActive.value = true;
      } else if (!searchInputs.value.stackSize) {
        isStackSizeActive.value = false;
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

    const onToolSetSearchInput = (column) => {
      if (column === 'toolSet' && searchInputs.value.toolSet) {
        isToolSetActive.value = true;
      } else if (!searchInputs.value.toolSet) {
        isToolSetActive.value = false;
      }
    };

    const onMilesPriceSearchInput = (column) => {
      if (column === 'milesPrice') {
        if (searchInputs.value.milesPrice_min ||
          searchInputs.value.milesPrice_max ||
          searchInputs.value.milesPrice_sort) {
          isMilesPriceActive.value = true;
        } else {
          isMilesPriceActive.value = false;
        }
      }
    };

    const onSourceSearchInput = (column) => {
      if (column === 'source' && searchInputs.value.source) {
        isSourceActive.value = true;
      } else if (!searchInputs.value.source) {
        isSourceActive.value = false;
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

      // 处理 variation 列的搜索
      else if (searchInputs.value.variation) {
        fetchDataFromApiSearchVariation(searchInputs.value.variation);
      }

      // 处理 bodyTitle 列的搜索
      else if (searchInputs.value.bodyTitle) {
        fetchDataFromApiSearchBodyTitle(searchInputs.value.bodyTitle);
      }

      // 处理 diy 列的搜索
      else if (searchInputs.value.diy) {
        fetchDataFromApiSearchDiy(searchInputs.value.diy);
      }

      // 处理 customize 列的搜索
      else if (searchInputs.value.customize) {
        fetchDataFromApiSearchCustomize(searchInputs.value.customize);
      }

      // 处理 kitCost 列的搜索
      else if (searchInputs.value.kitCost_min || searchInputs.value.kitCost_max || searchInputs.value.kitCost_sort ) {
        const min = searchInputs.value.kitCost_min !== null ? searchInputs.value.kitCost_min : '';
        const max = searchInputs.value.kitCost_max !== null ? searchInputs.value.kitCost_max : '';
        const sort = searchInputs.value.kitCost_sort !== null ? searchInputs.value.kitCost_sort : '';
        fetchDataFromApiSearchKitCost(min, max, sort);
      }

      // 处理 uses 列的搜索
      else if (searchInputs.value.uses) {
        fetchDataFromApiSearchUses(searchInputs.value.uses);
      }

      // 处理 stackSize 列的搜索
      else if (searchInputs.value.stackSize) {
        fetchDataFromApiSearchStackSize(searchInputs.value.stackSize);
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

      // 处理 toolSet 列的搜索
      else if (searchInputs.value.toolSet) {
        fetchDataFromApiSearchToolSet(searchInputs.value.toolSet);
      }

      // 处理 milesPrice 列的搜索
      else if (searchInputs.value.milesPrice_min || searchInputs.value.milesPrice_max || searchInputs.value.milesPrice_sort ) {
        const min = searchInputs.value.milesPrice_min !== null ? searchInputs.value.milesPrice_min : '';
        const max = searchInputs.value.milesPrice_max !== null ? searchInputs.value.milesPrice_max : '';
        const sort = searchInputs.value.milesPrice_sort !== null ? searchInputs.value.milesPrice_sort : '';
        fetchDataFromApiSearchMilesPrice(min, max, sort);
      }

      // 处理 source 列的搜索
      else if (searchInputs.value.source) {
        fetchDataFromApiSearchSource(searchInputs.value.source);
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
      isVariationActive.value = false;
      isBodyTitleActive.value = false;
      isDiyActive.value = false;
      isCustomizeActive.value = false;
      isKitCostActive.value = false;
      searchInputs.value.kitCost_min = null;
      searchInputs.value.kitCost_max = null;
      isUsesActive.value = false;
      isStackSizeActive.value = false;
      isBuyActive.value = false;
      searchInputs.value.buy_min = null;
      searchInputs.value.buy_max = null;
      isSellActive.value = false;
      searchInputs.value.sell_min = null;
      searchInputs.value.sell_max = null;
      isToolSetActive.value = false;
      isMilesPriceActive.value = false;
      searchInputs.value.milesPrice_min = null;
      searchInputs.value.milesPrice_max = null;
      isSourceActive.value = false;

      fetchAllData();
    };
    
    // 处理分页切换事件
    const handlePageChange = (page) => {
      currentPage.value = page;
    };
    
    // 函数返回值
    return {

      materials,
      materialslist,
      findMaterials,
      searched,

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
      isVariationActive,
      onVariationSearchInput,
      fetchDataFromApiSearchVariation,
      isBodyTitleActive,
      onBodyTitleSearchInput,
      fetchDataFromApiSearchBodyTitle,
      isDiyActive,
      onDiySearchInput,
      fetchDataFromApiSearchDiy,
      isCustomizeActive,
      onCustomizeSearchInput,
      fetchDataFromApiSearchCustomize,
      isKitCostActive,
      onKitCostSearchInput,
      fetchDataFromApiSearchKitCost,
      isUsesActive,
      onUsesSearchInput,
      fetchDataFromApiSearchUses,
      isStackSizeActive,
      onStackSizeSearchInput,
      fetchDataFromApiSearchStackSize,
      isBuyActive,
      onBuySearchInput,
      fetchDataFromApiSearchBuy,
      isSellActive,
      onSellSearchInput,
      fetchDataFromApiSearchSell,
      isToolSetActive,
      onToolSetSearchInput,
      fetchDataFromApiSearchToolSet,
      isMilesPriceActive,
      onMilesPriceSearchInput,
      fetchDataFromApiSearchMilesPrice,
      isSourceActive,
      onSourceSearchInput,
      fetchDataFromApiSearchSource,
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
