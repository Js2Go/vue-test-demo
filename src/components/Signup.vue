<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model="username" />
    </form>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['signup'],
  data() {
    return {
      username: ''
    }
  },
  computed: {
    error(): boolean {
      return (this as any).username.length < 8
    }
  },
  methods: {
    submit(): void {
      if (!(this as any).error) {
        (this as any).$emit('signup', (this as any).username)
      }
    }
  }
}
</script>
