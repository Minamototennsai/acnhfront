<template>
  <div class="activity-list">
    <h2></h2>
    <div class="current-time">
      <p>Month: {{ month }}</p >
      <p>Hour: {{ hour }}</p >
    </div>
    <div class="latest-releases">
      <h2></h2>
      <div class="releases-container">
        <div class="release fish-list">
          <h3>活跃鱼类</h3>
          <ul v-if="activeFish.length > 0">
            <li v-for="fish in activeFish" :key="fish.id" class="release-item">
              <img :src="getImageUrl1(fish.image)" alt="Fish Image" class="release-icon" />
              <div class="release-info">
                <p class="release-name">名称：{{ fish.name }}</p >
                <p class="release-price">售价：{{ fish.sell }}</p >
              </div>
            </li>
          </ul>
        </div>
        <div class="release insect-list">
          <h3>活跃昆虫</h3>
          <ul v-if="activeInsects.length > 0">
            <li v-for="insect in activeInsects" :key="insect.id" class="release-item">
              <img :src="getImageUrl2(insect.image)" alt="Insect Image" class="release-icon" />
              <div class="release-info">
                <p class="release-name">名称：{{ insect.name }}</p >
                <p class="release-price">售价：{{ insect.sell }}</p >
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
      activeFish: [],
      activeInsects: [],
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
    this.getActiveCreatures();
  },
  methods: {
    getMonthAbbreviation(monthNumber) {
      return this.monthMappings[monthNumber.toString()];
    },
    async getActiveCreatures() {
      const response = await fetch(`/api/activities/active?month=${this.month}&hour=${this.hour}`);
      const data = await response.json();
      this.activeFish = data.fish || [];
      this.activeInsects = data.insects || [];
    },
    getImageUrl1(image) {
      // 如果图像URL为空，使用占位符图片
      return image ? image : 'Fish.png'; // 确保default_placeholder.png存在于public文件夹中
    },
    getImageUrl2(image) {
      // 如果图像URL为空，使用占位符图片
      return image ? image : 'Insects.png'; // 确保default_placeholder.png存在于public文件夹中
    }
  },

  watch: {
    month: 'getActiveCreatures',
    hour: 'getActiveCreatures'
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
  justify-content: space-between;
}

.release {
  width: 45%;
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

.release-name, .release-price {
  margin: 0;
}
</style>