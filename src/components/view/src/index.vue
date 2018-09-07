<template>
    <div class="face-view" :id="vid" :style="computeStyle"></div>
</template>

<script>
    export default {
        name: 'face-view',

        props: {
            vid:String,
            width:Number,
            height:Number,
            viewToken:String,
            type:{
                type:String,
                default:'demo'
            },
            annotation:{
                type:Boolean,
                default:false
            },
            measure:{
                type:Boolean,
                default:false
            },
            viewer:Object
        },

        computed: {
            computeStyle() {
                return {
                    width: this.width ? this.width + 'px' : '100%',
                    height: this.height ? this.height + 'px' :'100%'
                }
            }
        },

        watch:{
            'viewToken':{
                handler(curVal,oldVal){
                    if(curVal.length>0){
                        if(this.viewer){
                            document.getElementById(this.vid).innerHTML = "";
                        }
                        let options = new BimfaceSDKLoaderConfig();
                        options.viewToken = this.viewToken;
                        BimfaceSDKLoader.load(options, this.successCallback, this.failureCallback);
                    }
                },
                deep:true
            }
        },

        methods: {
            successCallback(viewMetaData){
                let viewer;
                let that = this;
                let dom4Show = document.getElementById(this.vid);
                if(this.type == 'junior'){
                    if (viewMetaData.viewType == "dwgView") {
                        let webAppConfig = new Glodon.Bimface.Application.WebApplication2DConfig();
                        webAppConfig.domElement = dom4Show;
                        let app = new Glodon.Bimface.Application.WebApplication2D(webAppConfig);
                        app.load(viewMetaData.viewToken);
                        viewer = app.getViewer();
                        viewer.addEventListener(Glodon.Bimface.Viewer.Viewer2DEvent.Loaded, function () {
                            that.$emit("update:viewer", viewer);
                        })
                    } else if (viewMetaData.viewType == "3DView") {
                        let webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
                        webAppConfig.domElement = dom4Show;
                        let app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig);
                        app.addView(viewMetaData.viewToken);
                        viewer = app.getViewer();
                        that.$emit("update:viewer", viewer);
                        that.isAnnotation(that.annotation,viewer);
                        that.isMeasure(that.measure,viewer);
                        // viewer.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, function () {
                        //     viewer.render();
                        //     that.$emit("update:viewer", viewer);
                        //     that.isAnnotation(that.annotation,viewer);
                        //     that.isMeasure(that.measure,viewer);
                        // });
                    } else if (viewMetaData.viewType == "drawingView"){
                        let WebAppConfig = new Glodon.Bimface.Application.WebApplicationDrawingConfig();
                        WebAppConfig.domElement = dom4Show;
                        WebAppConfig.drawingUrl = viewMetaData.drawingUrl;
                        WebAppConfig.viewToken = viewMetaData.viewToken;
                        WebAppConfig.staticHost = viewMetaData.staticHost;
                        let app = new Glodon.Bimface.Application.WebApplicationDrawing(WebAppConfig);
                        viewer = app.getViewer();
                        app.load(viewMetaData.viewToken);
                        viewer.addEventListener(Glodon.Bimface.Viewer.ViewerDrawingEvent.Loaded, function () {
                            that.$emit("update:viewer", viewer);
                        });
                    } else if (viewMetaData.viewType == "rfaView") {
                        var config = new Glodon.Bimface.Application.WebApplicationRfaConfig();
                        config.domElement = dom4Show;
                        let app = new Glodon.Bimface.Application.WebApplicationRfa(config);
                        viewer = app.addView(viewMetaData.viewToken);
                        app.addEventListener(Glodon.Bimface.Application.WebApplicationRfaEvent.ViewAdded, function() {
                            app.render();
                        });
                    }
                } else if(this.type == 'senior'){
                    if (viewMetaData.viewType == "dwgView") {
                        let config = new Glodon.Bimface.Viewer.Viewer2DConfig();
                        config.domElement = dom4Show;
                        viewer= new Glodon.Bimface.Viewer.Viewer2D(config);
                        viewer.addView(viewMetaData.viewToken);
                        viewer.addEventListener(Glodon.Bimface.Viewer.Viewer2DEvent.Loaded,function() {
                            that.$emit("update:viewer", viewer);
                        });
                    } else if (viewMetaData.viewType == "3DView" || viewMetaData.viewType == "rfaView") {
                        let config = new Glodon.Bimface.Viewer.Viewer3DConfig();
                        config.domElement = dom4Show;
                        viewer = new Glodon.Bimface.Viewer.Viewer3D(config);
                        viewer.addView(viewMetaData.viewToken);
                        // viewer.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, function() {
                        //     viewer.render();
                        //     that.$emit("update:viewer", viewer);
                        //     that.isAnnotation(that.annotation,viewer);
                        //     that.isMeasure(that.measure,viewer);
                        // });
                    } else if (viewMetaData.viewType == "drawingView") {
                        let viewConfig = new Glodon.Bimface.Viewer.ViewerDrawingConfig();
                        viewConfig.domElement = dom4Show;
                        viewConfig.drawingUrl = viewMetaData.drawingUrl;
                        viewConfig.viewToken = viewMetaData.viewToken;
                        viewConfig.staticHost = viewMetaData.staticHost;
                        let app = new Glodon.Bimface.Viewer.ViewerDrawing(viewConfig);
                        viewer = app.getViewer();
                        app.load(viewMetaData.viewToken);
                        app.addEventListener(Glodon.Bimface.Viewer.ViewerDrawingEvent.Loaded, function() {
                            that.$emit("update:viewer", viewer);
                        });
                    }
                } else {
                    new Glodon.Bimface.Application.WebApplicationDemo(viewMetaData, dom4Show);
                }
            },

            failureCallback(error){
                console.log(error);
            },

            isAnnotation(b,obj){
                if(b){
                    let annotationconfig = new Glodon.Bimface.Plugins.Annotation.AnnotationManagerConfig();
                    annotationconfig.viewer = obj;

                    let manager = new Glodon.Bimface.Plugins.Annotation.AnnotationManager(annotationconfig);
                    this.$emit("update:annotationManager", manager);
                }
            },

            isMeasure(b,obj){
                if(b){
                    let measureConfig = new Glodon.Bimface.Plugins.Measure.MeasureConfig();
                    measureConfig.viewer = obj;
                    let measure = new Glodon.Bimface.Plugins.Measure.Measure(measureConfig);
                    this.$emit("update:measureManager", measure);
                }
            }
        }
    }
</script>
