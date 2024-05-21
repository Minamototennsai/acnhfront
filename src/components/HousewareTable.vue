<template>
  <div>
    <h2>Houseware Table</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Variation</th>
          <th>Body Title</th>
          <th>Pattern</th>
          <th>Pattern Title</th>
          <th>DIY</th>
          <th>Body Customize</th>
          <th>Pattern Customize</th>
          <th>Kit Cost</th>
          <th>Buy Price</th>
          <th>Sell Price</th>
          <th>Miles Price</th>
          <th>Color 1</th>
          <th>Color 2</th>
          <th>Size</th>
          <th>Interact</th>
          <th>Tag</th>
          <th>Outdoor</th>
          <th>Source</th>
          <th>Source Notes</th>
          <th>HHA Concept 1</th>
          <th>HHA Concept 2</th>
          <th>HHA Series</th>
          <th>HHA Set</th>
          <th>Speaker Type</th>
          <th>Lighting Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="houseware in housewares" :key="houseware.id">
          <td>{{ houseware.id }}</td>
          <td>{{ houseware.name }}</td>
          <td>{{ houseware.variation }}</td>
          <td>{{ houseware.bodyTitle }}</td>
          <td>{{ houseware.pattern }}</td>
          <td>{{ houseware.patternTitle }}</td>
          <td>{{ houseware.diy }}</td>
          <td>{{ houseware.bodyCustomize }}</td>
          <td>{{ houseware.patternCustomize }}</td>
          <td>{{ houseware.kitCost }}</td>
          <td>{{ houseware.buyPrice }}</td>
          <td>{{ houseware.sellPrice }}</td>
          <td>{{ houseware.milesPrice }}</td>
          <td>{{ houseware.color_1 }}</td>
          <td>{{ houseware.color_2 }}</td>
          <td>{{ houseware.size }}</td>
          <td>{{ houseware.interact }}</td>
          <td>{{ houseware.tag }}</td>
          <td>{{ houseware.outdoor }}</td>
          <td>{{ houseware.source }}</td>
          <td>{{ houseware.sourceNotes }}</td>
          <td>{{ houseware.hhaConcept_1 }}</td>
          <td>{{ houseware.hhaConcept_2 }}</td>
          <td>{{ houseware.hhaSeries }}</td>
          <td>{{ houseware.hhaSet }}</td>
          <td>{{ houseware.speakerType }}</td>
          <td>{{ houseware.lightingType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      housewares: []
    };
  },
  mounted() {
    this.fetchHousewares();
  },
  methods: {
    fetchHousewares() {
      axios.get('http://localhost:8080/api/housewares')
        .then(response => {
          this.housewares = response.data;
        })
        .catch(error => {
          console.error('Error fetching housewares:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
