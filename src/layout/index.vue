<template>
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot name="main" />
  </main>
  <main id="other">
    <slot />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
  <div class="scoped">
    <slot name="scoped" v-bind="{ msg }" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const msg = ref<string>('world')

    return {
      msg
    }
  }
})
</script>
