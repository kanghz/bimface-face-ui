import Vue from 'vue'
import Main from './src/index'

let AlertConstructor = Vue.extend(Main);

let Alert = () => {
  return new AlertConstructor()
}

const defaults = {
  target: null
};

AlertConstructor.prototype.open = function (options) {

}

AlertConstructor.prototype.close = function () {

}

export default Alert()
