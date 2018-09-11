<template>
  <table class="face-table"
     :class="[
      stripe ? 'face-table-stripe' : '',
      border ? 'face-table-border' : ''
    ]">
    <tbody>
      <slot></slot>
      <template v-show="data && data.length > 0">
        <slot name="item"
              v-for="(item,index) in data"
              :item="item"
              :key="index">
        </slot>
      </template>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: 'face-table',

        props: {
          data:{
            type:Array,
            default:function(){
              return [];
            }
          },
          stripe:Boolean,
          border:Boolean
        }
    }
</script>

<style lang="less">
    .face-table {
      width: 100%;
      border-top:1px solid @border-color;
      th {
        color:@default-color;
        text-align: left;
        font-weight: normal;
        background-color: @table-th-bg;
      }
      th, td {
        padding:10px;
        border-bottom:1px solid @border-color;
        vertical-align: top;
        line-height: 2;
        word-break: break-all;
        a {
          margin-right:10px;
        }
      }
      &.face-table-stripe tr:nth-child(odd) {
        background-color: @table-stripe;
      }
      tr:hover {
        background-color: @table-tr-hover !important;
      }
      &.face-table-border {
        border-left:1px solid @border-color;
        th, td {
          border-bottom:1px solid @border-color;
          border-right:1px solid @border-color;
        }
      }
    }
</style>
