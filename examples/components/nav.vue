<template>
    <div class="side">
        <dl>
          <dt>开发指南</dt>
          <dd><router-link :to="{name: 'Intro'}">介绍</router-link></dd>
          <dd><router-link :to="{name: 'Installation'}">安装</router-link></dd>
          <dd><router-link :to="{name: 'Quick'}">快速上手</router-link></dd>
          <dd><router-link :to="{name: 'Theme'}">自定义主题</router-link></dd>

          <dt>基础组件</dt>
          <dd><router-link :to="{name: 'Alert'}">Alert 警告</router-link></dd>
          <dd><router-link :to="{name: 'Button'}">Button 按钮</router-link></dd>
          <dd><router-link :to="{name: 'Icon'}">Icon 图标</router-link></dd>
          <dd><router-link :to="{name: 'Loading'}">Loading 加载</router-link></dd>
          <dd><router-link :to="{name: 'Pagination'}">Pagination 翻页</router-link></dd>
          <dd><router-link :to="{name: 'Popup'}">Popup 弹出层</router-link></dd>
          <dd><router-link :to="{name: 'Tag'}">Tag 标签</router-link></dd>

          <dt>表单表格组件</dt>
          <dd><router-link :to="{name: 'Table'}">Table 表格</router-link></dd>

          <dt>业务组件</dt>
          <dd><router-link :to="{name: 'View'}">View 模型</router-link></dd>
        </dl>
    </div>
</template>

<style lang="less" scoped>
    .side {
        position: fixed;
        width:288px;
        top:58px;
        left:0;
        bottom:0;
        padding:0 20px 20px;
        box-sizing: border-box;
        overflow-y: auto;
        dl {
            dt {
                font-size: 16px;
                margin-bottom:5px;
                font-weight: bold;
                margin-top:20px;
            }
            dd {
                a {
                    display: block;
                    color:#666;
                    &:hover {
                        text-decoration: none;
                        color:#11dab7;
                    }
                }
                padding:5px 0 5px 20px;
                .router-link-exact-active {
                    color:#11dab7;
                }
            }
        }
    }
</style>
