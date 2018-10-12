import './components/theme/src/variables.less'

// import Alert from './components/alert/index'
import Button from './components/button/index'
import Input from './components/input/index'
import Pagination from './components/pagination/index'
import Popup from './components/popup/index'
import Loading from './components/loading/index'
import Table from './components/table/index'
import Tabpane from './components/tabpane/index'
import Tabs from './components/tabs/index'
import Tag from './components/tag/index'
import Tree from './components/tree/index'
import View from './components/view/index'
import Marker3D from './components/marker3D/index'

const components = [
  Button,
  Input,
  Pagination,
  Popup,
  Table,
  Tabpane,
  Tabs,
  Tag,
  Tree,
  View
]

const install = Vue => {
  if (install.installed) return
  install.installed = true

  components.forEach(component => Vue.component(component.name, component))

  // Vue.prototype.$alert = Alert;
  Vue.prototype.$loading = Loading;
  Vue.prototype.$marker3D = Marker3D;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  // Alert,
  Button,
  Input,
  Pagination,
  Popup,
  Loading,
  Table,
  Tabpane,
  Tabs,
  Tag,
  Tree,
  View,
  Marker3D
}

export default {
  install
}
