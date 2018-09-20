<template>
    <div :class="[
        type === 'textarea' ? 'face-textarea' : 'face-input',
        disabled ? 'face-input-disabled' : '',
        readonly ? 'face-input-readonly' : '',
        clearable ? 'face-input-clearable' : '',
        beforeIcon ? 'face-input-beforeIcon' : '',
        afterIcon ? 'face-input-afterIcon' : '',
      ]"
    >
      <template v-if="type === 'textarea'">
        <textarea :value="value" ref="textarea" :placeholder="placeholder" :rows="rows" :disabled="disabled" :readonly="readonly" @input="$emit('input', $event.target.value)"></textarea>
      </template>
      <template v-else>
        <input type="text" :value="value" ref="input" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="$emit('input', $event.target.value)" />
        <i v-if="beforeIcon || afterIcon" class="face-icon face-input-icon" :class="[
          beforeIcon ?  beforeIcon : '',
          afterIcon ? afterIcon : ''
        ]"></i>
      </template>

      <i v-if="clearable" class="face-icon bim-failed face-input-icon-close" @click="clear"></i>
    </div>
</template>

<script>
    export default {
        name: 'face-input',

        props: {
          value:[String, Number],
          disabled:Boolean,
          readonly:Boolean,
          clearable:Boolean,
          rows:{
            type:Number,
            default: 1
          },
          type: {
            type: String,
            default: 'text'
          },
          beforeIcon: String,
          afterIcon: String,
          placeholder:{
            type: String,
            default: '请输入内容'
          }
        },

        methods:{
          clear(){
            this.$emit('input','');
          }
        }
    }
</script>
