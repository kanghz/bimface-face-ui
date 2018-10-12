<template>
    <li :class="[this.title?'face-tree-root':'face-tree-node']">
      <div class="face-tree-node-content">
        <template  v-if="list.items.length>0">
          <i class="face-tree-node-switch face-icon bim-sort-down" :class="{'face-tree-node-switch-on':switchOn}" @click="nodeSwitch"></i>
        </template>
        <template  v-else>
          <i class="face-tree-node-switch face-icon face-tree-node-switch-close"></i>
        </template>

        <span class="face-tree-node-check" :class="{'face-tree-node-check-on':checked}" @click="nodeCheck"><i class="face-icon bim-checked"></i></span>
        <span class="name">
          <template v-if="this.title">{{title}}</template>
          <template v-else>{{list.name}}</template>
        </span>
      </div>
      <ul class="face-tree-subNode" v-if="list.items.length>0" v-show="switchOn">
        <face-tree-node v-for="(u,i) in list.items" :key="i" :list.sync="u" :state="itemState"></face-tree-node>
      </ul>
    </li>
</template>

<!--https://github.com/jiaxincui/vue-tree/blob/master/src/components/Item.vue-->

<script>
    export default {
      name: 'face-tree-node',

      props: {
        list:{
          type:Object
        },
        title:{
          type:String
        },
        state: {
          type: Number,
          default: 0
        }
      },

      data(){
        return {
          isRoot:false,
          switchOn:true,
          checked:false,
          itemState:0
        }
      },

      computed:{

      },

      watch: {
        state (val, old) {
          if (val > old) {
            // this.addChecked()
            this.itemState = this.itemState + 1
          } else {
            // this.delChecked()
            // this.deleteHalfChecked(this.model.id)
            this.itemState = this.itemState - 1
          }
        }
      },

      methods:{
        nodeSwitch(){
          this.switchOn = !this.switchOn;
        },
        nodeCheck(){
          if(this.checked){
            this.checked = false
          } else {
            this.checked = true
          }
        },

        addChecked () {
          if (this.idsWithParent.indexOf(this.model.id) === -1) {
            this.$set(this.idsWithParent, this.idsWithParent.length, this.model.id)
          }
          if (!this.isFolder || this.options.idsWithParent) {
            if (this.ids.indexOf(this.model.id) === -1) {
              this.$set(this.ids, this.ids.length, this.model.id)
            }
          }
        },
        delChecked () {
          let idx = this.idsWithParent.indexOf(this.model.id)
          let index = this.ids.indexOf(this.model.id)
          if (idx !== -1) {
            this.$delete(this.idsWithParent, idx)
          }
          if (index !== -1) {
            this.$delete(this.ids, index)
          }
        },
      }
    }
</script>
