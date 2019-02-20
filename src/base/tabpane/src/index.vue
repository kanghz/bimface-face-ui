<template>
  <div class="face-tab-content" v-show="$parent.currentActive === name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'face-tabpane',

    props: {
      name: [String, Number],
      label: [String, Number]
    },

    mounted () {
      this.$parent.updateNav();
    }
  }
</script>
