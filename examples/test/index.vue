<template>
  <div>
    <div class="box">
      <face-tabs active="name1" @click="tabEvent">
        <face-tabpane label="快速入门" name="name1">快速入门</face-tabpane>
        <face-tabpane label="开发指南" name="name2">开发指南</face-tabpane>
        <face-tabpane label="服务端API" name="name3">服务端API</face-tabpane>
        <face-tabpane label="Javascript API" name="name4">Javascript API</face-tabpane>
      </face-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },

    methods:{
      tabEvent(paneName,index){

      }
    }
  }
</script>

<style lang="less" scoped>

</style>
