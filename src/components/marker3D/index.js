function Marker3D(options){
  this.options = options;
};

Marker3D.prototype.open = function () {
  let me = this;
  if(me.options){
    let markerConfig = new Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
    markerConfig.viewer = me.options.viewer;
    let marker = new Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
    viewer.addEventListener(Glodon.Bimface.Application.WebApplication3DEvent.ComponentsSelectionChanged,function(componentData) {
      if(componentData && componentData.objectId){
        let marker3dConfig = new Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
        marker3dConfig.src = me.options.url;
        marker3dConfig.worldPosition = componentData.worldPosition;
        let marker3d = new Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
        marker3d.onClick(function(item){
          console.log(item.id);
        })
        marker.addItem(marker3d);
      }
    });
  }
}

export default Marker3D()
