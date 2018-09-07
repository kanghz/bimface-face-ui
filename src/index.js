import './common/css/base.less'

import Alert from './components/alert/index'
import Button from './components/button/index'
import Pagination from './components/pagination/index'
import Popup from './components/popup/index'
import Loading from './components/loading/index'
import Tag from './components/tag/index'
import View from './components/view/index'


const components = [
    Alert,
    Button,
    Pagination,
    Popup,
    Loading,
    Tag,
    View
]

const install = Vue => {
    if (install.installed) return
    install.installed = true

    components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Alert,
    Button,
    Pagination,
    Popup,
    Loading,
    Tag,
    View
}

export default {
    install
}
