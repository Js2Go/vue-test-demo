<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const handleInput = (e: Event) => {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return {
      handleInput
    }
  }
})
</script>
