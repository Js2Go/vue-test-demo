<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>

    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Nav',
  // setup() {
  //   const admin = ref<boolean>(false)
  //   const shouldShowDropdown = ref<boolean>(false)
      
  //   return {
  //     admin,
  //     shouldShowDropdown,
  //   }
  // },
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
    }
  }
})
</script>
