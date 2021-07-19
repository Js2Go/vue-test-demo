<template>
  <button :disabled="loading" @click="getPosts">Get posts</button>

  <p v-if="loading" role="alert">Loading your posts…</p>
  <ul v-else>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface Post {
  id: number
  title: string
}

export default defineComponent({
  setup() {
    const posts = ref<null | Array<Post>>(null)
    const loading = ref<boolean>(false)

    const getPosts = async () => {
      loading.value = true
      posts.value = await axios.get('/api/posts')
      loading.value = false
    }

    return {
      posts,
      loading,
      getPosts,
    }
  }
})
</script>