
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
            <li v-for="wallpaper in materialslist" :key="wallpaper.id" class="materials-item">
              <p>{{ wallpaper.name }} : {{ wallpaper.numberOfMaterial1 }} {{ wallpaper.material1 }} {{ wallpaper.numberOfMaterial2 }} {{ wallpaper.material2 }} {{ wallpaper.numberOfMaterial3 }} {{ wallpaper.material3 }} {{ wallpaper.numberOfMaterial4 }} {{ wallpaper.material4 }} {{ wallpaper.numberOfMaterial5 }} {{ wallpaper.material5 }} {{ wallpaper.numberOfMaterial6 }} {{ wallpaper.material6 }}</p >
            </li>
          </ul>
        </div>
        <div v-else-if="searched">
          <h3>未找到该物品</h3>
        </div>
      </div>


      <h2>
        Wallpaper
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>

        <!-- Vfx列 -->
        <el-table-column prop="vfx" label="Vfx">
          <template #header>
            <div>
              Vfx
              <el-select v-model="searchInputs.vfx" placeholder="Select" @change="() => {onVfxSearchInput('vfx'); search()}" :disabled="isIdActive || isNameActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.vfx }}</span>
          </template>
        </el-table-column>

        <!-- Vfx Type列 -->
        <el-table-column prop="vfxType" label="Vfx Type">
          <template #header>
            <div>
              Vfx Type
              <el-select v-model="searchInputs.vfxType" placeholder="Select" @change="() => {onVfxTypeSearchInput('vfxType'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="LightOff" value="LightOff"></el-option>        
              <el-option label="Random" value="Random"></el-option>        
              <el-option label="Synchro" value="Synchro"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.vfxType }}</span>
          </template>
        </el-table-column>

        <!-- Diy列 -->
        <el-table-column prop="diy" label="Diy">
          <template #header>
            <div>
              Diy
              <el-select v-model="searchInputs.diy" placeholder="Select" @change="() => {onDiySearchInput('diy'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.buy_min" placeholder="Min" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_max" placeholder="Max" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-select v-model="searchInputs.buy_sort" placeholder="Sort" @change="() => {onBuySearchInput('buy'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
              <el-select v-model="searchInputs.color1" placeholder="Select" @change="() => {onColor1SearchInput('color1'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
              <el-select v-model="searchInputs.color2" placeholder="Select" @change="() => {onColor2SearchInput('color2'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_min" placeholder="Min" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_max" placeholder="Max" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive"></el-input>
                <el-select v-model="searchInputs.milesPrice_sort" placeholder="Sort" @change="() => {onMilesPriceSearchInput('milesPrice'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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
              <el-select v-model="searchInputs.source" placeholder="Select" @change="() => {onSourceSearchInput('source'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Birthday" value="Birthday"></el-option>        
              <el-option label="Bug-Off" value="Bug-Off"></el-option>        
              <el-option label="Crafting" value="Crafting"></el-option>        
              <el-option label="Fishing Tourney" value="Fishing Tourney"></el-option>        
              <el-option label="Nook Miles Shop" value="Nook Miles Shop"></el-option>        
              <el-option label="Nook's Cranny" value="Nook's Cranny"></el-option>        
              <el-option label="Saharah" value="Saharah"></el-option>        
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

        <!-- Catalog列 -->
        <el-table-column prop="catalog" label="Catalog">
          <template #header>
            <div>
              Catalog
              <el-select v-model="searchInputs.catalog" placeholder="Select" @change="() => {onCatalogSearchInput('catalog'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
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

        <!-- Window Type列 -->
        <el-table-column prop="windowType" label="Window Type">
          <template #header>
            <div>
              Window Type
              <el-select v-model="searchInputs.windowType" placeholder="Select" @change="() => {onWindowTypeSearchInput('windowType'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Arch" value="Arch"></el-option>        
              <el-option label="Circle" value="Circle"></el-option>        
              <el-option label="Four Pane" value="Four Pane"></el-option>        
              <el-option label="Single Pane" value="Single Pane"></el-option>        
              <el-option label="Sliding Pane" value="Sliding Pane"></el-option>        
              <el-option label="Sliding Pane" value="Sliding Pane"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.windowType }}</span>
          </template>
        </el-table-column>

        <!-- Window Color列 -->
        <el-table-column prop="windowColor" label="Window Color">
          <template #header>
            <div>
              Window Color
              <el-select v-model="searchInputs.windowColor" placeholder="Select" @change="() => {onWindowColorSearchInput('windowColor'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Black Metal" value="Black Metal"></el-option>        
              <el-option label="Dark Wood" value="Dark Wood"></el-option>        
              <el-option label="Grey Metal" value="Grey Metal"></el-option>        
              <el-option label="Grey Wood" value="Grey Wood"></el-option>        
              <el-option label="Light Wood" value="Light Wood"></el-option>        
              <el-option label="Natural Wood" value="Natural Wood"></el-option>        
              <el-option label="White Metal" value="White Metal"></el-option>        
              <el-option label="White Wood" value="White Wood"></el-option>        
              <el-option label="Wood" value="Wood"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.windowColor }}</span>
          </template>
        </el-table-column>

        <!-- Pane Type列 -->
        <el-table-column prop="paneType" label="Pane Type">
          <template #header>
            <div>
              Pane Type
              <el-select v-model="searchInputs.paneType" placeholder="Select" @change="() => {onPaneTypeSearchInput('paneType'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Glass" value="Glass"></el-option>        
              <el-option label="Screen" value="Screen"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.paneType }}</span>
          </template>
        </el-table-column>

        <!-- Curtain Type列 -->
        <el-table-column prop="curtainType" label="Curtain Type">
          <template #header>
            <div>
              Curtain Type
              <el-select v-model="searchInputs.curtainType" placeholder="Select" @change="() => {onCurtainTypeSearchInput('curtainType'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Curtains" value="Curtains"></el-option>        
              <el-option label="Roller Shades" value="Roller Shades"></el-option>        
              <el-option label="Slatted Blinds" value="Slatted Blinds"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.curtainType }}</span>
          </template>
        </el-table-column>

        <!-- Curtain Color列 -->
        <el-table-column prop="curtainColor" label="Curtain Color">
          <template #header>
            <div>
              Curtain Color
              <el-select v-model="searchInputs.curtainColor" placeholder="Select" @change="() => {onCurtainColorSearchInput('curtainColor'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Aluminium" value="Aluminium"></el-option>        
              <el-option label="Black Plastic" value="Black Plastic"></el-option>        
              <el-option label="Blue Checkered" value="Blue Checkered"></el-option>        
              <el-option label="Brown Wood" value="Brown Wood"></el-option>        
              <el-option label="Dark Brown Wood" value="Dark Brown Wood"></el-option>        
              <el-option label="Green" value="Green"></el-option>        
              <el-option label="Green Checkered" value="Green Checkered"></el-option>        
              <el-option label="Light blue" value="Light blue"></el-option>        
              <el-option label="Natural Wood" value="Natural Wood"></el-option>        
              <el-option label="Pink" value="Pink"></el-option>        
              <el-option label="Red Checkered" value="Red Checkered"></el-option>        
              <el-option label="Undyed" value="Undyed"></el-option>        
              <el-option label="White" value="White"></el-option>        
              <el-option label="White Lace" value="White Lace"></el-option>        
              <el-option label="White Plastic" value="White Plastic"></el-option>        
              <el-option label="Yellow" value="Yellow"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.curtainColor }}</span>
          </template>
        </el-table-column>

        <!-- Ceiling Type列 -->
        <el-table-column prop="ceilingType" label="Ceiling Type">
          <template #header>
            <div>
              Ceiling Type
              <el-select v-model="searchInputs.ceilingType" placeholder="Select" @change="() => {onCeilingTypeSearchInput('ceilingType'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Cloth" value="Cloth"></el-option>        
              <el-option label="Gold" value="Gold"></el-option>        
              <el-option label="Plain" value="Plain"></el-option>        
              <el-option label="Stone" value="Stone"></el-option>        
              <el-option label="Tile" value="Tile"></el-option>        
              <el-option label="Wood" value="Wood"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.ceilingType }}</span>
          </template>
        </el-table-column>

        <!-- Hha Concept1列 -->
        <el-table-column prop="hhaConcept1" label="Hha Concept1">
          <template #header>
            <div>
              Hha Concept1
              <el-select v-model="searchInputs.hhaConcept1" placeholder="Select" @change="() => {onHhaConcept1SearchInput('hhaConcept1'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept2Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bathroom" value="bathroom"></el-option>        
              <el-option label="child's room" value="child's room"></el-option>        
              <el-option label="den" value="den"></el-option>        
              <el-option label="expensive" value="expensive"></el-option>        
              <el-option label="facility" value="facility"></el-option>        
              <el-option label="fancy" value="fancy"></el-option>        
              <el-option label="fitness" value="fitness"></el-option>        
              <el-option label="folk art" value="folk art"></el-option>        
              <el-option label="freezing cold" value="freezing cold"></el-option>        
              <el-option label="garage" value="garage"></el-option>        
              <el-option label="garden" value="garden"></el-option>        
              <el-option label="horror" value="horror"></el-option>        
              <el-option label="living room" value="living room"></el-option>        
              <el-option label="music" value="music"></el-option>        
              <el-option label="ocean" value="ocean"></el-option>        
              <el-option label="office" value="office"></el-option>        
              <el-option label="party" value="party"></el-option>        
              <el-option label="shop" value="shop"></el-option>        
              <el-option label="space" value="space"></el-option>        
              <el-option label="zen-style" value="zen-style"></el-option>        
              <el-option label="None" value="None"></el-option>        
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
              <el-select v-model="searchInputs.hhaConcept2" placeholder="Select" @change="() => {onHhaConcept2SearchInput('hhaConcept2'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaSeriesActive || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="child's room" value="child's room"></el-option>        
              <el-option label="den" value="den"></el-option>        
              <el-option label="expensive" value="expensive"></el-option>        
              <el-option label="facility" value="facility"></el-option>        
              <el-option label="fancy" value="fancy"></el-option>        
              <el-option label="folk art" value="folk art"></el-option>        
              <el-option label="garage" value="garage"></el-option>        
              <el-option label="horror" value="horror"></el-option>        
              <el-option label="kitchen" value="kitchen"></el-option>        
              <el-option label="living room" value="living room"></el-option>        
              <el-option label="music" value="music"></el-option>        
              <el-option label="party" value="party"></el-option>        
              <el-option label="school" value="school"></el-option>        
              <el-option label="shop" value="shop"></el-option>        
              <el-option label="zen-style" value="zen-style"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaConcept2 }}</span>
          </template>
        </el-table-column>

        <!-- Hha Series列 -->
        <el-table-column prop="hhaSeries" label="Hha Series">
          <template #header>
            <div>
              Hha Series
              <el-select v-model="searchInputs.hhaSeries" placeholder="Select" @change="() => {onHhaSeriesSearchInput('hhaSeries'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isTagActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bamboo" value="bamboo"></el-option>        
              <el-option label="Bunny Day" value="Bunny Day"></el-option>        
              <el-option label="cherry blossoms" value="cherry blossoms"></el-option>        
              <el-option label="festive" value="festive"></el-option>        
              <el-option label="frozen" value="frozen"></el-option>        
              <el-option label="fruits" value="fruits"></el-option>        
              <el-option label="golden" value="golden"></el-option>        
              <el-option label="mush" value="mush"></el-option>        
              <el-option label="stars" value="stars"></el-option>        
              <el-option label="throwback" value="throwback"></el-option>        
              <el-option label="tree's bounty or leaves" value="tree's bounty or leaves"></el-option>        
              <el-option label="wedding" value="wedding"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaSeries }}</span>
          </template>
        </el-table-column>

        <!-- Tag列 -->
        <el-table-column prop="tag" label="Tag">
          <template #header>
            <div>
              Tag
              <el-select v-model="searchInputs.tag" placeholder="Select" @change="() => {onTagSearchInput('tag'); search()}" :disabled="isIdActive || isNameActive || isVfxActive || isVfxTypeActive || isDiyActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isMilesPriceActive || isSourceActive || isCatalogActive || isWindowTypeActive || isWindowColorActive || isPaneTypeActive || isCurtainTypeActive || isCurtainColorActive || isCeilingTypeActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Art Deco Walls" value="Art Deco Walls"></el-option>        
              <el-option label="Asia" value="Asia"></el-option>        
              <el-option label="Brick" value="Brick"></el-option>        
              <el-option label="Camouflage" value="Camouflage"></el-option>        
              <el-option label="Chocolate" value="Chocolate"></el-option>        
              <el-option label="Cloth Walls" value="Cloth Walls"></el-option>        
              <el-option label="Country" value="Country"></el-option>        
              <el-option label="Crown Walls" value="Crown Walls"></el-option>        
              <el-option label="Cute Walls" value="Cute Walls"></el-option>        
              <el-option label="Diner Walls" value="Diner Walls"></el-option>        
              <el-option label="Dollhouse Walls" value="Dollhouse Walls"></el-option>        
              <el-option label="Dot" value="Dot"></el-option>        
              <el-option label="Flower Pop Walls" value="Flower Pop Walls"></el-option>        
              <el-option label="Flower Walls" value="Flower Walls"></el-option>        
              <el-option label="Fruit Walls" value="Fruit Walls"></el-option>        
              <el-option label="Hall Walls" value="Hall Walls"></el-option>        
              <el-option label="Heart Walls" value="Heart Walls"></el-option>        
              <el-option label="Herringbone" value="Herringbone"></el-option>        
              <el-option label="Honeycomb" value="Honeycomb"></el-option>        
              <el-option label="Iron Walls" value="Iron Walls"></el-option>        
              <el-option label="Japanese Style" value="Japanese Style"></el-option>        
              <el-option label="Library Walls" value="Library Walls"></el-option>        
              <el-option label="Manor Walls" value="Manor Walls"></el-option>        
              <el-option label="Morocco" value="Morocco"></el-option>        
              <el-option label="Nature Walls" value="Nature Walls"></el-option>        
              <el-option label="Neta Walls" value="Neta Walls"></el-option>        
              <el-option label="Painted Wood" value="Painted Wood"></el-option>        
              <el-option label="Panel Mold Walls" value="Panel Mold Walls"></el-option>        
              <el-option label="Pegboard Walls" value="Pegboard Walls"></el-option>        
              <el-option label="Puzzle Walls" value="Puzzle Walls"></el-option>        
              <el-option label="Rose Walls" value="Rose Walls"></el-option>        
              <el-option label="Simple Walls" value="Simple Walls"></el-option>        
              <el-option label="Special Cool Nature Walls" value="Special Cool Nature Walls"></el-option>        
              <el-option label="Special Inorganic Walls" value="Special Inorganic Walls"></el-option>        
              <el-option label="Special Walls" value="Special Walls"></el-option>        
              <el-option label="Special Warm Nature Walls" value="Special Warm Nature Walls"></el-option>        
              <el-option label="Stone Walls" value="Stone Walls"></el-option>        
              <el-option label="Stripe Walls" value="Stripe Walls"></el-option>        
              <el-option label="Tea Room Walls" value="Tea Room Walls"></el-option>        
              <el-option label="Tile Walls" value="Tile Walls"></el-option>        
              <el-option label="Tin Walls" value="Tin Walls"></el-option>        
              <el-option label="Two-Tone Tile Walls" value="Two-Tone Tile Walls"></el-option>        
              <el-option label="Wood Plank Walls" value="Wood Plank Walls"></el-option>        
              <el-option label="Wood Walls" value="Wood Walls"></el-option>        
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
        const response = await axios.get('/api/wallpaper/materials', { params });
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
      vfx: '',
      vfxType: '',
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
      catalog: '',
      windowType: '',
      windowColor: '',
      paneType: '',
      curtainType: '',
      curtainColor: '',
      ceilingType: '',
      hhaConcept1: '',
      hhaConcept2: '',
      hhaSeries: '',
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
    const isVfxActive = ref(false);
    const isVfxTypeActive = ref(false);
    const isDiyActive = ref(false);
    const isBuyActive = ref(false);
    const isSellActive = ref(false);
    const isColor1Active = ref(false);
    const isColor2Active = ref(false);
    const isMilesPriceActive = ref(false);
    const isSourceActive = ref(false);
    const isCatalogActive = ref(false);
    const isWindowTypeActive = ref(false);
    const isWindowColorActive = ref(false);
    const isPaneTypeActive = ref(false);
    const isCurtainTypeActive = ref(false);
    const isCurtainColorActive = ref(false);
    const isCeilingTypeActive = ref(false);
    const isHhaConcept1Active = ref(false);
    const isHhaConcept2Active = ref(false);
    const isHhaSeriesActive = ref(false);
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

    // 组件创建时从/api/wallpaper接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/wallpaper接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/wallpaper').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/wallpaper/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/wallpaper/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/wallpaper/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchVfx接口获取搜索数据
    const fetchDataFromApiSearchVfx = (query) => {
      axios.get(`/api/wallpaper/searchVfx?vfx=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchVfxType接口获取搜索数据
    const fetchDataFromApiSearchVfxType = (query) => {
      axios.get(`/api/wallpaper/searchVfxType?vfxType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchDiy接口获取搜索数据
    const fetchDataFromApiSearchDiy = (query) => {
      axios.get(`/api/wallpaper/searchDiy?diy=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchBuy接口获取搜索数据
    const fetchDataFromApiSearchBuy = (min, max, sort) => {
      axios.get(`/api/wallpaper/searchBuy?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/wallpaper/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchColor1接口获取搜索数据
    const fetchDataFromApiSearchColor1 = (query) => {
      axios.get(`/api/wallpaper/searchColor1?color1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchColor2接口获取搜索数据
    const fetchDataFromApiSearchColor2 = (query) => {
      axios.get(`/api/wallpaper/searchColor2?color2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchMilesPrice接口获取搜索数据
    const fetchDataFromApiSearchMilesPrice = (min, max, sort) => {
      axios.get(`/api/wallpaper/searchMilesPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchSource接口获取搜索数据
    const fetchDataFromApiSearchSource = (query) => {
      axios.get(`/api/wallpaper/searchSource?source=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchCatalog接口获取搜索数据
    const fetchDataFromApiSearchCatalog = (query) => {
      axios.get(`/api/wallpaper/searchCatalog?catalog=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchWindowType接口获取搜索数据
    const fetchDataFromApiSearchWindowType = (query) => {
      axios.get(`/api/wallpaper/searchWindowType?windowType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchWindowColor接口获取搜索数据
    const fetchDataFromApiSearchWindowColor = (query) => {
      axios.get(`/api/wallpaper/searchWindowColor?windowColor=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchPaneType接口获取搜索数据
    const fetchDataFromApiSearchPaneType = (query) => {
      axios.get(`/api/wallpaper/searchPaneType?paneType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchCurtainType接口获取搜索数据
    const fetchDataFromApiSearchCurtainType = (query) => {
      axios.get(`/api/wallpaper/searchCurtainType?curtainType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchCurtainColor接口获取搜索数据
    const fetchDataFromApiSearchCurtainColor = (query) => {
      axios.get(`/api/wallpaper/searchCurtainColor?curtainColor=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchCeilingType接口获取搜索数据
    const fetchDataFromApiSearchCeilingType = (query) => {
      axios.get(`/api/wallpaper/searchCeilingType?ceilingType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchHhaConcept1接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept1 = (query) => {
      axios.get(`/api/wallpaper/searchHhaConcept1?hhaConcept1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchHhaConcept2接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept2 = (query) => {
      axios.get(`/api/wallpaper/searchHhaConcept2?hhaConcept2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchHhaSeries接口获取搜索数据
    const fetchDataFromApiSearchHhaSeries = (query) => {
      axios.get(`/api/wallpaper/searchHhaSeries?hhaSeries=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/wallpaper/searchTag接口获取搜索数据
    const fetchDataFromApiSearchTag = (query) => {
      axios.get(`/api/wallpaper/searchTag?tag=${query}`).then(response => {
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

    const onVfxSearchInput = (column) => {
      if (column === 'vfx' && searchInputs.value.vfx) {
        isVfxActive.value = true;
      } else if (!searchInputs.value.vfx) {
        isVfxActive.value = false;
      }
    };

    const onVfxTypeSearchInput = (column) => {
      if (column === 'vfxType' && searchInputs.value.vfxType) {
        isVfxTypeActive.value = true;
      } else if (!searchInputs.value.vfxType) {
        isVfxTypeActive.value = false;
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

    const onCatalogSearchInput = (column) => {
      if (column === 'catalog' && searchInputs.value.catalog) {
        isCatalogActive.value = true;
      } else if (!searchInputs.value.catalog) {
        isCatalogActive.value = false;
      }
    };

    const onWindowTypeSearchInput = (column) => {
      if (column === 'windowType' && searchInputs.value.windowType) {
        isWindowTypeActive.value = true;
      } else if (!searchInputs.value.windowType) {
        isWindowTypeActive.value = false;
      }
    };

    const onWindowColorSearchInput = (column) => {
      if (column === 'windowColor' && searchInputs.value.windowColor) {
        isWindowColorActive.value = true;
      } else if (!searchInputs.value.windowColor) {
        isWindowColorActive.value = false;
      }
    };

    const onPaneTypeSearchInput = (column) => {
      if (column === 'paneType' && searchInputs.value.paneType) {
        isPaneTypeActive.value = true;
      } else if (!searchInputs.value.paneType) {
        isPaneTypeActive.value = false;
      }
    };

    const onCurtainTypeSearchInput = (column) => {
      if (column === 'curtainType' && searchInputs.value.curtainType) {
        isCurtainTypeActive.value = true;
      } else if (!searchInputs.value.curtainType) {
        isCurtainTypeActive.value = false;
      }
    };

    const onCurtainColorSearchInput = (column) => {
      if (column === 'curtainColor' && searchInputs.value.curtainColor) {
        isCurtainColorActive.value = true;
      } else if (!searchInputs.value.curtainColor) {
        isCurtainColorActive.value = false;
      }
    };

    const onCeilingTypeSearchInput = (column) => {
      if (column === 'ceilingType' && searchInputs.value.ceilingType) {
        isCeilingTypeActive.value = true;
      } else if (!searchInputs.value.ceilingType) {
        isCeilingTypeActive.value = false;
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

    const onHhaSeriesSearchInput = (column) => {
      if (column === 'hhaSeries' && searchInputs.value.hhaSeries) {
        isHhaSeriesActive.value = true;
      } else if (!searchInputs.value.hhaSeries) {
        isHhaSeriesActive.value = false;
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

      // 处理 vfx 列的搜索
      else if (searchInputs.value.vfx) {
        fetchDataFromApiSearchVfx(searchInputs.value.vfx);
      }

      // 处理 vfxType 列的搜索
      else if (searchInputs.value.vfxType) {
        fetchDataFromApiSearchVfxType(searchInputs.value.vfxType);
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

      // 处理 catalog 列的搜索
      else if (searchInputs.value.catalog) {
        fetchDataFromApiSearchCatalog(searchInputs.value.catalog);
      }

      // 处理 windowType 列的搜索
      else if (searchInputs.value.windowType) {
        fetchDataFromApiSearchWindowType(searchInputs.value.windowType);
      }

      // 处理 windowColor 列的搜索
      else if (searchInputs.value.windowColor) {
        fetchDataFromApiSearchWindowColor(searchInputs.value.windowColor);
      }

      // 处理 paneType 列的搜索
      else if (searchInputs.value.paneType) {
        fetchDataFromApiSearchPaneType(searchInputs.value.paneType);
      }

      // 处理 curtainType 列的搜索
      else if (searchInputs.value.curtainType) {
        fetchDataFromApiSearchCurtainType(searchInputs.value.curtainType);
      }

      // 处理 curtainColor 列的搜索
      else if (searchInputs.value.curtainColor) {
        fetchDataFromApiSearchCurtainColor(searchInputs.value.curtainColor);
      }

      // 处理 ceilingType 列的搜索
      else if (searchInputs.value.ceilingType) {
        fetchDataFromApiSearchCeilingType(searchInputs.value.ceilingType);
      }

      // 处理 hhaConcept1 列的搜索
      else if (searchInputs.value.hhaConcept1) {
        fetchDataFromApiSearchHhaConcept1(searchInputs.value.hhaConcept1);
      }

      // 处理 hhaConcept2 列的搜索
      else if (searchInputs.value.hhaConcept2) {
        fetchDataFromApiSearchHhaConcept2(searchInputs.value.hhaConcept2);
      }

      // 处理 hhaSeries 列的搜索
      else if (searchInputs.value.hhaSeries) {
        fetchDataFromApiSearchHhaSeries(searchInputs.value.hhaSeries);
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
      isVfxActive.value = false;
      isVfxTypeActive.value = false;
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
      isCatalogActive.value = false;
      isWindowTypeActive.value = false;
      isWindowColorActive.value = false;
      isPaneTypeActive.value = false;
      isCurtainTypeActive.value = false;
      isCurtainColorActive.value = false;
      isCeilingTypeActive.value = false;
      isHhaConcept1Active.value = false;
      isHhaConcept2Active.value = false;
      isHhaSeriesActive.value = false;
      isTagActive.value = false;

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
      isVfxActive,
      onVfxSearchInput,
      fetchDataFromApiSearchVfx,
      isVfxTypeActive,
      onVfxTypeSearchInput,
      fetchDataFromApiSearchVfxType,
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
      isCatalogActive,
      onCatalogSearchInput,
      fetchDataFromApiSearchCatalog,
      isWindowTypeActive,
      onWindowTypeSearchInput,
      fetchDataFromApiSearchWindowType,
      isWindowColorActive,
      onWindowColorSearchInput,
      fetchDataFromApiSearchWindowColor,
      isPaneTypeActive,
      onPaneTypeSearchInput,
      fetchDataFromApiSearchPaneType,
      isCurtainTypeActive,
      onCurtainTypeSearchInput,
      fetchDataFromApiSearchCurtainType,
      isCurtainColorActive,
      onCurtainColorSearchInput,
      fetchDataFromApiSearchCurtainColor,
      isCeilingTypeActive,
      onCeilingTypeSearchInput,
      fetchDataFromApiSearchCeilingType,
      isHhaConcept1Active,
      onHhaConcept1SearchInput,
      fetchDataFromApiSearchHhaConcept1,
      isHhaConcept2Active,
      onHhaConcept2SearchInput,
      fetchDataFromApiSearchHhaConcept2,
      isHhaSeriesActive,
      onHhaSeriesSearchInput,
      fetchDataFromApiSearchHhaSeries,
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
