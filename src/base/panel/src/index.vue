<template>
    <div class="bf-base-panel"
         v-show="visible"
    >
        <div class="bf-base-panel-body">
            <div class="bf-base-panel-head"><i v-if="close" class="face-icon components-close bim-close" @click="closeButtonEvent"></i>{{title}}</div>
            <div class="bf-base-panel-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'bf-base-panel',

      props: {
          visible:{
              type:Boolean,
              default:false
          },
          close: Boolean,
          title:String,
          confirmButtonText:String,
          cancelButtonText:String
      },

      methods: {
          closeButtonEvent(){
              this.$emit("update:visible", false);
              this.$emit('closeButtonEvent');
          }
      }
  }
</script>
