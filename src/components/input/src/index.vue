<template>
    <div :class="[
        type === 'textarea' ? 'face-textarea' : 'face-input',
        size ? 'face-input-' + size : '',
        disabled ? 'face-input-disabled' : '',
        readonly ? 'face-input-readonly' : '',
        clearable ? 'face-input-readonly' : ''
      ]"
    >
      <template v-if="type === 'textarea'">
        <textarea :value="value" ref="textarea" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="$emit('textarea', $event.target.value)"></textarea>
      </template>
      <template v-else>
        <input type="text" :value="value" ref="input" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="$emit('input', $event.target.value)"/>
      </template>
    </div>
</template>

<script>
    export default {
        name: 'face-input',

        props: {
          value:[String, Number],
          size:String,
          disabled:Boolean,
          readonly:Boolean,
          clearable:Boolean,
          type: {
            type: String,
            default: 'text'
          },
          placeholder:{
            type: String,
            default: '请输入内容'
          }
        }
    }
</script>
