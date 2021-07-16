<template>
  <div>
    <input type="email" v-model="email">

    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const email = ref<string>('')

    const submit = () => {
      emit('submit', email.value)
    }

    return {
      email,
      submit,
    }
  }
})
</script>
