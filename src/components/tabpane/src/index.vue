<template>
  <div class="face-tab-content" v-show="$parent.currentActive === name">
    <slot></slot>
    <div v-if="$slots.title" ref="title" class="face-tab-title-wrapper">
      <slot name="title" />
    </div>
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
      this.$parent.updateNav()
      if (this.$slots.title) {
        this.$parent.renderTitle(this.$refs.title, this.$parent.getPane().indexOf(this))
      }
    }
  }
</script>
