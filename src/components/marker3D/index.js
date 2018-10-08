import Vue from 'vue'
import Main from './src/index'

let Marker3DConstructor = Vue.extend(Main);

let Marker3D = () => {
  return new Marker3DConstructor()
}

Marker3DConstructor.prototype.open = function (options) {
  console.log(options);
}

export default Marker3D()
