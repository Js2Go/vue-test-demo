<template>
  <button @click="handleClick">Increment</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export interface Increment2Payload {
  count: number
  isEven: boolean
}

export default defineComponent({
  name: 'Counter',
  emits: {
    increment: (payload: number) => true,
    increment2: (payload: Increment2Payload) => true
  },
  setup(_, { emit }) {
    const count = ref<number>(0)

    const handleClick = () => {
      count.value += 1
      emit('increment', count.value)
      emit('increment2', {
        count: count.value,
        isEven: count.value % 2 === 0
      })
    }

    return {
      count,
      handleClick
    }
  }
})
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     handleClick() {
//       this.count += 1
//       this.$emit('increment', this.count)
//     }
//   }
// }
</script>
