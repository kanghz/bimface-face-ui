import Vue from 'vue'
import Main from './src/index'

let Marker3DConstructor = Vue.extend(Main);

let Marker3D = () => {
  return new Marker3DConstructor()
}

Marker3DConstructor.prototype.open = function (options) {
  var markerConfig = new Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
  markerConfig.viewer = options.viewer;
  var marker = new Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
  options.viewer.addEventListener(Glodon.Bimface.Application.WebApplication3DEvent.ComponentsSelectionChanged,function(componentData) {
    if(componentData && componentData.objectId){
      var marker3dConfig = new Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
      marker3dConfig.src = options.url;
      marker3dConfig.worldPosition = componentData.worldPosition;
      var marker3d = new Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
      marker3d.onClick(function(item){
        console.log(item.id);
      })
      marker.addItem(marker3d);
    }
  });
}

export default Marker3D()
