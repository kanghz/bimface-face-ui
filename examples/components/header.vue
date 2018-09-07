<template>
    <header>
        <div class="title">
            <a class="logo"></a>
            <span>A Vue 2.0 based component library for developers, By Bimface FE Team.</span>
        </div>
    </header>
</template>

<style lang="less" scoped>
    header {
        padding: 12px 15px;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
        .logo {
            float:left;
            width: 80px;
            height: 30px;
            background: url(../assets/img/logo.png) no-repeat;
            background-size: auto 30px;
        }
        .title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #2c3e50;
            position: relative;
            span {
                margin-left:20px;
                color:#bbb;
                font-size:14px;
                font-weight: normal;
            }
        }
    }
</style>