
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
            <li v-for="miscellaneous in materialslist" :key="miscellaneous.id" class="materials-item">
              <p>{{ miscellaneous.name }} : {{ miscellaneous.numberOfMaterial1 }} {{ miscellaneous.material1 }} {{ miscellaneous.numberOfMaterial2 }} {{ miscellaneous.material2 }} {{ miscellaneous.numberOfMaterial3 }} {{ miscellaneous.material3 }} {{ miscellaneous.numberOfMaterial4 }} {{ miscellaneous.material4 }} {{ miscellaneous.numberOfMaterial5 }} {{ miscellaneous.material5 }} {{ miscellaneous.numberOfMaterial6 }} {{ miscellaneous.material6 }}</p >
            </li>
          </ul>
        </div>
        <div v-else-if="searched">
          <h3>未找到该物品</h3>
        </div>
      </div>


      <h2>
        Miscellaneous
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
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
              <el-input v-model="searchInputs.variation" placeholder="Search in Variation" @input="onVariationSearchInput('variation')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
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
              <el-select v-model="searchInputs.bodyTitle" placeholder="Select" @change="() => {onBodyTitleSearchInput('bodyTitle'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Bag color" value="Bag color"></el-option>        
              <el-option label="Bamboo" value="Bamboo"></el-option>        
              <el-option label="Block color" value="Block color"></el-option>        
              <el-option label="Body" value="Body"></el-option>        
              <el-option label="Body color" value="Body color"></el-option>        
              <el-option label="Can" value="Can"></el-option>        
              <el-option label="Color" value="Color"></el-option>        
              <el-option label="Cover pattern" value="Cover pattern"></el-option>        
              <el-option label="Creation" value="Creation"></el-option>        
              <el-option label="Decorations" value="Decorations"></el-option>        
              <el-option label="Design" value="Design"></el-option>        
              <el-option label="Dish" value="Dish"></el-option>        
              <el-option label="Finish" value="Finish"></el-option>        
              <el-option label="Flavor" value="Flavor"></el-option>        
              <el-option label="Flower color" value="Flower color"></el-option>        
              <el-option label="Frame" value="Frame"></el-option>        
              <el-option label="Fruit type" value="Fruit type"></el-option>        
              <el-option label="Genre" value="Genre"></el-option>        
              <el-option label="Lumber type" value="Lumber type"></el-option>        
              <el-option label="me" value="me"></el-option>        
              <el-option label="Nut color" value="Nut color"></el-option>        
              <el-option label="Paint" value="Paint"></el-option>        
              <el-option label="Paint color" value="Paint color"></el-option>        
              <el-option label="Shell color" value="Shell color"></el-option>        
              <el-option label="Variation" value="Variation"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.bodyTitle }}</span>
          </template>
        </el-table-column>

        <!-- Pattern列 -->
        <el-table-column prop="pattern" label="Pattern">
          <template #header>
            <div>
              Pattern
              <el-input v-model="searchInputs.pattern" placeholder="Search in Pattern" @input="onPatternSearchInput('pattern')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.pattern }}</span>
          </template>
        </el-table-column>

        <!-- Pattern Title列 -->
        <el-table-column prop="patternTitle" label="Pattern Title">
          <template #header>
            <div>
              Pattern Title
              <el-select v-model="searchInputs.patternTitle" placeholder="Select" @change="() => {onPatternTitleSearchInput('patternTitle'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Cover" value="Cover"></el-option>        
              <el-option label="Covers" value="Covers"></el-option>        
              <el-option label="Design" value="Design"></el-option>        
              <el-option label="Drawing paper" value="Drawing paper"></el-option>        
              <el-option label="Feature" value="Feature"></el-option>        
              <el-option label="Handkerchief design" value="Handkerchief design"></el-option>        
              <el-option label="Lampshade" value="Lampshade"></el-option>        
              <el-option label="Magazine" value="Magazine"></el-option>        
              <el-option label="Manuscript paper" value="Manuscript paper"></el-option>        
              <el-option label="Mat" value="Mat"></el-option>        
              <el-option label="Placemat" value="Placemat"></el-option>        
              <el-option label="Printout" value="Printout"></el-option>        
              <el-option label="Puzzle image" value="Puzzle image"></el-option>        
              <el-option label="Screen" value="Screen"></el-option>        
              <el-option label="Shirt" value="Shirt"></el-option>        
              <el-option label="Sticker" value="Sticker"></el-option>        
              <el-option label="Towel" value="Towel"></el-option>        
              <el-option label="Writing" value="Writing"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.patternTitle }}</span>
          </template>
        </el-table-column>

        <!-- Diy列 -->
        <el-table-column prop="diy" label="Diy">
          <template #header>
            <div>
              Diy
              <el-select v-model="searchInputs.diy" placeholder="Select" @change="() => {onDiySearchInput('diy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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

        <!-- Body Customize列 -->
        <el-table-column prop="bodyCustomize" label="Body Customize">
          <template #header>
            <div>
              Body Customize
              <el-select v-model="searchInputs.bodyCustomize" placeholder="Select" @change="() => {onBodyCustomizeSearchInput('bodyCustomize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.bodyCustomize }}</span>
          </template>
        </el-table-column>

        <!-- Pattern Customize列 -->
        <el-table-column prop="patternCustomize" label="Pattern Customize">
          <template #header>
            <div>
              Pattern Customize
              <el-select v-model="searchInputs.patternCustomize" placeholder="Select" @change="() => {onPatternCustomizeSearchInput('patternCustomize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.patternCustomize }}</span>
          </template>
        </el-table-column>

        <!-- Kit Cost列 -->
        <el-table-column prop="kitCost" label="Kit Cost">
          <template #header>
            <div>
              Kit Cost
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_min" placeholder="Min" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_max" placeholder="Max" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.kitCost_sort" placeholder="Sort" @change="() => {onKitCostSearchInput('kitCost'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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

        <!-- Buy列 -->
        <el-table-column prop="buy" label="Buy">
          <template #header>
            <div>
              Buy
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_min" placeholder="Min" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buy_max" placeholder="Max" @input="onBuySearchInput('buy')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.buy_sort" placeholder="Sort" @change="() => {onBuySearchInput('buy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.sell_min" placeholder="Min" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sell_max" placeholder="Max" @input="onSellSearchInput('sell')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
                <el-select v-model="searchInputs.sell_sort" placeholder="Sort" @change="() => {onSellSearchInput('sell'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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
              <el-select v-model="searchInputs.color1" placeholder="Select" @change="() => {onColor1SearchInput('color1'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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
              <el-select v-model="searchInputs.color2" placeholder="Select" @change="() => {onColor2SearchInput('color2'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
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

        <!-- Size列 -->
        <el-table-column prop="size" label="Size">
          <template #header>
            <div>
              Size
              <el-select v-model="searchInputs.size" placeholder="Select" @change="() => {onSizeSearchInput('size'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="1x1" value="1x1"></el-option>        
              <el-option label="2x1" value="2x1"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.size }}</span>
          </template>
        </el-table-column>

        <!-- Source列 -->
        <el-table-column prop="source" label="Source">
          <template #header>
            <div>
              Source
              <el-select v-model="searchInputs.source" placeholder="Select" @change="() => {onSourceSearchInput('source'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Birthday" value="Birthday"></el-option>        
              <el-option label="Bug-Off" value="Bug-Off"></el-option>        
              <el-option label="Bunny Day" value="Bunny Day"></el-option>        
              <el-option label="C.J." value="C.J."></el-option>        
              <el-option label="Crafting" value="Crafting"></el-option>        
              <el-option label="Dodo Airlines" value="Dodo Airlines"></el-option>        
              <el-option label="Fishing Tourney" value="Fishing Tourney"></el-option>        
              <el-option label="Flick" value="Flick"></el-option>        
              <el-option label="Gulliver" value="Gulliver"></el-option>        
              <el-option label="HHA" value="HHA"></el-option>        
              <el-option label="Mom" value="Mom"></el-option>        
              <el-option label="Nintendo; Nook Shopping" value="Nintendo; Nook Shopping"></el-option>        
              <el-option label="Nook Shopping Promotion" value="Nook Shopping Promotion"></el-option>        
              <el-option label="Nook's Cranny" value="Nook's Cranny"></el-option>        
              <el-option label="Rover" value="Rover"></el-option>        
              <el-option label="Starting items" value="Starting items"></el-option>        
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
            <div>
              Source Notes
              <el-input v-model="searchInputs.sourceNotes" placeholder="Search in Source Notes" @input="onSourceNotesSearchInput('sourceNotes')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive"></el-input>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.sourceNotes }}</span>
          </template>
        </el-table-column>

        <!-- Hha Concept1列 -->
        <el-table-column prop="hhaConcept1" label="Hha Concept1">
          <template #header>
            <div>
              Hha Concept1
              <el-select v-model="searchInputs.hhaConcept1" placeholder="Select" @change="() => {onHhaConcept1SearchInput('hhaConcept1'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bathroom" value="bathroom"></el-option>        
              <el-option label="child's room" value="child's room"></el-option>        
              <el-option label="concert" value="concert"></el-option>        
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
              <el-option label="kitchen" value="kitchen"></el-option>        
              <el-option label="living room" value="living room"></el-option>        
              <el-option label="music" value="music"></el-option>        
              <el-option label="ocean" value="ocean"></el-option>        
              <el-option label="office" value="office"></el-option>        
              <el-option label="outdoors" value="outdoors"></el-option>        
              <el-option label="party" value="party"></el-option>        
              <el-option label="school" value="school"></el-option>        
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
              <el-select v-model="searchInputs.hhaConcept2" placeholder="Select" @change="() => {onHhaConcept2SearchInput('hhaConcept2'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
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
              <el-option label="ocean" value="ocean"></el-option>        
              <el-option label="office" value="office"></el-option>        
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
              <el-select v-model="searchInputs.hhaSeries" placeholder="Select" @change="() => {onHhaSeriesSearchInput('hhaSeries'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bamboo" value="bamboo"></el-option>        
              <el-option label="Bunny Day" value="Bunny Day"></el-option>        
              <el-option label="cardboard" value="cardboard"></el-option>        
              <el-option label="cherry blossoms" value="cherry blossoms"></el-option>        
              <el-option label="cute" value="cute"></el-option>        
              <el-option label="festive" value="festive"></el-option>        
              <el-option label="flowers" value="flowers"></el-option>        
              <el-option label="frozen" value="frozen"></el-option>        
              <el-option label="fruits" value="fruits"></el-option>        
              <el-option label="golden" value="golden"></el-option>        
              <el-option label="motherly" value="motherly"></el-option>        
              <el-option label="rattan" value="rattan"></el-option>        
              <el-option label="shell" value="shell"></el-option>        
              <el-option label="stars" value="stars"></el-option>        
              <el-option label="throwback" value="throwback"></el-option>        
              <el-option label="tree's bounty or leaves" value="tree's bounty or leaves"></el-option>        
              <el-option label="wedding" value="wedding"></el-option>        
              <el-option label="wooden" value="wooden"></el-option>        
              <el-option label="wooden block" value="wooden block"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaSeries }}</span>
          </template>
        </el-table-column>

        <!-- Hha Set列 -->
        <el-table-column prop="hhaSet" label="Hha Set">
          <template #header>
            <div>
              Hha Set
              <el-select v-model="searchInputs.hhaSet" placeholder="Select" @change="() => {onHhaSetSearchInput('hhaSet'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bear" value="bear"></el-option>        
              <el-option label="birthday" value="birthday"></el-option>        
              <el-option label="cherry" value="cherry"></el-option>        
              <el-option label="panda" value="panda"></el-option>        
              <el-option label="peach" value="peach"></el-option>        
              <el-option label="pet" value="pet"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaSet }}</span>
          </template>
        </el-table-column>

        <!-- Interact列 -->
        <el-table-column prop="interact" label="Interact">
          <template #header>
            <div>
              Interact
              <el-select v-model="searchInputs.interact" placeholder="Select" @change="() => {onInteractSearchInput('interact'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.interact }}</span>
          </template>
        </el-table-column>

        <!-- Tag列 -->
        <el-table-column prop="tag" label="Tag">
          <template #header>
            <div>
              Tag
              <el-select v-model="searchInputs.tag" placeholder="Select" @change="() => {onTagSearchInput('tag'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Animal" value="Animal"></el-option>        
              <el-option label="Audio" value="Audio"></el-option>        
              <el-option label="Bathroom Things" value="Bathroom Things"></el-option>        
              <el-option label="Beauty" value="Beauty"></el-option>        
              <el-option label="Chair" value="Chair"></el-option>        
              <el-option label="Clock" value="Clock"></el-option>        
              <el-option label="Compass" value="Compass"></el-option>        
              <el-option label="Desk" value="Desk"></el-option>        
              <el-option label="Dining" value="Dining"></el-option>        
              <el-option label="Dresser" value="Dresser"></el-option>        
              <el-option label="Easter" value="Easter"></el-option>        
              <el-option label="Facility Decor" value="Facility Decor"></el-option>        
              <el-option label="Fan" value="Fan"></el-option>        
              <el-option label="Fish" value="Fish"></el-option>        
              <el-option label="Folk Craft Decor" value="Folk Craft Decor"></el-option>        
              <el-option label="Game Console" value="Game Console"></el-option>        
              <el-option label="Garden" value="Garden"></el-option>        
              <el-option label="Home Appliances" value="Home Appliances"></el-option>        
              <el-option label="Hospital" value="Hospital"></el-option>        
              <el-option label="Insect" value="Insect"></el-option>        
              <el-option label="Japanese Style" value="Japanese Style"></el-option>        
              <el-option label="Kitchen Things" value="Kitchen Things"></el-option>        
              <el-option label="Lamp" value="Lamp"></el-option>        
              <el-option label="Museum" value="Museum"></el-option>        
              <el-option label="Musical Instrument" value="Musical Instrument"></el-option>        
              <el-option label="Office" value="Office"></el-option>        
              <el-option label="Outdoors Decor" value="Outdoors Decor"></el-option>        
              <el-option label="Plants" value="Plants"></el-option>        
              <el-option label="School" value="School"></el-option>        
              <el-option label="Seaside" value="Seaside"></el-option>        
              <el-option label="Seasonal Decor" value="Seasonal Decor"></el-option>        
              <el-option label="Sewing Table" value="Sewing Table"></el-option>        
              <el-option label="Shop" value="Shop"></el-option>        
              <el-option label="Space" value="Space"></el-option>        
              <el-option label="Special Fish" value="Special Fish"></el-option>        
              <el-option label="Special Insect" value="Special Insect"></el-option>        
              <el-option label="Sports" value="Sports"></el-option>        
              <el-option label="Study" value="Study"></el-option>        
              <el-option label="Supplies" value="Supplies"></el-option>        
              <el-option label="Toy" value="Toy"></el-option>        
              <el-option label="TV" value="TV"></el-option>        
              <el-option label="Vehicle" value="Vehicle"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.tag }}</span>
          </template>
        </el-table-column>

        <!-- Outdoor列 -->
        <el-table-column prop="outdoor" label="Outdoor">
          <template #header>
            <div>
              Outdoor
              <el-select v-model="searchInputs.outdoor" placeholder="Select" @change="() => {onOutdoorSearchInput('outdoor'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isSpeakerTypeActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Yes" value="Yes"></el-option>        
              <el-option label="No" value="No"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.outdoor }}</span>
          </template>
        </el-table-column>

        <!-- Speaker Type列 -->
        <el-table-column prop="speakerType" label="Speaker Type">
          <template #header>
            <div>
              Speaker Type
              <el-select v-model="searchInputs.speakerType" placeholder="Select" @change="() => {onSpeakerTypeSearchInput('speakerType'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isLightingTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Does not play music" value="Does not play music"></el-option>        
              <el-option label="Cheap" value="Cheap"></el-option>        
              <el-option label="Phono" value="Phono"></el-option>        
              <el-option label="Retro" value="Retro"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.speakerType }}</span>
          </template>
        </el-table-column>

        <!-- Lighting Type列 -->
        <el-table-column prop="lightingType" label="Lighting Type">
          <template #header>
            <div>
              Lighting Type
              <el-select v-model="searchInputs.lightingType" placeholder="Select" @change="() => {onLightingTypeSearchInput('lightingType'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isCatalogActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="No lighting" value="No lighting"></el-option>        
              <el-option label="Candle" value="Candle"></el-option>        
              <el-option label="Emission" value="Emission"></el-option>        
              <el-option label="Fluorescent" value="Fluorescent"></el-option>        
              <el-option label="Monitor" value="Monitor"></el-option>        
              <el-option label="Spotlight" value="Spotlight"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.lightingType }}</span>
          </template>
        </el-table-column>

        <!-- Catalog列 -->
        <el-table-column prop="catalog" label="Catalog">
          <template #header>
            <div>
              Catalog
              <el-select v-model="searchInputs.catalog" placeholder="Select" @change="() => {onCatalogSearchInput('catalog'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyActive || isSellActive || isColor1Active || isColor2Active || isSizeActive || isSourceActive || isSourceNotesActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isInteractActive || isTagActive || isOutdoorActive || isSpeakerTypeActive || isLightingTypeActive">
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
        const response = await axios.get('/api/miscellaneous/materials', { params });
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
      pattern: '',
      patternTitle: '',
      diy: '',
      bodyCustomize: '',
      patternCustomize: '',
      kitCost_min: null,
      kitCost_max: null,
      kitCost_sort: '',
      buy_min: null,
      buy_max: null,
      buy_sort: '',
      sell_min: null,
      sell_max: null,
      sell_sort: '',
      color1: '',
      color2: '',
      size: '',
      source: '',
      sourceNotes: '',
      hhaConcept1: '',
      hhaConcept2: '',
      hhaSeries: '',
      hhaSet: '',
      interact: '',
      tag: '',
      outdoor: '',
      speakerType: '',
      lightingType: '',
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
    const isBodyTitleActive = ref(false);
    const isPatternActive = ref(false);
    const isPatternTitleActive = ref(false);
    const isDiyActive = ref(false);
    const isBodyCustomizeActive = ref(false);
    const isPatternCustomizeActive = ref(false);
    const isKitCostActive = ref(false);
    const isBuyActive = ref(false);
    const isSellActive = ref(false);
    const isColor1Active = ref(false);
    const isColor2Active = ref(false);
    const isSizeActive = ref(false);
    const isSourceActive = ref(false);
    const isSourceNotesActive = ref(false);
    const isHhaConcept1Active = ref(false);
    const isHhaConcept2Active = ref(false);
    const isHhaSeriesActive = ref(false);
    const isHhaSetActive = ref(false);
    const isInteractActive = ref(false);
    const isTagActive = ref(false);
    const isOutdoorActive = ref(false);
    const isSpeakerTypeActive = ref(false);
    const isLightingTypeActive = ref(false);
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

    // 组件创建时从/api/miscellaneous接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/miscellaneous接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/miscellaneous').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/miscellaneous/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/miscellaneous/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/miscellaneous/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchVariation接口获取搜索数据
    const fetchDataFromApiSearchVariation = (query) => {
      axios.get(`/api/miscellaneous/searchVariation?variation=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchBodyTitle接口获取搜索数据
    const fetchDataFromApiSearchBodyTitle = (query) => {
      axios.get(`/api/miscellaneous/searchBodyTitle?bodyTitle=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchPattern接口获取搜索数据
    const fetchDataFromApiSearchPattern = (query) => {
      axios.get(`/api/miscellaneous/searchPattern?pattern=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchPatternTitle接口获取搜索数据
    const fetchDataFromApiSearchPatternTitle = (query) => {
      axios.get(`/api/miscellaneous/searchPatternTitle?patternTitle=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchDiy接口获取搜索数据
    const fetchDataFromApiSearchDiy = (query) => {
      axios.get(`/api/miscellaneous/searchDiy?diy=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchBodyCustomize接口获取搜索数据
    const fetchDataFromApiSearchBodyCustomize = (query) => {
      axios.get(`/api/miscellaneous/searchBodyCustomize?bodyCustomize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchPatternCustomize接口获取搜索数据
    const fetchDataFromApiSearchPatternCustomize = (query) => {
      axios.get(`/api/miscellaneous/searchPatternCustomize?patternCustomize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchKitCost接口获取搜索数据
    const fetchDataFromApiSearchKitCost = (min, max, sort) => {
      axios.get(`/api/miscellaneous/searchKitCost?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchBuy接口获取搜索数据
    const fetchDataFromApiSearchBuy = (min, max, sort) => {
      axios.get(`/api/miscellaneous/searchBuy?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchSell接口获取搜索数据
    const fetchDataFromApiSearchSell = (min, max, sort) => {
      axios.get(`/api/miscellaneous/searchSell?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchColor1接口获取搜索数据
    const fetchDataFromApiSearchColor1 = (query) => {
      axios.get(`/api/miscellaneous/searchColor1?color1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchColor2接口获取搜索数据
    const fetchDataFromApiSearchColor2 = (query) => {
      axios.get(`/api/miscellaneous/searchColor2?color2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchSize接口获取搜索数据
    const fetchDataFromApiSearchSize = (query) => {
      axios.get(`/api/miscellaneous/searchSize?size=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchSource接口获取搜索数据
    const fetchDataFromApiSearchSource = (query) => {
      axios.get(`/api/miscellaneous/searchSource?source=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchSourceNotes接口获取搜索数据
    const fetchDataFromApiSearchSourceNotes = (query) => {
      axios.get(`/api/miscellaneous/searchSourceNotes?sourceNotes=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchHhaConcept1接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept1 = (query) => {
      axios.get(`/api/miscellaneous/searchHhaConcept1?hhaConcept1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchHhaConcept2接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept2 = (query) => {
      axios.get(`/api/miscellaneous/searchHhaConcept2?hhaConcept2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchHhaSeries接口获取搜索数据
    const fetchDataFromApiSearchHhaSeries = (query) => {
      axios.get(`/api/miscellaneous/searchHhaSeries?hhaSeries=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchHhaSet接口获取搜索数据
    const fetchDataFromApiSearchHhaSet = (query) => {
      axios.get(`/api/miscellaneous/searchHhaSet?hhaSet=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchInteract接口获取搜索数据
    const fetchDataFromApiSearchInteract = (query) => {
      axios.get(`/api/miscellaneous/searchInteract?interact=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchTag接口获取搜索数据
    const fetchDataFromApiSearchTag = (query) => {
      axios.get(`/api/miscellaneous/searchTag?tag=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchOutdoor接口获取搜索数据
    const fetchDataFromApiSearchOutdoor = (query) => {
      axios.get(`/api/miscellaneous/searchOutdoor?outdoor=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchSpeakerType接口获取搜索数据
    const fetchDataFromApiSearchSpeakerType = (query) => {
      axios.get(`/api/miscellaneous/searchSpeakerType?speakerType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchLightingType接口获取搜索数据
    const fetchDataFromApiSearchLightingType = (query) => {
      axios.get(`/api/miscellaneous/searchLightingType?lightingType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/miscellaneous/searchCatalog接口获取搜索数据
    const fetchDataFromApiSearchCatalog = (query) => {
      axios.get(`/api/miscellaneous/searchCatalog?catalog=${query}`).then(response => {
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

    const onPatternSearchInput = (column) => {
      if (column === 'pattern' && searchInputs.value.pattern) {
        isPatternActive.value = true;
      } else if (!searchInputs.value.pattern) {
        isPatternActive.value = false;
      }
    };

    const onPatternTitleSearchInput = (column) => {
      if (column === 'patternTitle' && searchInputs.value.patternTitle) {
        isPatternTitleActive.value = true;
      } else if (!searchInputs.value.patternTitle) {
        isPatternTitleActive.value = false;
      }
    };

    const onDiySearchInput = (column) => {
      if (column === 'diy' && searchInputs.value.diy) {
        isDiyActive.value = true;
      } else if (!searchInputs.value.diy) {
        isDiyActive.value = false;
      }
    };

    const onBodyCustomizeSearchInput = (column) => {
      if (column === 'bodyCustomize' && searchInputs.value.bodyCustomize) {
        isBodyCustomizeActive.value = true;
      } else if (!searchInputs.value.bodyCustomize) {
        isBodyCustomizeActive.value = false;
      }
    };

    const onPatternCustomizeSearchInput = (column) => {
      if (column === 'patternCustomize' && searchInputs.value.patternCustomize) {
        isPatternCustomizeActive.value = true;
      } else if (!searchInputs.value.patternCustomize) {
        isPatternCustomizeActive.value = false;
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

    const onSizeSearchInput = (column) => {
      if (column === 'size' && searchInputs.value.size) {
        isSizeActive.value = true;
      } else if (!searchInputs.value.size) {
        isSizeActive.value = false;
      }
    };

    const onSourceSearchInput = (column) => {
      if (column === 'source' && searchInputs.value.source) {
        isSourceActive.value = true;
      } else if (!searchInputs.value.source) {
        isSourceActive.value = false;
      }
    };

    const onSourceNotesSearchInput = (column) => {
      if (column === 'sourceNotes' && searchInputs.value.sourceNotes) {
        isSourceNotesActive.value = true;
      } else if (!searchInputs.value.sourceNotes) {
        isSourceNotesActive.value = false;
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

    const onHhaSetSearchInput = (column) => {
      if (column === 'hhaSet' && searchInputs.value.hhaSet) {
        isHhaSetActive.value = true;
      } else if (!searchInputs.value.hhaSet) {
        isHhaSetActive.value = false;
      }
    };

    const onInteractSearchInput = (column) => {
      if (column === 'interact' && searchInputs.value.interact) {
        isInteractActive.value = true;
      } else if (!searchInputs.value.interact) {
        isInteractActive.value = false;
      }
    };

    const onTagSearchInput = (column) => {
      if (column === 'tag' && searchInputs.value.tag) {
        isTagActive.value = true;
      } else if (!searchInputs.value.tag) {
        isTagActive.value = false;
      }
    };

    const onOutdoorSearchInput = (column) => {
      if (column === 'outdoor' && searchInputs.value.outdoor) {
        isOutdoorActive.value = true;
      } else if (!searchInputs.value.outdoor) {
        isOutdoorActive.value = false;
      }
    };

    const onSpeakerTypeSearchInput = (column) => {
      if (column === 'speakerType' && searchInputs.value.speakerType) {
        isSpeakerTypeActive.value = true;
      } else if (!searchInputs.value.speakerType) {
        isSpeakerTypeActive.value = false;
      }
    };

    const onLightingTypeSearchInput = (column) => {
      if (column === 'lightingType' && searchInputs.value.lightingType) {
        isLightingTypeActive.value = true;
      } else if (!searchInputs.value.lightingType) {
        isLightingTypeActive.value = false;
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

      // 处理 bodyTitle 列的搜索
      else if (searchInputs.value.bodyTitle) {
        fetchDataFromApiSearchBodyTitle(searchInputs.value.bodyTitle);
      }

      // 处理 pattern 列的搜索
      else if (searchInputs.value.pattern) {
        fetchDataFromApiSearchPattern(searchInputs.value.pattern);
      }

      // 处理 patternTitle 列的搜索
      else if (searchInputs.value.patternTitle) {
        fetchDataFromApiSearchPatternTitle(searchInputs.value.patternTitle);
      }

      // 处理 diy 列的搜索
      else if (searchInputs.value.diy) {
        fetchDataFromApiSearchDiy(searchInputs.value.diy);
      }

      // 处理 bodyCustomize 列的搜索
      else if (searchInputs.value.bodyCustomize) {
        fetchDataFromApiSearchBodyCustomize(searchInputs.value.bodyCustomize);
      }

      // 处理 patternCustomize 列的搜索
      else if (searchInputs.value.patternCustomize) {
        fetchDataFromApiSearchPatternCustomize(searchInputs.value.patternCustomize);
      }

      // 处理 kitCost 列的搜索
      else if (searchInputs.value.kitCost_min || searchInputs.value.kitCost_max || searchInputs.value.kitCost_sort ) {
        const min = searchInputs.value.kitCost_min !== null ? searchInputs.value.kitCost_min : '';
        const max = searchInputs.value.kitCost_max !== null ? searchInputs.value.kitCost_max : '';
        const sort = searchInputs.value.kitCost_sort !== null ? searchInputs.value.kitCost_sort : '';
        fetchDataFromApiSearchKitCost(min, max, sort);
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

      // 处理 size 列的搜索
      else if (searchInputs.value.size) {
        fetchDataFromApiSearchSize(searchInputs.value.size);
      }

      // 处理 source 列的搜索
      else if (searchInputs.value.source) {
        fetchDataFromApiSearchSource(searchInputs.value.source);
      }

      // 处理 sourceNotes 列的搜索
      else if (searchInputs.value.sourceNotes) {
        fetchDataFromApiSearchSourceNotes(searchInputs.value.sourceNotes);
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

      // 处理 hhaSet 列的搜索
      else if (searchInputs.value.hhaSet) {
        fetchDataFromApiSearchHhaSet(searchInputs.value.hhaSet);
      }

      // 处理 interact 列的搜索
      else if (searchInputs.value.interact) {
        fetchDataFromApiSearchInteract(searchInputs.value.interact);
      }

      // 处理 tag 列的搜索
      else if (searchInputs.value.tag) {
        fetchDataFromApiSearchTag(searchInputs.value.tag);
      }

      // 处理 outdoor 列的搜索
      else if (searchInputs.value.outdoor) {
        fetchDataFromApiSearchOutdoor(searchInputs.value.outdoor);
      }

      // 处理 speakerType 列的搜索
      else if (searchInputs.value.speakerType) {
        fetchDataFromApiSearchSpeakerType(searchInputs.value.speakerType);
      }

      // 处理 lightingType 列的搜索
      else if (searchInputs.value.lightingType) {
        fetchDataFromApiSearchLightingType(searchInputs.value.lightingType);
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
      isBodyTitleActive.value = false;
      isPatternActive.value = false;
      isPatternTitleActive.value = false;
      isDiyActive.value = false;
      isBodyCustomizeActive.value = false;
      isPatternCustomizeActive.value = false;
      isKitCostActive.value = false;
      searchInputs.value.kitCost_min = null;
      searchInputs.value.kitCost_max = null;
      isBuyActive.value = false;
      searchInputs.value.buy_min = null;
      searchInputs.value.buy_max = null;
      isSellActive.value = false;
      searchInputs.value.sell_min = null;
      searchInputs.value.sell_max = null;
      isColor1Active.value = false;
      isColor2Active.value = false;
      isSizeActive.value = false;
      isSourceActive.value = false;
      isSourceNotesActive.value = false;
      isHhaConcept1Active.value = false;
      isHhaConcept2Active.value = false;
      isHhaSeriesActive.value = false;
      isHhaSetActive.value = false;
      isInteractActive.value = false;
      isTagActive.value = false;
      isOutdoorActive.value = false;
      isSpeakerTypeActive.value = false;
      isLightingTypeActive.value = false;
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
      isBodyTitleActive,
      onBodyTitleSearchInput,
      fetchDataFromApiSearchBodyTitle,
      isPatternActive,
      onPatternSearchInput,
      fetchDataFromApiSearchPattern,
      isPatternTitleActive,
      onPatternTitleSearchInput,
      fetchDataFromApiSearchPatternTitle,
      isDiyActive,
      onDiySearchInput,
      fetchDataFromApiSearchDiy,
      isBodyCustomizeActive,
      onBodyCustomizeSearchInput,
      fetchDataFromApiSearchBodyCustomize,
      isPatternCustomizeActive,
      onPatternCustomizeSearchInput,
      fetchDataFromApiSearchPatternCustomize,
      isKitCostActive,
      onKitCostSearchInput,
      fetchDataFromApiSearchKitCost,
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
      isSizeActive,
      onSizeSearchInput,
      fetchDataFromApiSearchSize,
      isSourceActive,
      onSourceSearchInput,
      fetchDataFromApiSearchSource,
      isSourceNotesActive,
      onSourceNotesSearchInput,
      fetchDataFromApiSearchSourceNotes,
      isHhaConcept1Active,
      onHhaConcept1SearchInput,
      fetchDataFromApiSearchHhaConcept1,
      isHhaConcept2Active,
      onHhaConcept2SearchInput,
      fetchDataFromApiSearchHhaConcept2,
      isHhaSeriesActive,
      onHhaSeriesSearchInput,
      fetchDataFromApiSearchHhaSeries,
      isHhaSetActive,
      onHhaSetSearchInput,
      fetchDataFromApiSearchHhaSet,
      isInteractActive,
      onInteractSearchInput,
      fetchDataFromApiSearchInteract,
      isTagActive,
      onTagSearchInput,
      fetchDataFromApiSearchTag,
      isOutdoorActive,
      onOutdoorSearchInput,
      fetchDataFromApiSearchOutdoor,
      isSpeakerTypeActive,
      onSpeakerTypeSearchInput,
      fetchDataFromApiSearchSpeakerType,
      isLightingTypeActive,
      onLightingTypeSearchInput,
      fetchDataFromApiSearchLightingType,
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
