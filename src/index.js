import './components/theme/src/variables.less'

import Button from './base/button/index'
import Plane from './base/panel/index'
import bfToolBar from './components/toolbar/index'

const components = [
  Button,
  Plane,

  bfToolBar
]

const install = Vue => {
  if (install.installed) return
  install.installed = true

  components.forEach(component => Vue.component(component.name, component))

  // Vue.prototype.$loading = Loading;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Plane,

  bfToolBar
}

export default {
  install
}
