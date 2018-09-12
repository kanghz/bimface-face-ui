<template>
    <div id="app">
        <layout-header></layout-header>
        <layout-nav></layout-nav>
        <div class="components-wrap">
          <router-view/>
        </div>
    </div>
</template>

<script>
    import './assets/css/index.less'

    import Vue from 'vue'
    import layoutHeader from './components/header'
    Vue.component('layoutHeader', layoutHeader)
    import layoutNav from './components/nav'
    Vue.component('layoutNav', layoutNav)
    import demoBlock from './components/demo-block'
    Vue.component('demoBlock', demoBlock)
</script>
