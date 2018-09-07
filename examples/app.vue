<template>
    <div id="app">
        <layout-header></layout-header>
        <layout-nav></layout-nav>
        <router-view/>
    </div>
</template>

<script>
    import './assets/css/reset.less'
    import './assets/css/common.less'

    import Vue from 'vue'
    import layoutHeader from './components/header'
    Vue.component('layoutHeader', layoutHeader)
    import layoutNav from './components/nav'
    Vue.component('layoutNav', layoutNav)
</script>