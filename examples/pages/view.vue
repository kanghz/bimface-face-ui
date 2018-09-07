<template>
    <div class="components-wrap">
        <h2>View -- 模型</h2>

        <div class="model-box">
            <face-view
                    :height="600"
                    :viewToken="viewToken"
                    vid="dom3d"
                    type="junior"
                    :viewer.sync="viewer"
                    annotation
                    :annotationManager.sync = "annotationmanager"
                    measure
                    :measureManager.sync = "measuremanager"
            ></face-view>
        </div>

        <h4>展示模型</h4>
        <div class="demo-row">
            <face-button size="small" @click="showModel">赋值viewToken</face-button>
            <face-button size="small" @click="changeModel">切换viewToken</face-button>
        </div>

        <h4>基本用法</h4>
        <div class="demo-row">
            <face-button size="small" @click="isolate">隔离构件</face-button>
            <face-button size="small" @click="clearIsolate">清除隔离构件</face-button>
            <face-button size="small" @click="hideComponents">隐藏构件</face-button>
            <face-button size="small" @click="showAllComponents">显示全部</face-button>
            <face-button size="small" @click="changeColor">改变构件颜色</face-button>
        </div>

        <h4>Annotation 绘制批注</h4>
        <div class="demo-row">
            <face-button size="small" @click="annotation">绘制批注</face-button>
            <face-button size="small" @click="setAnnotationType">设置批注类型</face-button>
            <face-button size="small" @click="setLineWidth">更改批注线宽</face-button>
            <face-button size="small" @click="setAnnotationText">设置批注为文字</face-button>
            <face-button size="small" @click="setLineColor">更改批注颜色为黄色</face-button>
            <face-button size="small" @click="stopAnnotation">取消批注</face-button>
        </div>

        <h4>Measure 测量</h4>
        <div class="demo-row">
            <face-button size="small" @click="switchOn">开启测量</face-button>
            <face-button size="small" @click="setMeasureType">修改测量类型为角度</face-button>
            <face-button size="small" @click="switchOff">关闭测量</face-button>
        </div>

        <!--<div class="model-box">-->
            <!--<face-view-->
                    <!--:width="800"-->
                    <!--:height="600"-->
                    <!--viewToken="8989009b7fdd4b09856dc0bcdff590db"-->
                    <!--vid="domDraw"-->
                    <!--type="junior"-->
                    <!--:viewer.sync="viewerDwg"-->
            <!--&gt;</face-view>-->
        <!--</div>-->
        <!--<div class="demo-row">-->
            <!--<face-button size="small" @click="changRectZoom">进入框选放大模式</face-button>-->
            <!--<face-button size="small" @click="clearRectZoom">取消框选放大模式</face-button>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                viewToken:'',
                viewer:null,
                viewerDwg:null,
                annotationmanager:null,
                measuremanager:null
            }
        },

        methods:{
            showModel(){
                this.viewToken = '9b1fad7206b54b75a384c339f977f1d5'
            },
            changeModel(){
                this.viewToken = '5f7ec471ba16414092d17f14c77f2e69'
            },
            isolate(){
                this.viewer.isolateComponentsById(['726397'], Glodon.Bimface.Viewer.IsolateOption.MakeOthersTranslucent);
                this.viewer.render();
            },
            clearIsolate(){
                this.viewer.clearIsolation();
                this.viewer.render();
            },
            hideComponents(){
                this.viewer.hideComponents(['794362','728597']);
                this.viewer.render();
            },
            showAllComponents(){
                this.viewer.showAllComponents();
                this.viewer.render();
            },
            changeColor(){
                let red = new Glodon.Web.Graphics.Color(255, 0, 0, 1);
                this.viewer.overrideComponentsColorById(["1012665", "1012743"], red);
                this.viewer.render();
            },
            annotation(){
                this.annotationmanager.startDrawing();
            },
            stopAnnotation(){
                this.annotationmanager.endDrawing();
            },
            setLineWidth(){
                let color = new Glodon.Web.Graphics.Color(255, 0, 255, 1);
                this.annotationmanager.setLineColor(color);
            },
            setAnnotationType(){
                this.annotationmanager.setAnnotationType(Glodon.Bimface.Plugins.Annotation.AnnotationTypeOption.Circle);
            },
            setAnnotationText(){
                this.annotationmanager.setAnnotationType(Glodon.Bimface.Plugins.Annotation.AnnotationTypeOption.Text);
            },
            setLineColor(){
                let yellow = new Glodon.Web.Graphics.Color(255, 255, 0, 1);
                this.annotationmanager.setLineColor(yellow);
            },
            switchOn(){
                this.measuremanager.switchOn();
            },
            setMeasureType(){
                this.measuremanager.setMeasureType(Glodon.Bimface.Plugins.Measure.MeasureTypeOption.Angle);
            },
            switchOff(){
                this.measuremanager.switchOff();
            },


            changRectZoom(){
                this.viewerDwg.rectZoom();
            },
            clearRectZoom(){
                this.viewerDwg.setNavigationMode(Glodon.Bimface.Viewer.NavigationMode2D.Pan);
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo-row {
        margin:20px 0;
        .face-button {
            margin-right: 10px;
        }
    }
</style>
