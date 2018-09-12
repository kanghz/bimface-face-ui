<template>
    <div class="face-loading" v-show="visible">
        <div class="face-loading-outer">
            <div class="face-loading-inner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'face-loading',

        data() {
          return {
            visible: false
          };
        }
    }
</script>
