<template>
    <div class="face-loading" v-if="visible">
        <div class="face-loading-outer">
            <div class="face-loading-inner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'face-loading',

        props: {
            visible:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="less">
    .face-loading {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: @loading-bg;
    }
    .face-loading-outer {
        position: absolute;
        top:50%;
        left:50%;
        margin:-20px 0 0 -20px;
        border: 4px solid @primary-color;
        opacity: .9;
        border-right-color: transparent;
        border-left-color: transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 0 35px @loading-color;
        -webkit-animation: spin-pulse 1s linear infinite normal;
        -webkit-animation-delay: 0;
    }
    .face-loading-inner {
        border: 4px solid @primary-color;
        opacity: .9;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        box-shadow: 0 0 15px @loading-color;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 4px;
        left:4px;
        -webkit-animation: spin-right 1s linear infinite normal;
        -webkit-animation-delay: 0;
    }
    @keyframes spin-pulse {
        from {
            transform: rotate(160deg);
            opacity: 0;
            box-shadow: 0 0 1px @loading-color;
        }
        50% {
            transform: rotate(145deg);
            opacity: 1;
        }
        to {
            transform: rotate(-320deg);
            opacity: 0;
        }
    }
    @keyframes spin-right {
        from {
            transform: rotate(0deg);
            opacity: 0.2;
        }
        50% {
            transform: rotate(180deg);
            opacity: 1.0;
        }
        to {
            transform: rotate(360deg);
            opacity: 0.2;
        }
    }

</style>
