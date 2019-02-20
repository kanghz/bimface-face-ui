<template>
  <div class="face-tabs" :class="[
    type !== 'line' ? 'face-tabs-' + type : ''
    ]">
    <div class="face-tabs-header" ref="tabHeaderWrapper">
      <div class="face-tabs-header-nav">
        <div
          class="face-tabs-header-item"
          :class="{
          'face-tabs-header-item-active': currentActive === tab.name
        }"
          @click="handleClick($event, index)"
          v-for="(tab, index) in tabList"
          :key="index"
        >
          <span ref="tabItemTitleWrapper">{{ tab.label }}</span>
        </div>
        <div class="face-tabs-header-line" v-if="type === 'line'" :style="lineStyles"></div>
      </div>
    </div>
    <div class="face-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'face-tabs',

    props: {
      active: {
        type: [String, Number]
      },
      type: {
        type: String,
        default: 'line'
      }
    },

    computed: {
      lineStyles () {
        return { 'transform': this.lineLeft, 'width': this.lineWidth }
      }
    },

    data () {
      return {
        lineLeft: `translate(0, 0)`,
        tabList: [],
        currentActive: this.active,
        lineWidth: '0',
        index: 0
      }
    },

    mounted(){
      this.tabList.forEach((item, index) => {
        if (this.currentActive === item.name) {
          this.$nextTick(()=>{
            this.setActivePane(index);
          });
        }
      })
    },

    methods: {
      handleClick (event, index) {
        let paneName = this.tabList[index].name;
        if (paneName === this.currentActive) { return };
        this.setActivePane(index);
        this.$emit('click', paneName, index);
      },

      setActivePane (index) {
        this.index = index;
        this.currentActive = this.tabList[index].name;
        if (this.type === 'line') {
          let parenlineLeft = this.$refs.tabHeaderWrapper.getBoundingClientRect().left;
          let targelineLeft = this.$refs.tabItemTitleWrapper[index].getBoundingClientRect().left;
          let targelineWidth = this.$refs.tabItemTitleWrapper[index].getBoundingClientRect().width;
          this.lineLeft = `translate(${targelineLeft - parenlineLeft}px, 0)`;
          this.lineWidth = `${targelineWidth}px`;
        }
      },

      getPane () {
        return this.$children.filter(item => item.$options.name === 'face-tabpane');
      },

      updateNav () {
        let children = this.getPane();
        if (children.length === this.tabList.length) { return };
        this.tabList = [];
        children.forEach((pane, index) => {
          this.tabList.push({
            label: pane.label,
            name: pane.name
          })
        })
      }
    }
  }
</script>
