<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />

    <textarea v-model="form.description" />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />

    <button type="submit">Submit</button>
  </form>

  <form id="f">
    <input id="fInput" type="text" v-model="value" @blur="handleBlur" />
    <button id="fBtn">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

interface Form {
  email: string
  description: string
  city: string
  subscribe: boolean
  interval: string
}

export default defineComponent({
  emits: {
    submit: (paylaod: Form) => true,
    'focus-lost': () => true
  },
  setup(_, { emit }) {
    const form = reactive<Form>({
      email: '',
      description: '',
      city: '',
      subscribe: false,
      interval: ''
    })

    const value = ref<string>('')

    const submit = async () => {
      emit('submit', form)
    }

    const handleBlur = (event: any) => {
      if (event.relatedTarget.tagName === 'BUTTON') {
        emit('focus-lost')
      }
    }

    return {
      value,
      form,
      submit,
      handleBlur
    }
  }
})
</script>
