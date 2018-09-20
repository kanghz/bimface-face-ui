<template>
  <div>
    <div class="box">
      <face-input v-model="input1"></face-input>
    </div>

    <div class="box">
      <face-input v-model="input2" disabled></face-input>
      &nbsp;
      <face-input v-model="input2" readonly></face-input>
    </div>

    <div class="box">
      <face-input v-model="input3" clearable></face-input>
    </div>

    <div class="box">
      <face-input type="textarea" v-model="textarea1" :rows="3" placeholder="请输入文本"></face-input>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        input1:'',
        input2:'',
        input3:'',
        textarea1:''
      }
    },

    methods:{
    }
  }
</script>

<style lang="less" scoped>
  .box {
    padding:10px;
    .face-input {
      width: 180px;
    }
    .face-textarea {
      width: 400px;
    }
  }
</style>
