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
            annotation:{
                type:Boolean,
                default:false
            },
            toolbar:{
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
                        if(curVal !== oldVal){
                            document.getElementById(this.vid).innerHTML = "";
                        }
                        this.viewToken = curVal;
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
                if (viewMetaData.viewType == "dwgView") {
                    let webAppConfig = new Glodon.Bimface.Application.WebApplication2DConfig();
                    webAppConfig.domElement = dom4Show;
                    if(!this.toolbar) {
                      webAppConfig.Toolbars = [];
                    }
                    let app = new Glodon.Bimface.Application.WebApplication2D(webAppConfig);
                    app.load(viewMetaData.viewToken);
                    viewer = app.getViewer();
                    that.$emit("update:viewer", viewer);
                } else if (viewMetaData.viewType == "3DView") {
                    let webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
                    webAppConfig.domElement = dom4Show;
                    if(!this.toolbar) {
                      webAppConfig.Toolbars = [];
                    }
                    let app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig);
                    app.addView(viewMetaData.viewToken);
                    viewer = app.getViewer();
                    that.$emit("update:viewer", viewer);
                } else if (viewMetaData.viewType == "drawingView"){
                    let webAppConfig = new Glodon.Bimface.Application.WebApplicationDrawingConfig();
                    webAppConfig.domElement = dom4Show;
                    webAppConfig.drawingUrl = viewMetaData.drawingUrl;
                    webAppConfig.viewToken = viewMetaData.viewToken;
                    webAppConfig.staticHost = viewMetaData.staticHost;
                    if(!this.toolbar) {
                      webAppConfig.Toolbars = [];
                    }
                    let app = new Glodon.Bimface.Application.WebApplicationDrawing(webAppConfig);
                    viewer = app.getViewer();
                    that.$emit("update:viewer", viewer);
                    app.load(viewMetaData.viewToken);
                } else if (viewMetaData.viewType == "rfaView") {
                    var webAppConfig = new Glodon.Bimface.Application.WebApplicationRfaConfig();
                    webAppConfig.domElement = dom4Show;
                    if(!this.toolbar) {
                      webAppConfig.Toolbars = [];
                    }
                    let app = new Glodon.Bimface.Application.WebApplicationRfa(webAppConfig);
                    viewer = app.addView(viewMetaData.viewToken);
                }
            },

            failureCallback(error){
              console.log(error);
            }
        }
    }
</script>
