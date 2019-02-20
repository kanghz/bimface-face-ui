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
              v-for="(item) in data"
              :item="item">
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
