<template>
    <li :class="[this.title?'face-tree-root':'face-tree-node']">
      <div class="face-tree-node-content">
        <i v-if="list.items.length>0" class="face-tree-node-switch face-icon bim-sort-down" :class="{'face-tree-node-switch-on':switchOn}" @click="nodeSwitch"></i>
        <i v-else class="face-tree-node-switch face-icon face-tree-node-switch-close"></i>

        <span class="face-tree-node-check face-tree-node-check-on" v-if="checked && !half" @click="nodeCheck"><i class="face-icon bim-checked"></i></span>
        <span class="face-tree-node-check" v-else-if="!checked && !half" @click="nodeCheck"><i class="face-icon bim-checked"></i></span>
        <span class="face-tree-node-check face-tree-node-check-half" v-else @click="nodeCheck"><i class="face-icon">-</i></span>

        <span class="name">
          <template v-if="this.title">{{title}}</template>
          <template v-else>{{list.name}}</template>
        </span>
      </div>

      <transition name="fade">
        <ul class="face-tree-subNode" v-if="list.items.length>0" v-show="switchOn">
          <face-tree-node v-for="(u,i) in list.items" :key="i" :list.sync="u" :check-parent="checkTotal" :check-state="checked" @click="changeChild"></face-tree-node>
        </ul>
      </transition>
    </li>
</template>

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
        checkState: {
          type: Boolean
        },
        checkParent:{
          type:Number
        }
      },

      data(){
        return {
          isRoot:false,
          switchOn:true,
          checked:true,
          checkTotal:this.list.items.length,
          half:false
        }
      },

      watch: {
        checkState (val) {
          this.checked = val
        }
      },

      methods:{
        nodeSwitch(){
          this.switchOn = !this.switchOn;
        },

        nodeCheck(){
          if(this.checked){
            this.checked = false;
            this.$emit('click',false);
          } else {
            this.checked = true;
            this.$emit('click',true);
          }
        },

        changeChild(res){
          (res)?this.checkTotal++:this.checkTotal--;
          this.checkNodeState();
        },

        checkNodeState(){
          if(this.checkTotal == this.list.items.length){
            this.half = false;
            this.checked = true;
            this.$emit('click',true);
          } else if(this.checkTotal>0 && this.checkTotal<this.list.items.length){
            this.half = true;
          } else if(this.checkTotal == 0){
            this.half = false;
            this.checked = false;
            this.$emit('click',false);
          }
        }
      }
    }
</script>
