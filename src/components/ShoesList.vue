
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
            <li v-for="shoes in materialslist" :key="shoes.id" class="materials-item">
              <p>{{ shoes.name }} : {{ shoes.numberOfMaterial1 }} {{ shoes.material1 }} {{ shoes.numberOfMaterial2 }} {{ shoes.material2 }} {{ shoes.numberOfMaterial3 }} {{ shoes.material3 }} {{ shoes.numberOfMaterial4 }} {{ shoes.material4 }} {{ shoes.numberOfMaterial5 }} {{ shoes.material5 }} {{ shoes.numberOfMaterial6 }} {{ shoes.material6 }}</p >
            </li>
          </ul>
        </div>
        <div v-else-if="searched">
          <h3>未找到该物品</h3>
        </div>
      </div>


      <h2>
        Shoes
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
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
              <el-input v-model="searchInputs.variation" placeholder="Search in Variation" @input="onVariationSearchInput('variation')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.variation }}</span>
          </template>
        </el-table-column>

        <!-- Diy列 -->
        <el-table-column prop="diy" label="Diy">
          <template #header>
            <div>
              Diy
              <el-select v-model="searchInputs.diy" placeholder="Select" @change="() => {onDiySearchInput('diy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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

        <!-- Buy列 -->
        <el-table-column prop="buy" label="Buy">
          <template #header>
            <div>
              Buy
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_min" placeholder="Min" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_max" placeholder="Max" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.buy_sort" placeholder="Sort" @change="() => {onBuySearchInput('buy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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

        <!-- Color1列 -->
        <el-table-column prop="color1" label="Color1">
          <template #header>
            <div>
              Color1
              <el-select v-model="searchInputs.color1" placeholder="Select" @change="() => {onColor1SearchInput('color1'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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
              <el-select v-model="searchInputs.color2" placeholder="Select" @change="() => {onColor2SearchInput('color2'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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

        <!-- Miles Price列 -->
        <el-table-column prop="milesPrice" label="Miles Price">
          <template #header>
            <div>
              Miles Price
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_min" placeholder="Min" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_max" placeholder="Max" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.milesPrice_sort" placeholder="Sort" @change="() => {onMilesPriceSearchInput('milesPrice'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
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
              <el-select v-model="searchInputs.source" placeholder="Select" @change="() => {onSourceSearchInput('source'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Able Sisters" value="Able Sisters"></el-option>        
              <el-option label="Crafting" value="Crafting"></el-option>        
              <el-option label="Dodo Airlines" value="Dodo Airlines"></el-option>        
              <el-option label="Kicks" value="Kicks"></el-option>        
              <el-option label="Labelle" value="Labelle"></el-option>        
              <el-option label="Nook Miles Shop" value="Nook Miles Shop"></el-option>        
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

        <!-- Seasonal Availability列 -->
        <el-table-column prop="seasonalAvailability" label="Seasonal Availability">
          <template #header>
            <div>
              Seasonal Availability
              <el-select v-model="searchInputs.seasonalAvailability" placeholder="Select" @change="() => {onSeasonalAvailabilitySearchInput('seasonalAvailability'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="All Year" value="All Year"></el-option>        
              <el-option label="Summer" value="Summer"></el-option>        
              <el-option label="Winter" value="Winter"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.seasonalAvailability }}</span>
          </template>
        </el-table-column>

        <!-- Mannequin Piece列 -->
        <el-table-column prop="mannequinPiece" label="Mannequin Piece">
          <template #header>
            <div>
              Mannequin Piece
              <el-select v-model="searchInputs.mannequinPiece" placeholder="Select" @change="() => {onMannequinPieceSearchInput('mannequinPiece'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isStyleActive || isLabelThemesActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.mannequinPiece }}</span>
          </template>
        </el-table-column>

        <!-- Style列 -->
        <el-table-column prop="style" label="Style">
          <template #header>
            <div>
              Style
              <el-select v-model="searchInputs.style" placeholder="Select" @change="() => {onStyleSearchInput('style'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isLabelThemesActive || isCatalogActive">
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
            <span>{{ row.style }}</span>
          </template>
        </el-table-column>

        <!-- Label Themes列 -->
        <el-table-column prop="labelThemes" label="Label Themes">
          <template #header>
            <div>
              Label Themes
              <el-select v-model="searchInputs.labelThemes" placeholder="Select" @change="() => {onLabelThemesSearchInput('labelThemes'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="comfy" value="comfy"></el-option>        
              <el-option label="everyday" value="everyday"></el-option>        
              <el-option label="formal" value="formal"></el-option>        
              <el-option label="goth" value="goth"></el-option>        
              <el-option label="vacation" value="vacation"></el-option>        
              <el-option label="faity tale" value="faity tale"></el-option>        
              <el-option label="party" value="party"></el-option>        
              <el-option label="work" value="work"></el-option>        
              <el-option label="theatrical" value="theatrical"></el-option>        
              <el-option label="outdoorsy" value="outdoorsy"></el-option>        
              <el-option label="sporty" value="sporty"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.labelThemes }}</span>
          </template>
        </el-table-column>

        <!-- Catalog列 -->
        <el-table-column prop="catalog" label="Catalog">
          <template #header>
            <div>
              Catalog
              <el-select v-model="searchInputs.catalog" placeholder="Select" @change="() => {onCatalogSearchInput('catalog'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isSeasonalAvailabilityActive || isMannequinPieceActive || isStyleActive || isLabelThemesActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="For sale" value="For sale"></el-option>        
              <el-option label="Not for sale" value="Not for sale"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.catalog }}</span>
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
        const response = await axios.get('/api/shoes/materials', { params });
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
      diy: '',
      buy_min: null,
      buy_max: null,
      buy_sort: '',
      sell_min: null,
      sell_max: null,
      sell_sort: '',
      color1: '',
      color2: '',
      milesPrice_min: null,
      milesPrice_max: null,
      milesPrice_sort: '',
      source: '',
      seasonalAvailability: '',
      mannequinPiece: '',
      style: '',
      labelThemes: '',
      catalog: '',
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
    const isDiyActive = ref(false);
    const isBuyActive = ref(false);
    const isSellActive = ref(false);
    const isColor1Active = ref(false);
    const isColor2Active = ref(false);
    const isMilesPriceActive = ref(false);
    const isSourceActive = ref(false);
    const isSeasonalAvailabilityActive = ref(false);
    const isMannequinPieceActive = ref(false);
    const isStyleActive = ref(false);
    const isLabelThemesActive = ref(false);
    const isCatalogActive = ref(false);

    
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

    // 组件创建时从/api/shoes接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/shoes接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/shoes').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/shoes/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/shoes/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/shoes/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchVariation接口获取搜索数据
    const fetchDataFromApiSearchVariation = (query) => {
      axios.get(`/api/shoes/searchVariation?variation=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchDiy接口获取搜索数据
    const fetchDataFromApiSearchDiy = (query) => {
      axios.get(`/api/shoes/searchDiy?diy=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchBuy接口获取搜索数据
    const fetchDataFromApiSearchBuy = (min, max, sort) => {
      axios.get(`/api/shoes/searchBuy?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/shoes/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchColor1接口获取搜索数据
    const fetchDataFromApiSearchColor1 = (query) => {
      axios.get(`/api/shoes/searchColor1?color1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchColor2接口获取搜索数据
    const fetchDataFromApiSearchColor2 = (query) => {
      axios.get(`/api/shoes/searchColor2?color2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchMilesPrice接口获取搜索数据
    const fetchDataFromApiSearchMilesPrice = (min, max, sort) => {
      axios.get(`/api/shoes/searchMilesPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchSource接口获取搜索数据
    const fetchDataFromApiSearchSource = (query) => {
      axios.get(`/api/shoes/searchSource?source=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchSeasonalAvailability接口获取搜索数据
    const fetchDataFromApiSearchSeasonalAvailability = (query) => {
      axios.get(`/api/shoes/searchSeasonalAvailability?seasonalAvailability=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchMannequinPiece接口获取搜索数据
    const fetchDataFromApiSearchMannequinPiece = (query) => {
      axios.get(`/api/shoes/searchMannequinPiece?mannequinPiece=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchStyle接口获取搜索数据
    const fetchDataFromApiSearchStyle = (query) => {
      axios.get(`/api/shoes/searchStyle?style=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchLabelThemes接口获取搜索数据
    const fetchDataFromApiSearchLabelThemes = (query) => {
      axios.get(`/api/shoes/searchLabelThemes?labelThemes=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/shoes/searchCatalog接口获取搜索数据
    const fetchDataFromApiSearchCatalog = (query) => {
      axios.get(`/api/shoes/searchCatalog?catalog=${query}`).then(response => {
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

    const onDiySearchInput = (column) => {
      if (column === 'diy' && searchInputs.value.diy) {
        isDiyActive.value = true;
      } else if (!searchInputs.value.diy) {
        isDiyActive.value = false;
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

    const onSeasonalAvailabilitySearchInput = (column) => {
      if (column === 'seasonalAvailability' && searchInputs.value.seasonalAvailability) {
        isSeasonalAvailabilityActive.value = true;
      } else if (!searchInputs.value.seasonalAvailability) {
        isSeasonalAvailabilityActive.value = false;
      }
    };

    const onMannequinPieceSearchInput = (column) => {
      if (column === 'mannequinPiece' && searchInputs.value.mannequinPiece) {
        isMannequinPieceActive.value = true;
      } else if (!searchInputs.value.mannequinPiece) {
        isMannequinPieceActive.value = false;
      }
    };

    const onStyleSearchInput = (column) => {
      if (column === 'style' && searchInputs.value.style) {
        isStyleActive.value = true;
      } else if (!searchInputs.value.style) {
        isStyleActive.value = false;
      }
    };

    const onLabelThemesSearchInput = (column) => {
      if (column === 'labelThemes' && searchInputs.value.labelThemes) {
        isLabelThemesActive.value = true;
      } else if (!searchInputs.value.labelThemes) {
        isLabelThemesActive.value = false;
      }
    };

    const onCatalogSearchInput = (column) => {
      if (column === 'catalog' && searchInputs.value.catalog) {
        isCatalogActive.value = true;
      } else if (!searchInputs.value.catalog) {
        isCatalogActive.value = false;
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

      // 处理 diy 列的搜索
      else if (searchInputs.value.diy) {
        fetchDataFromApiSearchDiy(searchInputs.value.diy);
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

      // 处理 color1 列的搜索
      else if (searchInputs.value.color1) {
        fetchDataFromApiSearchColor1(searchInputs.value.color1);
      }

      // 处理 color2 列的搜索
      else if (searchInputs.value.color2) {
        fetchDataFromApiSearchColor2(searchInputs.value.color2);
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

      // 处理 seasonalAvailability 列的搜索
      else if (searchInputs.value.seasonalAvailability) {
        fetchDataFromApiSearchSeasonalAvailability(searchInputs.value.seasonalAvailability);
      }

      // 处理 mannequinPiece 列的搜索
      else if (searchInputs.value.mannequinPiece) {
        fetchDataFromApiSearchMannequinPiece(searchInputs.value.mannequinPiece);
      }

      // 处理 style 列的搜索
      else if (searchInputs.value.style) {
        fetchDataFromApiSearchStyle(searchInputs.value.style);
      }

      // 处理 labelThemes 列的搜索
      else if (searchInputs.value.labelThemes) {
        fetchDataFromApiSearchLabelThemes(searchInputs.value.labelThemes);
      }

      // 处理 catalog 列的搜索
      else if (searchInputs.value.catalog) {
        fetchDataFromApiSearchCatalog(searchInputs.value.catalog);
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
      isDiyActive.value = false;
      isBuyActive.value = false;
      searchInputs.value.buy_min = null;
      searchInputs.value.buy_max = null;
      isSellActive.value = false;
      searchInputs.value.sell_min = null;
      searchInputs.value.sell_max = null;
      isColor1Active.value = false;
      isColor2Active.value = false;
      isMilesPriceActive.value = false;
      searchInputs.value.milesPrice_min = null;
      searchInputs.value.milesPrice_max = null;
      isSourceActive.value = false;
      isSeasonalAvailabilityActive.value = false;
      isMannequinPieceActive.value = false;
      isStyleActive.value = false;
      isLabelThemesActive.value = false;
      isCatalogActive.value = false;

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
      isDiyActive,
      onDiySearchInput,
      fetchDataFromApiSearchDiy,
      isBuyActive,
      onBuySearchInput,
      fetchDataFromApiSearchBuy,
      isSellActive,
      onSellSearchInput,
      fetchDataFromApiSearchSell,
      isColor1Active,
      onColor1SearchInput,
      fetchDataFromApiSearchColor1,
      isColor2Active,
      onColor2SearchInput,
      fetchDataFromApiSearchColor2,
      isMilesPriceActive,
      onMilesPriceSearchInput,
      fetchDataFromApiSearchMilesPrice,
      isSourceActive,
      onSourceSearchInput,
      fetchDataFromApiSearchSource,
      isSeasonalAvailabilityActive,
      onSeasonalAvailabilitySearchInput,
      fetchDataFromApiSearchSeasonalAvailability,
      isMannequinPieceActive,
      onMannequinPieceSearchInput,
      fetchDataFromApiSearchMannequinPiece,
      isStyleActive,
      onStyleSearchInput,
      fetchDataFromApiSearchStyle,
      isLabelThemesActive,
      onLabelThemesSearchInput,
      fetchDataFromApiSearchLabelThemes,
      isCatalogActive,
      onCatalogSearchInput,
      fetchDataFromApiSearchCatalog,
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
