<template>
  <div class="face-tabs-wrapper">
    <div class="face-tabs-header" :style="headerWrapperStyles" ref="tabHeaderWrapper">
      <div class="face-tabs-header-line" v-if="!hideLine && type === 'line'" :style="lineStyles"></div>
      <div
        class="face-tabs-header-item"
        :class="{
          'face-tabs-active-line': type === 'line' && currentActive === tab.name,
          'face-tabs-active-block': type === 'block' && currentActive === tab.name
        }"
        @click="handleClick($event, index)"
        v-for="(tab, index) in tabList"
        :key="index"
        ref="tabItemTitleWrapperRef"
      >
        <span ref="title" class="face-tabs-title">{{ tab.label }}</span>
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
      sticky: {
        type: Boolean,
        default: false
      },
      hideLine: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'line',
        validator (value) {
          return ['line', 'block'].indexOf(value) > -1
        }
      },
      autoActive: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      headerWrapperStyles () {
        return { 'position': this.sticky ? 'fixed' : 'absolute', 'height': `${this.titleHeight}px`}
      },
      lineStyles () {
        return { 'transform': this.tleft, 'width': this.lineWidth, 'display': this.lineDisplay }
      }
    },

    data () {
      return {
        tleft: `translate(0, 0)`,
        tabList: [],
        currentActive: this.active,
        lineWidth: '0',
        lineDisplay: 'none',
        index: 0
      }
    },

    methods: {
      handleClick (event, index) {
        const navName = this.tabList[index].name
        if (navName === this.currentActive) { return }
        this.autoActive && this.setActivePane(index)
        this.$emit('click', navName, index)
      },
      setActivePane (index) {
        this.index = index
        this.currentActive = this.tabList[index].name
        if (!this.hideLine && this.type === 'line') {
          const parentLeft = this.$refs.tabHeaderWrapper.getBoundingClientRect().left
          const targetLeft = this.$refs.tabItemTitleWrapperRef[index].getBoundingClientRect().left
          this.tleft = `translate(${targetLeft - parentLeft}px, 0)`
        }
      },
      getPane () {
        return this.$children.filter(item => item.$options.name === 'face-tabpane')
      },
      updateNav () {
        const children = this.getPane();
        if (children.length === this.tabList.length) { return }
        this.tabList = []
        children.forEach((pane, index) => {
          this.tabList.push({
            label: pane.label,
            name: pane.name
          })
        })
        !this.hideLine && this.type === 'line' && (this.lineWidth = (100 / this.tabList.length) + '%')
      },
      renderTitle (el, index) {
        this.$nextTick(() => {
          const title = this.$refs.title[index]
          title.parentNode.replaceChild(el, title)
        })
      },
      listenResize () {
        const parentLeft = this.$refs.tabHeaderWrapper.getBoundingClientRect().left
        const targetLeft = this.$refs.tabItemTitleWrapperRef[this.index].getBoundingClientRect().left
        this.tleft = `translate(${targetLeft - parentLeft}px, 0)`
      }
    },

    mounted () {
      const currentActive = this.currentActive
      if (currentActive) {
        const length = this.tabList.length
        const width = this.$refs.tabHeaderWrapper.clientWidth
        this.tabList.forEach((item, index) => {
          if (currentActive === item.name) {
            this.index = index
            this.tleft = `translate(${index * (width / length)}px, 0))`
            this.lineDisplay = 'block'
          }
        })
      }
      !this.hideLine && this.type === 'line' && window.addEventListener('resize', this.listenResize, false)
    },

    beforeDestroy () {
      !this.hideLine && this.type === 'line' && window.removeEventListener('resize', this.listenResize)
    }
  }
</script>
