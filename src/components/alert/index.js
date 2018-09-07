import Alert from './src/index'

Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert)
}

export default Alert