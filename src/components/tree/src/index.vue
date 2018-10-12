<template>
  <ul class="face-tree" v-if="list.items.length>0">
    <face-tree-node :list.sync="list" :title="rootName"></face-tree-node>
  </ul>
</template>

<script>
  import faceTreeNode from './tree-node';

  export default {
    name: 'face-tree',

    components: {
      faceTreeNode
    },

    props: {
      list:{
        type:Object
      },
      rootName:{
        type:String,
        default:'所有'
      }
    }
  }
</script>
