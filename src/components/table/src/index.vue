<template>
  <table class="face-table">
    <tbody>
    <slot name="ths"></slot>
    <slot name="item"
          v-for="item in items"
          :item="item">
    </slot>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: 'face-table',

        props: {
        }
    }
</script>

<style lang="less">
    .face-table {
      width: 100%;
      border-top:1px solid #ccc;
      th {
        color:#999;
        text-align: left;
        font-weight: normal;
        background-color: #eee;
      }
      th, td {
        padding:10px;
        border-bottom:1px solid #ccc;
        vertical-align: top;
        line-height: 2;
        word-break: break-all;
        a {
          margin-right:10px;
        }
      }
    }
</style>
