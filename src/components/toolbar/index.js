import bfToolBar from './src/index'

bfToolBar.install = function (Vue) {
  Vue.component(bfToolBar.name, bfToolBar)
}

export default bfToolBar
