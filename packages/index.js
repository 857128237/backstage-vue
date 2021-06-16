import './theme-chalk/src/index.scss'

import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Icon from './icon/index.js'
import Avatar from './avatar/index.js'
import Alert from './alert/index.js'
import Divider from './divider/index.js'
import Loading from './loading/index.js'

const components = [
    Button,
    ButtonGroup,
    Icon,
    Avatar,
    Alert,
    Divider,
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
    Vue.use(Loading.directive);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export default {
    install,
    Button
}