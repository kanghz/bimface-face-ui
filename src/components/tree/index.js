import View from './src/index'

View.install = function (Vue) {
    Vue.component(View.name, View)
}

export default View