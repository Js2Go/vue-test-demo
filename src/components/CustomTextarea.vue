<template>
  <form>
    <VTextarea v-model="desc" ref="description" />
    <button class="submit" @click="handleClick">Send</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VTextarea from './VTextarea.vue'

export default defineComponent({
  name: 'CustomTextarea',
  components: { VTextarea },
  emits: ['submit'],
  setup(_, { emit }) {
    const description = ref(null)
    const desc = ref<string>('')

    const handleClick = () => {
      emit('submit', description.value)
    }

    return {
      description,
      desc,
      handleClick
    }
  }
})
</script>