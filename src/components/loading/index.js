import Vue from 'vue'
import Main from './src/index'

let LoadingConstructor = Vue.extend(Main);

let Loading = () => {
  return new LoadingConstructor()
}

const defaults = {
  target: null
};

LoadingConstructor.prototype.open = function (options) {
  this.vm = this.$mount();
  if(options == undefined){
    this.fullScreen = true;
    document.body.appendChild(this.$el);
  } else {
    this.fullScreen = false;
    options = Object.assign(defaults, options);
    this.target = document.querySelector(options.target);
    if(window.getComputedStyle(this.target).position =='static'){
      this.target.classList.add('face-loading-parent-relative');
    }
    this.target.appendChild(this.$el);
  }
}

LoadingConstructor.prototype.close = function () {
  if(this.fullScreen){
    document.body.removeChild(this.$el);
  } else {
    if(document.querySelector('.face-loading-parent-relative')){
      this.target.classList.remove('face-loading-parent-relative');
    }
    this.target.removeChild(this.$el);
  }

}

export default Loading()
