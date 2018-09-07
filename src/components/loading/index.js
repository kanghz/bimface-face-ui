import Loading from './src/index'

Loading.install = function (Vue) {
    Vue.component(Loading.name, Loading)
}

export default Loading
