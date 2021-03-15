<template>
  <div>
    <BarChart></BarChart>
    <CallAPI></CallAPI>
  
  </div>

</template>

<script>
import BarChart from './BarChart.vue'
import CallAPI from './CallAPI.vue'

export default {
  components: {
      BarChart,
      CallAPI
  },
}
</script>

<style scoped>
button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>