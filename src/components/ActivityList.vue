<template>
  <h2>当前正在活动的生物</h2>
  <div class="activity-list">
    <div class="current-time">
      <h3>当前时间：</h3>
      <div class="current-time">
        <div class="time-selector">
          <el-select v-model="month" placeholder="选择月份" @change="updateActiveCreatures">
            <el-option v-for="(abbr, num) in monthMappings" :key="num" :label="num" :value="abbr"></el-option>
          </el-select>
          月
          <el-select v-model="day" placeholder="选择日期">
            <el-option v-for="d in 31" :key="d" :label="d" :value="d">{{ d }}</el-option>
          </el-select>
          日
          <el-select v-model="hour" placeholder="选择小时" @change="updateActiveCreatures">
            <el-option v-for="h in 24" :key="h-1" :label="h-1" :value="h-1">{{ h-1 }}</el-option>
          </el-select>
          时
        </div>
      </div>
    </div>
    <div>
      <h3>所在半球：</h3>
      <div class="current-time">
        <div style="width: 100px">
          <el-select v-model="hem" placeholder="选择所在半球" @change="updateActiveCreatures">
            <el-option label="北半球" value="NH"></el-option>
            <el-option label="南半球" value="SH"></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="latest-releases">
      <div class="releases-container">
        <div class="release fish-list">
          <h3>活跃鱼类</h3>
          <ul v-if="activeFish.length > 0" style="align-items: center; padding: 10px;">
            <li v-for="fish in activeFish" :key="fish.id" class="release-item">
              <img :src="getImageUrl1(fish.image)" alt="Fish Image" class="release-icon" />
              <div class="release-info">
                <p class="release-message">名称：{{ fish.name }}</p>
                <p class="release-message">售价：{{ fish.sell }}</p>
                <p class="release-message">出没地点：{{ fish.whereHow }}</p>
                <p class="release-message">阴影：{{ fish.shadow }}</p>
                <p class="release-message">仅雨雪天：{{ fish.rainSnowCatchUp }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="release insect-list">
          <h3>活跃昆虫</h3>
          <ul v-if="activeInsects.length > 0" style="align-items: center; padding: 10px;">
            <li v-for="insect in activeInsects" :key="insect.id" class="release-item">
              <img :src="getImageUrl2(insect.image)" alt="Insect Image" class="release-icon" />
              <div class="release-info">
                <p class="release-message">名称：{{ insect.name }}</p>
                <p class="release-message">售价：{{ insect.sell }}</p>
                <p class="release-message">出没地点：{{ insect.whereHow }}</p>
                <p class="release-message">天气：{{ insect.weather }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="release seacreature-list">
          <h3>活跃海洋生物</h3>
          <ul v-if="activeSeaCreatures.length > 0" style="align-items: center; padding: 10px;">
            <li v-for="seaCreatures in activeSeaCreatures" :key="seaCreatures.id" class="release-item">
              <img :src="getImageUrl3(seaCreatures.image)" alt="Sea Creature Image" class="release-icon" />
              <div class="release-info">
                <p class="release-message">名称：{{ seaCreatures.name }}</p>
                <p class="release-message">售价：{{ seaCreatures.sell }}</p>
                <p class="release-message">阴影：{{ seaCreatures.shadow }}</p>
                <p class="release-message">移速：{{ seaCreatures.movementSpeed }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: '',
      hour: '',
      day: '',
      hem: '',
      activeFish: [],
      activeInsects: [],
      activeSeaCreatures: [],
      monthMappings: {
        '1': 'Jan',
        '2': 'Feb',
        '3': 'Mar',
        '4': 'Apr',
        '5': 'May',
        '6': 'Jun',
        '7': 'Jul',
        '8': 'Aug',
        '9': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
      }
    };
  },
  mounted() {
    const now = new Date();
    this.month = this.getMonthAbbreviation(now.getMonth() + 1); // Month is zero-based, so we add 1
    this.hour = now.getHours().toString();
    this.day = now.getDate().toString();
    this.getActiveCreatures();
    this.hem = 'NH';
  },
  methods: {
    getMonthAbbreviation(monthNumber) {
      return this.monthMappings[monthNumber.toString()];
    },
    async getActiveCreatures() {
      try {
        const response = await fetch(`/api/activities/active?hem=${this.hem}&month=${this.month}&hour=${this.hour}`);
        const data = await response.json();
        this.activeFish = data.fish || [];
        this.activeInsects = data.insects || [];
        this.activeSeaCreatures = data.seaCreatures || [];
      } catch (error) {
        console.error('Error fetching active creatures:', error);
      }
    },
    getImageUrl1(image) {
      return image ? image : 'Fish.png';
    },
    getImageUrl2(image) {
      return image ? image : 'Insects.png';
    },
    getImageUrl3(image) {
      return image ? image : 'Sea_Creature.png';
    },
    updateActiveCreatures() {
      this.getActiveCreatures();
    }
  },
  watch: {
    month: 'updateActiveCreatures',
    hour: 'updateActiveCreatures'
  }
}
</script>

<style>
.activity-list {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.current-time {
  margin-bottom: 20px;
}

.current-time label {
  display: block;
  margin-bottom: 10px;
}

.latest-releases {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.latest-releases h2 {
  text-align: center;
  margin-bottom: 20px;
}

.releases-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.release {
  width: 100%;
  background-color: #e8f4f8;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.release h3 {
  text-align: center;
  margin-bottom: 10px;
}

.release-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.release-item:hover {
  background-color: #f0f0f0;
}

.release-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.release-info {
  flex: 1;
}

.release-message{
  margin: 0;
}

.current-time {
  margin-bottom: 20px;
}

.time-selector {
  display: flex;
  width: 250px;
  align-items: center;
}

.time-selector label {
  margin-right: 5px;
}

.time-selector el-select {
  margin-right: 5px;
  width: auto;
}
</style>
