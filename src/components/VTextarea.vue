<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VTextarea',
  props: ['modelValue'],
  emits: ['update:modelValue']
})
</script>
