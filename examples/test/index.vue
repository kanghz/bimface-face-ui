<template>
  <div>
    <div class="box">
      <face-tabs active="name1">
        <face-tabpane label="第一年" name="name1">标签一的内容</face-tabpane>
        <face-tabpane label="第二年" name="name2">标签二的内容</face-tabpane>
        <face-tabpane label="第三年" name="name3"><p>标签三的内容</p></face-tabpane>
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
    }
  }
</script>

<style lang="less" scoped>

</style>
