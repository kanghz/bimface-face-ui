import './components/theme/src/variables.less'

// import Alert from './components/alert/index'
import Button from './components/button/index'
import Input from './components/input/index'
import Pagination from './components/pagination/index'
import Popup from './components/popup/index'
import Loading from './components/loading/index'
import Table from './components/table/index'
import Tag from './components/tag/index'
import View from './components/view/index'

const components = [
    Button,
    Input,
    Pagination,
    Popup,
    Table,
    Tag,
    View
]

const install = Vue => {
    if (install.installed) return
    install.installed = true

    components.forEach(component => Vue.component(component.name, component))

    // Vue.prototype.$alert = Alert;
    Vue.prototype.$loading = Loading;
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
    Tag,
    View
}

export default {
    install
}
