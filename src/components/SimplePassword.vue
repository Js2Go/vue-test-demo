<template>
  <input v-model="password" />
  <div v-if="error">{{ error }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    minLength: {
      type: Number
    }
  },
  data() {
    return {
      password: ''
    }
  },
  computed: {
    error() {
      if (this.password.length < this.minLength!) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return
    }
  }
})
</script>
