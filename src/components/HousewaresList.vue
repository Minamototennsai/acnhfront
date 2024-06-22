
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
            <li v-for="housewares in materialslist" :key="housewares.id" class="materials-item">
              <p>{{ housewares.name }} : {{ housewares.numberOfMaterial1 }} {{ housewares.material1 }} {{ housewares.numberOfMaterial2 }} {{ housewares.material2 }} {{ housewares.numberOfMaterial3 }} {{ housewares.material3 }} {{ housewares.numberOfMaterial4 }} {{ housewares.material4 }} {{ housewares.numberOfMaterial5 }} {{ housewares.material5 }} {{ housewares.numberOfMaterial6 }} {{ housewares.material6 }}</p >
            </li>
          </ul>
        </div>
        <div v-else-if="searched">
          <h3>未找到该物品</h3>
        </div>
      </div>


      <h2>
        Housewares
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
              <el-input type="number" min="1" v-model="searchInputs.id" placeholder="Search in Id" @input="onIdSearchInput('id')" @keyup.enter="search" :disabled="isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
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
              <el-input v-model="searchInputs.name" placeholder="Search in Name" @input="onNameSearchInput('name')" @keyup.enter="search" :disabled="isIdActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
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
              <el-input v-model="searchInputs.variation" placeholder="Search in Variation" @input="onVariationSearchInput('variation')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
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
              <el-select v-model="searchInputs.bodyTitle" placeholder="Select" @change="() => {onBodyTitleSearchInput('bodyTitle'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Bamboo" value="Bamboo"></el-option>        
              <el-option label="Barrel color" value="Barrel color"></el-option>        
              <el-option label="Block color" value="Block color"></el-option>        
              <el-option label="Body" value="Body"></el-option>        
              <el-option label="Body color" value="Body color"></el-option>        
              <el-option label="Brick color" value="Brick color"></el-option>        
              <el-option label="Cardboard" value="Cardboard"></el-option>        
              <el-option label="Chair back and seat" value="Chair back and seat"></el-option>        
              <el-option label="Coating" value="Coating"></el-option>        
              <el-option label="Color" value="Color"></el-option>        
              <el-option label="Cover design" value="Cover design"></el-option>        
              <el-option label="Design" value="Design"></el-option>        
              <el-option label="Easel" value="Easel"></el-option>        
              <el-option label="Fabric" value="Fabric"></el-option>        
              <el-option label="Flower color" value="Flower color"></el-option>        
              <el-option label="Food" value="Food"></el-option>        
              <el-option label="Frame" value="Frame"></el-option>        
              <el-option label="Fruit type" value="Fruit type"></el-option>        
              <el-option label="Hay condition" value="Hay condition"></el-option>        
              <el-option label="Illumination" value="Illumination"></el-option>        
              <el-option label="Knit-cap color" value="Knit-cap color"></el-option>        
              <el-option label="Light color" value="Light color"></el-option>        
              <el-option label="Lumber type" value="Lumber type"></el-option>        
              <el-option label="Mushroom type" value="Mushroom type"></el-option>        
              <el-option label="Navigation" value="Navigation"></el-option>        
              <el-option label="Nut color" value="Nut color"></el-option>        
              <el-option label="Paint color" value="Paint color"></el-option>        
              <el-option label="Plate color" value="Plate color"></el-option>        
              <el-option label="Roof color" value="Roof color"></el-option>        
              <el-option label="Season" value="Season"></el-option>        
              <el-option label="Shell color" value="Shell color"></el-option>        
              <el-option label="Sign" value="Sign"></el-option>        
              <el-option label="Stone" value="Stone"></el-option>        
              <el-option label="Tabletop" value="Tabletop"></el-option>        
              <el-option label="Tire color" value="Tire color"></el-option>        
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
              <el-select v-model="searchInputs.pattern" placeholder="Select" @change="() => {onPatternSearchInput('pattern'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Ad" value="Ad"></el-option>        
              <el-option label="Azuki red" value="Azuki red"></el-option>        
              <el-option label="Bear" value="Bear"></el-option>        
              <el-option label="Bears" value="Bears"></el-option>        
              <el-option label="Beige" value="Beige"></el-option>        
              <el-option label="Black" value="Black"></el-option>        
              <el-option label="Black retro" value="Black retro"></el-option>        
              <el-option label="Black stripes" value="Black stripes"></el-option>        
              <el-option label="Black with logo" value="Black with logo"></el-option>        
              <el-option label="Blue" value="Blue"></el-option>        
              <el-option label="Blue stripes" value="Blue stripes"></el-option>        
              <el-option label="Blue-gray" value="Blue-gray"></el-option>        
              <el-option label="Brown" value="Brown"></el-option>        
              <el-option label="Butterfly" value="Butterfly"></el-option>        
              <el-option label="Camellia" value="Camellia"></el-option>        
              <el-option label="Camouflage" value="Camouflage"></el-option>        
              <el-option label="Carrot" value="Carrot"></el-option>        
              <el-option label="Chain print" value="Chain print"></el-option>        
              <el-option label="Checkered" value="Checkered"></el-option>        
              <el-option label="Chic logo" value="Chic logo"></el-option>        
              <el-option label="Chic pleather" value="Chic pleather"></el-option>        
              <el-option label="Colorful" value="Colorful"></el-option>        
              <el-option label="Colorful lines" value="Colorful lines"></el-option>        
              <el-option label="Concrete" value="Concrete"></el-option>        
              <el-option label="Cool" value="Cool"></el-option>        
              <el-option label="Crane" value="Crane"></el-option>        
              <el-option label="Cute" value="Cute"></el-option>        
              <el-option label="Cute logo" value="Cute logo"></el-option>        
              <el-option label="Cyan zigzags" value="Cyan zigzags"></el-option>        
              <el-option label="Dark brown" value="Dark brown"></el-option>        
              <el-option label="Dark wood" value="Dark wood"></el-option>        
              <el-option label="Deep blue" value="Deep blue"></el-option>        
              <el-option label="Deep green" value="Deep green"></el-option>        
              <el-option label="Director black" value="Director black"></el-option>        
              <el-option label="Dots" value="Dots"></el-option>        
              <el-option label="Emblem logo" value="Emblem logo"></el-option>        
              <el-option label="Essays" value="Essays"></el-option>        
              <el-option label="Fall" value="Fall"></el-option>        
              <el-option label="Familiar logo" value="Familiar logo"></el-option>        
              <el-option label="Fish" value="Fish"></el-option>        
              <el-option label="Floral" value="Floral"></el-option>        
              <el-option label="Flowers" value="Flowers"></el-option>        
              <el-option label="Fruits" value="Fruits"></el-option>        
              <el-option label="Geometric print" value="Geometric print"></el-option>        
              <el-option label="Giant dots" value="Giant dots"></el-option>        
              <el-option label="Giant stripes" value="Giant stripes"></el-option>        
              <el-option label="Glossy black" value="Glossy black"></el-option>        
              <el-option label="Gold" value="Gold"></el-option>        
              <el-option label="Goldfish" value="Goldfish"></el-option>        
              <el-option label="Gray" value="Gray"></el-option>        
              <el-option label="Green" value="Green"></el-option>        
              <el-option label="Green design" value="Green design"></el-option>        
              <el-option label="Green plaid" value="Green plaid"></el-option>        
              <el-option label="Green stripes" value="Green stripes"></el-option>        
              <el-option label="Green with animal" value="Green with animal"></el-option>        
              <el-option label="Handwritten logo" value="Handwritten logo"></el-option>        
              <el-option label="Hibiscus flowers" value="Hibiscus flowers"></el-option>        
              <el-option label="Horizontal planks" value="Horizontal planks"></el-option>        
              <el-option label="Illustrations" value="Illustrations"></el-option>        
              <el-option label="Indigo" value="Indigo"></el-option>        
              <el-option label="Lattice" value="Lattice"></el-option>        
              <el-option label="Leaves" value="Leaves"></el-option>        
              <el-option label="Light blue" value="Light blue"></el-option>        
              <el-option label="Light green" value="Light green"></el-option>        
              <el-option label="Light wood" value="Light wood"></el-option>        
              <el-option label="Lined panel" value="Lined panel"></el-option>        
              <el-option label="Manuscript paper" value="Manuscript paper"></el-option>        
              <el-option label="Message" value="Message"></el-option>        
              <el-option label="Moss green" value="Moss green"></el-option>        
              <el-option label="Mud wall" value="Mud wall"></el-option>        
              <el-option label="Mustard yellow" value="Mustard yellow"></el-option>        
              <el-option label="Natural white" value="Natural white"></el-option>        
              <el-option label="Natural wood" value="Natural wood"></el-option>        
              <el-option label="Navy" value="Navy"></el-option>        
              <el-option label="Navy design" value="Navy design"></el-option>        
              <el-option label="Notes" value="Notes"></el-option>        
              <el-option label="Notices" value="Notices"></el-option>        
              <el-option label="Orange" value="Orange"></el-option>        
              <el-option label="Orange design" value="Orange design"></el-option>        
              <el-option label="Orange juice" value="Orange juice"></el-option>        
              <el-option label="Pale grass green" value="Pale grass green"></el-option>        
              <el-option label="Paw print" value="Paw print"></el-option>        
              <el-option label="PE shirt" value="PE shirt"></el-option>        
              <el-option label="Peach" value="Peach"></el-option>        
              <el-option label="Pegboard" value="Pegboard"></el-option>        
              <el-option label="Pet" value="Pet"></el-option>        
              <el-option label="Pink" value="Pink"></el-option>        
              <el-option label="Plain" value="Plain"></el-option>        
              <el-option label="Plain panel" value="Plain panel"></el-option>        
              <el-option label="Plans" value="Plans"></el-option>        
              <el-option label="Polka dots" value="Polka dots"></el-option>        
              <el-option label="Pop" value="Pop"></el-option>        
              <el-option label="Pop logo" value="Pop logo"></el-option>        
              <el-option label="Purple" value="Purple"></el-option>        
              <el-option label="Quilted" value="Quilted"></el-option>        
              <el-option label="Red" value="Red"></el-option>        
              <el-option label="Red & white & blue" value="Red & white & blue"></el-option>        
              <el-option label="Red plaid" value="Red plaid"></el-option>        
              <el-option label="Red stripes" value="Red stripes"></el-option>        
              <el-option label="Reese & Cyrus" value="Reese & Cyrus"></el-option>        
              <el-option label="Rock" value="Rock"></el-option>        
              <el-option label="Rock logo" value="Rock logo"></el-option>        
              <el-option label="Sale" value="Sale"></el-option>        
              <el-option label="Shell pink" value="Shell pink"></el-option>        
              <el-option label="Shells" value="Shells"></el-option>        
              <el-option label="Smooth white" value="Smooth white"></el-option>        
              <el-option label="Southwestern flair" value="Southwestern flair"></el-option>        
              <el-option label="Space" value="Space"></el-option>        
              <el-option label="Sports drink" value="Sports drink"></el-option>        
              <el-option label="Spring" value="Spring"></el-option>        
              <el-option label="Strawberry" value="Strawberry"></el-option>        
              <el-option label="Striped" value="Striped"></el-option>        
              <el-option label="Stripes" value="Stripes"></el-option>        
              <el-option label="Summer" value="Summer"></el-option>        
              <el-option label="Tic-tac-toe pattern" value="Tic-tac-toe pattern"></el-option>        
              <el-option label="Train" value="Train"></el-option>        
              <el-option label="Triangles" value="Triangles"></el-option>        
              <el-option label="Vintage logo" value="Vintage logo"></el-option>        
              <el-option label="Wanted" value="Wanted"></el-option>        
              <el-option label="Warning" value="Warning"></el-option>        
              <el-option label="Waves" value="Waves"></el-option>        
              <el-option label="Well-used" value="Well-used"></el-option>        
              <el-option label="White" value="White"></el-option>        
              <el-option label="White with logo" value="White with logo"></el-option>        
              <el-option label="Winter" value="Winter"></el-option>        
              <el-option label="Wood" value="Wood"></el-option>        
              <el-option label="Yellow" value="Yellow"></el-option>        
              <el-option label="Yellow design" value="Yellow design"></el-option>        
              <el-option label="Yellow oil" value="Yellow oil"></el-option>        
              <el-option label="Yellow stripes" value="Yellow stripes"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
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
              <el-select v-model="searchInputs.patternTitle" placeholder="Select" @change="() => {onPatternTitleSearchInput('patternTitle'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Advertisement panel" value="Advertisement panel"></el-option>        
              <el-option label="Bass drum head" value="Bass drum head"></el-option>        
              <el-option label="Bed mat" value="Bed mat"></el-option>        
              <el-option label="Bedding" value="Bedding"></el-option>        
              <el-option label="Blanket" value="Blanket"></el-option>        
              <el-option label="Cloth" value="Cloth"></el-option>        
              <el-option label="Curtain" value="Curtain"></el-option>        
              <el-option label="Cushion" value="Cushion"></el-option>        
              <el-option label="Cushions" value="Cushions"></el-option>        
              <el-option label="Design" value="Design"></el-option>        
              <el-option label="Drying shirt" value="Drying shirt"></el-option>        
              <el-option label="Fabric" value="Fabric"></el-option>        
              <el-option label="Favorite umbrella" value="Favorite umbrella"></el-option>        
              <el-option label="Flag" value="Flag"></el-option>        
              <el-option label="Flier" value="Flier"></el-option>        
              <el-option label="Ironing board" value="Ironing board"></el-option>        
              <el-option label="Kimono" value="Kimono"></el-option>        
              <el-option label="Knitting" value="Knitting"></el-option>        
              <el-option label="Lamp" value="Lamp"></el-option>        
              <el-option label="Lampshade" value="Lampshade"></el-option>        
              <el-option label="Mat" value="Mat"></el-option>        
              <el-option label="Panel design" value="Panel design"></el-option>        
              <el-option label="Paper" value="Paper"></el-option>        
              <el-option label="Pillow" value="Pillow"></el-option>        
              <el-option label="Placemats" value="Placemats"></el-option>        
              <el-option label="Ribbon" value="Ribbon"></el-option>        
              <el-option label="Ring curtain" value="Ring curtain"></el-option>        
              <el-option label="Screen" value="Screen"></el-option>        
              <el-option label="Seat" value="Seat"></el-option>        
              <el-option label="Shawl" value="Shawl"></el-option>        
              <el-option label="Shirt" value="Shirt"></el-option>        
              <el-option label="Sticker area" value="Sticker area"></el-option>        
              <el-option label="Table" value="Table"></el-option>        
              <el-option label="Tablecloth" value="Tablecloth"></el-option>        
              <el-option label="Towel" value="Towel"></el-option>        
              <el-option label="Tray" value="Tray"></el-option>        
              <el-option label="Upholstery" value="Upholstery"></el-option>        
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
              <el-select v-model="searchInputs.diy" placeholder="Select" @change="() => {onDiySearchInput('diy'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.bodyCustomize" placeholder="Select" @change="() => {onBodyCustomizeSearchInput('bodyCustomize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.patternCustomize" placeholder="Select" @change="() => {onPatternCustomizeSearchInput('patternCustomize'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_min" placeholder="Min" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.kitCost_max" placeholder="Max" @input="onKitCostSearchInput('kitCost')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-select v-model="searchInputs.kitCost_sort" placeholder="Sort" @change="() => {onKitCostSearchInput('kitCost'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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

        <!-- Buy Price列 -->
        <el-table-column prop="buyPrice" label="Buy Price">
          <template #header>
            <div>
              Buy Price
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.buyPrice_min" placeholder="Min" @input="onBuyPriceSearchInput('buyPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.buyPrice_max" placeholder="Max" @input="onBuyPriceSearchInput('buyPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-select v-model="searchInputs.buyPrice_sort" placeholder="Sort" @change="() => {onBuyPriceSearchInput('buyPrice'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.buyPrice }}</span>
          </template>
        </el-table-column>

        <!-- Sell Price列 -->
        <el-table-column prop="sellPrice" label="Sell Price">
          <template #header>
            <div>
              Sell Price
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.sellPrice_min" placeholder="Min" @input="onSellPriceSearchInput('sellPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.sellPrice_max" placeholder="Max" @input="onSellPriceSearchInput('sellPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-select v-model="searchInputs.sellPrice_sort" placeholder="Sort" @change="() => {onSellPriceSearchInput('sellPrice'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
                  <el-option label="不排序" value=""></el-option>
                  <el-option label="升序" value="asc"></el-option>
                  <el-option label="降序" value="desc"></el-option>
                </el-select>
              </div>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.sellPrice }}</span>
          </template>
        </el-table-column>

        <!-- Miles Price列 -->
        <el-table-column prop="milesPrice" label="Miles Price">
          <template #header>
            <div>
              Miles Price
              <div>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_min" placeholder="Min" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-input type="number" min="0" v-model.number="searchInputs.milesPrice_max" placeholder="Max" @input="onMilesPriceSearchInput('milesPrice')" @keyup.enter="search" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive"></el-input>
                <el-select v-model="searchInputs.milesPrice_sort" placeholder="Sort" @change="() => {onMilesPriceSearchInput('milesPrice'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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

        <!-- Color1列 -->
        <el-table-column prop="color1" label="Color1">
          <template #header>
            <div>
              Color1
              <el-select v-model="searchInputs.color1" placeholder="Select" @change="() => {onColor1SearchInput('color1'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.color2" placeholder="Select" @change="() => {onColor2SearchInput('color2'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.size" placeholder="Select" @change="() => {onSizeSearchInput('size'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="1x0.5" value="1x0.5"></el-option>        
              <el-option label="1x1" value="1x1"></el-option>        
              <el-option label="1.5x1.5" value="1.5x1.5"></el-option>        
              <el-option label="2x0.5" value="2x0.5"></el-option>        
              <el-option label="2x1" value="2x1"></el-option>        
              <el-option label="2x2" value="2x2"></el-option>        
              <el-option label="3x1" value="3x1"></el-option>        
              <el-option label="3x2" value="3x2"></el-option>        
              <el-option label="3x3" value="3x3"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.size }}</span>
          </template>
        </el-table-column>

        <!-- Interact列 -->
        <el-table-column prop="interact" label="Interact">
          <template #header>
            <div>
              Interact
              <el-select v-model="searchInputs.interact" placeholder="Select" @change="() => {onInteractSearchInput('interact'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.tag" placeholder="Select" @change="() => {onTagSearchInput('tag'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Animal" value="Animal"></el-option>        
              <el-option label="Arch" value="Arch"></el-option>        
              <el-option label="Audio" value="Audio"></el-option>        
              <el-option label="Bathroom Things" value="Bathroom Things"></el-option>        
              <el-option label="Bathtub" value="Bathtub"></el-option>        
              <el-option label="Bed" value="Bed"></el-option>        
              <el-option label="Chair" value="Chair"></el-option>        
              <el-option label="Chest" value="Chest"></el-option>        
              <el-option label="Clock" value="Clock"></el-option>        
              <el-option label="Compass" value="Compass"></el-option>        
              <el-option label="Desk" value="Desk"></el-option>        
              <el-option label="Dresser" value="Dresser"></el-option>        
              <el-option label="Easter" value="Easter"></el-option>        
              <el-option label="Facility Decor" value="Facility Decor"></el-option>        
              <el-option label="Fan" value="Fan"></el-option>        
              <el-option label="Fireplace" value="Fireplace"></el-option>        
              <el-option label="Fish" value="Fish"></el-option>        
              <el-option label="Folk Craft Decor" value="Folk Craft Decor"></el-option>        
              <el-option label="Garden" value="Garden"></el-option>        
              <el-option label="Heating" value="Heating"></el-option>        
              <el-option label="Home Appliances" value="Home Appliances"></el-option>        
              <el-option label="Hospital" value="Hospital"></el-option>        
              <el-option label="Insect" value="Insect"></el-option>        
              <el-option label="Japanese Style" value="Japanese Style"></el-option>        
              <el-option label="Kitchen" value="Kitchen"></el-option>        
              <el-option label="Kitchen Things" value="Kitchen Things"></el-option>        
              <el-option label="Lamp" value="Lamp"></el-option>        
              <el-option label="Musical Instrument" value="Musical Instrument"></el-option>        
              <el-option label="Office" value="Office"></el-option>        
              <el-option label="Outdoors Decor" value="Outdoors Decor"></el-option>        
              <el-option label="Plants" value="Plants"></el-option>        
              <el-option label="Playground" value="Playground"></el-option>        
              <el-option label="Ranch" value="Ranch"></el-option>        
              <el-option label="School" value="School"></el-option>        
              <el-option label="Screen" value="Screen"></el-option>        
              <el-option label="Seaside" value="Seaside"></el-option>        
              <el-option label="Seasonal Decor" value="Seasonal Decor"></el-option>        
              <el-option label="Sewing Table" value="Sewing Table"></el-option>        
              <el-option label="Shelf" value="Shelf"></el-option>        
              <el-option label="Shop" value="Shop"></el-option>        
              <el-option label="Sofa" value="Sofa"></el-option>        
              <el-option label="Space" value="Space"></el-option>        
              <el-option label="Sports" value="Sports"></el-option>        
              <el-option label="Study" value="Study"></el-option>        
              <el-option label="Supplies" value="Supplies"></el-option>        
              <el-option label="Table" value="Table"></el-option>        
              <el-option label="Toilet" value="Toilet"></el-option>        
              <el-option label="Toy" value="Toy"></el-option>        
              <el-option label="Vehicle" value="Vehicle"></el-option>        
              <el-option label="Work Bench" value="Work Bench"></el-option>        
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
              <el-select v-model="searchInputs.outdoor" placeholder="Select" @change="() => {onOutdoorSearchInput('outdoor'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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

        <!-- Source列 -->
        <el-table-column prop="source" label="Source">
          <template #header>
            <div>
              Source
              <el-select v-model="searchInputs.source" placeholder="Select" @change="() => {onSourceSearchInput('source'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Birthday" value="Birthday"></el-option>        
              <el-option label="Bug-Off" value="Bug-Off"></el-option>        
              <el-option label="C.J." value="C.J."></el-option>        
              <el-option label="Crafting" value="Crafting"></el-option>        
              <el-option label="Fishing Tourney" value="Fishing Tourney"></el-option>        
              <el-option label="Flick" value="Flick"></el-option>        
              <el-option label="Gulliver" value="Gulliver"></el-option>        
              <el-option label="Nook Miles Shop" value="Nook Miles Shop"></el-option>        
              <el-option label="Nook Shopping Promotion" value="Nook Shopping Promotion"></el-option>        
              <el-option label="Nook's Cranny" value="Nook's Cranny"></el-option>        
              <el-option label="Snowman" value="Snowman"></el-option>        
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
            Source Notes
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
              <el-select v-model="searchInputs.hhaConcept1" placeholder="Select" @change="() => {onHhaConcept1SearchInput('hhaConcept1'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
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
              <el-select v-model="searchInputs.hhaConcept2" placeholder="Select" @change="() => {onHhaConcept2SearchInput('hhaConcept2'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="bathroom" value="bathroom"></el-option>        
              <el-option label="child's room" value="child's room"></el-option>        
              <el-option label="concert" value="concert"></el-option>        
              <el-option label="expensive" value="expensive"></el-option>        
              <el-option label="facility" value="facility"></el-option>        
              <el-option label="fancy" value="fancy"></el-option>        
              <el-option label="fitness" value="fitness"></el-option>        
              <el-option label="garage" value="garage"></el-option>        
              <el-option label="garden" value="garden"></el-option>        
              <el-option label="horror" value="horror"></el-option>        
              <el-option label="living room" value="living room"></el-option>        
              <el-option label="music" value="music"></el-option>        
              <el-option label="office" value="office"></el-option>        
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
            <span>{{ row.hhaConcept2 }}</span>
          </template>
        </el-table-column>

        <!-- Hha Series列 -->
        <el-table-column prop="hhaSeries" label="Hha Series">
          <template #header>
            <div>
              Hha Series
              <el-select v-model="searchInputs.hhaSeries" placeholder="Select" @change="() => {onHhaSeriesSearchInput('hhaSeries'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSetActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="antique" value="antique"></el-option>        
              <el-option label="bamboo" value="bamboo"></el-option>        
              <el-option label="Bunny Day" value="Bunny Day"></el-option>        
              <el-option label="cardboard" value="cardboard"></el-option>        
              <el-option label="cherry blossoms" value="cherry blossoms"></el-option>        
              <el-option label="cute" value="cute"></el-option>        
              <el-option label="diner" value="diner"></el-option>        
              <el-option label="festive" value="festive"></el-option>        
              <el-option label="flowers" value="flowers"></el-option>        
              <el-option label="frozen" value="frozen"></el-option>        
              <el-option label="fruits" value="fruits"></el-option>        
              <el-option label="golden" value="golden"></el-option>        
              <el-option label="iron" value="iron"></el-option>        
              <el-option label="ironwood" value="ironwood"></el-option>        
              <el-option label="log" value="log"></el-option>        
              <el-option label="mush" value="mush"></el-option>        
              <el-option label="rattan" value="rattan"></el-option>        
              <el-option label="shell" value="shell"></el-option>        
              <el-option label="stars" value="stars"></el-option>        
              <el-option label="throwback" value="throwback"></el-option>        
              <el-option label="tree's bounty or leaves" value="tree's bounty or leaves"></el-option>        
              <el-option label="wedding" value="wedding"></el-option>        
              <el-option label="wooden" value="wooden"></el-option>        
              <el-option label="wooden block" value="wooden block"></el-option>        
              <el-option label="zen" value="zen"></el-option>        
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
              <el-select v-model="searchInputs.hhaSet" placeholder="Select" @change="() => {onHhaSetSearchInput('hhaSet'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isSpeakerTypeActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="apple" value="apple"></el-option>        
              <el-option label="bear" value="bear"></el-option>        
              <el-option label="birthday" value="birthday"></el-option>        
              <el-option label="den" value="den"></el-option>        
              <el-option label="imperial dining" value="imperial dining"></el-option>        
              <el-option label="lecture hall" value="lecture hall"></el-option>        
              <el-option label="natural" value="natural"></el-option>        
              <el-option label="office" value="office"></el-option>        
              <el-option label="orange" value="orange"></el-option>        
              <el-option label="panda" value="panda"></el-option>        
              <el-option label="peach" value="peach"></el-option>        
              <el-option label="pear" value="pear"></el-option>        
              <el-option label="pet" value="pet"></el-option>        
              <el-option label="school" value="school"></el-option>        
              <el-option label="sports ring" value="sports ring"></el-option>        
              <el-option label="standee" value="standee"></el-option>        
              <el-option label="stone" value="stone"></el-option>        
              <el-option label="writing" value="writing"></el-option>        
              <el-option label="None" value="None"></el-option>        
            </el-select>
            </div>
          </template>
          <template #default="{ row }">
            <span>{{ row.hhaSet }}</span>
          </template>
        </el-table-column>

        <!-- Speaker Type列 -->
        <el-table-column prop="speakerType" label="Speaker Type">
          <template #header>
            <div>
              Speaker Type
              <el-select v-model="searchInputs.speakerType" placeholder="Select" @change="() => {onSpeakerTypeSearchInput('speakerType'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isLightingTypeActive">
              <el-option label="Null" value=""></el-option>
              <el-option label="Does not play music" value="Does not play music"></el-option>        
              <el-option label="Hi-fi" value="Hi-fi"></el-option>        
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
              <el-select v-model="searchInputs.lightingType" placeholder="Select" @change="() => {onLightingTypeSearchInput('lightingType'); search()}" :disabled="isIdActive || isNameActive || isVariationActive || isBodyTitleActive || isPatternActive || isPatternTitleActive || isDiyActive || isBodyCustomizeActive || isPatternCustomizeActive || isKitCostActive || isBuyPriceActive || isSellPriceActive || isMilesPriceActive || isColor1Active || isColor2Active || isSizeActive || isInteractActive || isTagActive || isOutdoorActive || isSourceActive || isHhaConcept1Active || isHhaConcept2Active || isHhaSeriesActive || isHhaSetActive || isSpeakerTypeActive">
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
        const response = await axios.get('/api/housewares/materials', { params });
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
      buyPrice_min: null,
      buyPrice_max: null,
      buyPrice_sort: '',
      sellPrice_min: null,
      sellPrice_max: null,
      sellPrice_sort: '',
      milesPrice_min: null,
      milesPrice_max: null,
      milesPrice_sort: '',
      color1: '',
      color2: '',
      size: '',
      interact: '',
      tag: '',
      outdoor: '',
      source: '',
      hhaConcept1: '',
      hhaConcept2: '',
      hhaSeries: '',
      hhaSet: '',
      speakerType: '',
      lightingType: '',
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
    const isBuyPriceActive = ref(false);
    const isSellPriceActive = ref(false);
    const isMilesPriceActive = ref(false);
    const isColor1Active = ref(false);
    const isColor2Active = ref(false);
    const isSizeActive = ref(false);
    const isInteractActive = ref(false);
    const isTagActive = ref(false);
    const isOutdoorActive = ref(false);
    const isSourceActive = ref(false);
    const isHhaConcept1Active = ref(false);
    const isHhaConcept2Active = ref(false);
    const isHhaSeriesActive = ref(false);
    const isHhaSetActive = ref(false);
    const isSpeakerTypeActive = ref(false);
    const isLightingTypeActive = ref(false);

    
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

    // 组件创建时从/api/housewares接口获取初始数据
    onMounted(() => {
      fetchAllData();
    });
    
    // 从/api/housewares接口获取初始数据
    const fetchAllData = () => {
      axios.get('/api/housewares').then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
      });
    };    

    // 从/api/housewares/{id}接口获取搜索数据
    const fetchDataFromApiGetById = (query) => {
      axios.get(`/api/housewares/${query}`).then(response => {
        tableData.value = [response.data];
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/findByName接口获取搜索数据
    const fetchDataFromApiFindByName = (query) => {
      axios.get(`/api/housewares/findByName?name=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchVariation接口获取搜索数据
    const fetchDataFromApiSearchVariation = (query) => {
      axios.get(`/api/housewares/searchVariation?variation=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchBodyTitle接口获取搜索数据
    const fetchDataFromApiSearchBodyTitle = (query) => {
      axios.get(`/api/housewares/searchBodyTitle?bodyTitle=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchPattern接口获取搜索数据
    const fetchDataFromApiSearchPattern = (query) => {
      axios.get(`/api/housewares/searchPattern?pattern=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchPatternTitle接口获取搜索数据
    const fetchDataFromApiSearchPatternTitle = (query) => {
      axios.get(`/api/housewares/searchPatternTitle?patternTitle=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchDiy接口获取搜索数据
    const fetchDataFromApiSearchDiy = (query) => {
      axios.get(`/api/housewares/searchDiy?diy=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchBodyCustomize接口获取搜索数据
    const fetchDataFromApiSearchBodyCustomize = (query) => {
      axios.get(`/api/housewares/searchBodyCustomize?bodyCustomize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchPatternCustomize接口获取搜索数据
    const fetchDataFromApiSearchPatternCustomize = (query) => {
      axios.get(`/api/housewares/searchPatternCustomize?patternCustomize=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchKitCost接口获取搜索数据
    const fetchDataFromApiSearchKitCost = (min, max, sort) => {
      axios.get(`/api/housewares/searchKitCost?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchBuyPrice接口获取搜索数据
    const fetchDataFromApiSearchBuyPrice = (min, max, sort) => {
      axios.get(`/api/housewares/searchBuyPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchSellPrice接口获取搜索数据
    const fetchDataFromApiSearchSellPrice = (min, max, sort) => {
      axios.get(`/api/housewares/searchSellPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchMilesPrice接口获取搜索数据
    const fetchDataFromApiSearchMilesPrice = (min, max, sort) => {
      axios.get(`/api/housewares/searchMilesPrice?min=${min}&max=${max}&sort=${sort}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length;
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchColor1接口获取搜索数据
    const fetchDataFromApiSearchColor1 = (query) => {
      axios.get(`/api/housewares/searchColor1?color1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchColor2接口获取搜索数据
    const fetchDataFromApiSearchColor2 = (query) => {
      axios.get(`/api/housewares/searchColor2?color2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchSize接口获取搜索数据
    const fetchDataFromApiSearchSize = (query) => {
      axios.get(`/api/housewares/searchSize?size=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchInteract接口获取搜索数据
    const fetchDataFromApiSearchInteract = (query) => {
      axios.get(`/api/housewares/searchInteract?interact=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchTag接口获取搜索数据
    const fetchDataFromApiSearchTag = (query) => {
      axios.get(`/api/housewares/searchTag?tag=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchOutdoor接口获取搜索数据
    const fetchDataFromApiSearchOutdoor = (query) => {
      axios.get(`/api/housewares/searchOutdoor?outdoor=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchSource接口获取搜索数据
    const fetchDataFromApiSearchSource = (query) => {
      axios.get(`/api/housewares/searchSource?source=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchHhaConcept1接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept1 = (query) => {
      axios.get(`/api/housewares/searchHhaConcept1?hhaConcept1=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchHhaConcept2接口获取搜索数据
    const fetchDataFromApiSearchHhaConcept2 = (query) => {
      axios.get(`/api/housewares/searchHhaConcept2?hhaConcept2=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchHhaSeries接口获取搜索数据
    const fetchDataFromApiSearchHhaSeries = (query) => {
      axios.get(`/api/housewares/searchHhaSeries?hhaSeries=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchHhaSet接口获取搜索数据
    const fetchDataFromApiSearchHhaSet = (query) => {
      axios.get(`/api/housewares/searchHhaSet?hhaSet=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchSpeakerType接口获取搜索数据
    const fetchDataFromApiSearchSpeakerType = (query) => {
      axios.get(`/api/housewares/searchSpeakerType?speakerType=${query}`).then(response => {
        tableData.value = response.data;
        total.value = tableData.value.length; 
        currentPage.value = 1; 
      });
    };

    // 从/api/housewares/searchLightingType接口获取搜索数据
    const fetchDataFromApiSearchLightingType = (query) => {
      axios.get(`/api/housewares/searchLightingType?lightingType=${query}`).then(response => {
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

    const onBuyPriceSearchInput = (column) => {
      if (column === 'buyPrice') {
        if (searchInputs.value.buyPrice_min ||
          searchInputs.value.buyPrice_max ||
          searchInputs.value.buyPrice_sort) {
          isBuyPriceActive.value = true;
        } else {
          isBuyPriceActive.value = false;
        }
      }
    };

    const onSellPriceSearchInput = (column) => {
      if (column === 'sellPrice') {
        if (searchInputs.value.sellPrice_min ||
          searchInputs.value.sellPrice_max ||
          searchInputs.value.sellPrice_sort) {
          isSellPriceActive.value = true;
        } else {
          isSellPriceActive.value = false;
        }
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

    const onSourceSearchInput = (column) => {
      if (column === 'source' && searchInputs.value.source) {
        isSourceActive.value = true;
      } else if (!searchInputs.value.source) {
        isSourceActive.value = false;
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

      // 处理 buyPrice 列的搜索
      else if (searchInputs.value.buyPrice_min || searchInputs.value.buyPrice_max || searchInputs.value.buyPrice_sort ) {
        const min = searchInputs.value.buyPrice_min !== null ? searchInputs.value.buyPrice_min : '';
        const max = searchInputs.value.buyPrice_max !== null ? searchInputs.value.buyPrice_max : '';
        const sort = searchInputs.value.buyPrice_sort !== null ? searchInputs.value.buyPrice_sort : '';
        fetchDataFromApiSearchBuyPrice(min, max, sort);
      }

      // 处理 sellPrice 列的搜索
      else if (searchInputs.value.sellPrice_min || searchInputs.value.sellPrice_max || searchInputs.value.sellPrice_sort ) {
        const min = searchInputs.value.sellPrice_min !== null ? searchInputs.value.sellPrice_min : '';
        const max = searchInputs.value.sellPrice_max !== null ? searchInputs.value.sellPrice_max : '';
        const sort = searchInputs.value.sellPrice_sort !== null ? searchInputs.value.sellPrice_sort : '';
        fetchDataFromApiSearchSellPrice(min, max, sort);
      }

      // 处理 milesPrice 列的搜索
      else if (searchInputs.value.milesPrice_min || searchInputs.value.milesPrice_max || searchInputs.value.milesPrice_sort ) {
        const min = searchInputs.value.milesPrice_min !== null ? searchInputs.value.milesPrice_min : '';
        const max = searchInputs.value.milesPrice_max !== null ? searchInputs.value.milesPrice_max : '';
        const sort = searchInputs.value.milesPrice_sort !== null ? searchInputs.value.milesPrice_sort : '';
        fetchDataFromApiSearchMilesPrice(min, max, sort);
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

      // 处理 source 列的搜索
      else if (searchInputs.value.source) {
        fetchDataFromApiSearchSource(searchInputs.value.source);
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

      // 处理 speakerType 列的搜索
      else if (searchInputs.value.speakerType) {
        fetchDataFromApiSearchSpeakerType(searchInputs.value.speakerType);
      }

      // 处理 lightingType 列的搜索
      else if (searchInputs.value.lightingType) {
        fetchDataFromApiSearchLightingType(searchInputs.value.lightingType);
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
      isBuyPriceActive.value = false;
      searchInputs.value.buyPrice_min = null;
      searchInputs.value.buyPrice_max = null;
      isSellPriceActive.value = false;
      searchInputs.value.sellPrice_min = null;
      searchInputs.value.sellPrice_max = null;
      isMilesPriceActive.value = false;
      searchInputs.value.milesPrice_min = null;
      searchInputs.value.milesPrice_max = null;
      isColor1Active.value = false;
      isColor2Active.value = false;
      isSizeActive.value = false;
      isInteractActive.value = false;
      isTagActive.value = false;
      isOutdoorActive.value = false;
      isSourceActive.value = false;
      isHhaConcept1Active.value = false;
      isHhaConcept2Active.value = false;
      isHhaSeriesActive.value = false;
      isHhaSetActive.value = false;
      isSpeakerTypeActive.value = false;
      isLightingTypeActive.value = false;

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
      isBuyPriceActive,
      onBuyPriceSearchInput,
      fetchDataFromApiSearchBuyPrice,
      isSellPriceActive,
      onSellPriceSearchInput,
      fetchDataFromApiSearchSellPrice,
      isMilesPriceActive,
      onMilesPriceSearchInput,
      fetchDataFromApiSearchMilesPrice,
      isColor1Active,
      onColor1SearchInput,
      fetchDataFromApiSearchColor1,
      isColor2Active,
      onColor2SearchInput,
      fetchDataFromApiSearchColor2,
      isSizeActive,
      onSizeSearchInput,
      fetchDataFromApiSearchSize,
      isInteractActive,
      onInteractSearchInput,
      fetchDataFromApiSearchInteract,
      isTagActive,
      onTagSearchInput,
      fetchDataFromApiSearchTag,
      isOutdoorActive,
      onOutdoorSearchInput,
      fetchDataFromApiSearchOutdoor,
      isSourceActive,
      onSourceSearchInput,
      fetchDataFromApiSearchSource,
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
      isSpeakerTypeActive,
      onSpeakerTypeSearchInput,
      fetchDataFromApiSearchSpeakerType,
      isLightingTypeActive,
      onLightingTypeSearchInput,
      fetchDataFromApiSearchLightingType,
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
