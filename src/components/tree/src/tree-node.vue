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
          <!--<template v-else>{{list.name}}</template>-->
          <template v-else>check:{{checkTotal}},half:{{halfTotal}}</template>
        </span>
      </div>

      <transition name="fade">
        <ul class="face-tree-subNode" v-if="list.items.length>0" v-show="switchOn">
          <face-tree-node v-for="(u,i) in list.items" :key="i" :list.sync="u" :check-parent="checkTotal" :half-parent="halfTotal" :check-state="checked" :half-state="half" @click="changeChild"></face-tree-node>
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
        halfState: {
          type: Boolean
        },
        checkParent:{
          type:Number
        },
        halfParent: {
          type: Number
        }
      },

      data(){
        return {
          isRoot:false,
          switchOn:true,
          checked:true,
          checkTotal:this.list.items.length,
          half:false,
          halfTotal:0
        }
      },


      watch: {
        checkState (val) {
          if(val && !this.halfState){
            this.checked = val;
            this.checkTotal = this.list.items.length;
          } else if(!val) {
            this.checked = val;
            this.checkTotal = 0;
          }
        },
        halfState(val){
          if(!val){
            this.half = false;
            this.halfTotal = 0;
          }
        }
      },

      methods:{
        nodeSwitch(){
          this.switchOn = !this.switchOn;
        },

        nodeCheck(){
          console.log(this.list)
          if(this.checked){
            if(this.half){
              this.half = false;
              this.$emit('click',-1,-1);
            } else {
              this.$emit('click',-1,0);
            }
            this.checked = false;
          } else {
            this.checked = true;
            this.$emit('click',1,0);
          }
        },

        changeChild(c,h){
          this.checkTotal = this.checkTotal + c;
          this.halfTotal = this.halfTotal + h;
          this.checkNodeState();
        },

        checkNodeState(){
          if(this.checkTotal == this.list.items.length && this.halfTotal == 0){
            if(this.checked && this.half){
              this.half = false;
              this.$emit('click',0,-1);
            } else if(!this.checked && this.half){
              this.half = false;
              this.checked = true;
              this.$emit('click',1,-1);
            } else if(this.checked && !this.half){
              this.$emit('click',0,0);
            } else {
              this.checked = true;
              this.$emit('click',1,0);
            }
          } else if(this.checkTotal == 0 && this.halfTotal == 0){
            if(this.checked && this.half){
              this.half = false;
              this.checked = false;
              this.$emit('click',-1,-1);
            } else if(!this.checked && this.half){
              this.half = false;
              this.$emit('click',0,-1);
            } else if(this.checked && !this.half){
              this.checked = false;
              this.$emit('click',-1,0);
            } else {
              this.$emit('click',0,0);
            }
          } else {
            if(this.checked && this.half){
              this.$emit('click',0,0);
            } else if(!this.checked && this.half){
              this.checked = true;
              this.$emit('click',1,0);
            } else if(this.checked && !this.half){
              this.half = true;
              this.$emit('click',0,1);
            } else {
              this.half = true;
              this.checked = true;
              this.$emit('click',1,1);
            }
          }
        }
      }
    }
</script>
