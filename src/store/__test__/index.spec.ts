import { mount } from '@vue/test-utils'
import { computed } from 'vue'
import { useStore } from 'vuex'
import store from '../'

const App = {
  template: `
    <div>
      <button @click="increment" />
      Count: {{ count }}
    </div>
  `,
  computed: {
    count(): void {
      return (this as any).$store.state.count
    }
  },
  methods: {
    increment(): void {
      (this as any).$store.commit('increment')
    }
  }
}

describe('test vuex store', () => {
  it('vuex', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('Count: 1')
  })

  it('vuex using a mock store', async () => {
    const $store = {
      state: {
        count: 25,
      },
      commit: jest.fn()
    }

    const wrapper = mount(App, {
      global: {
        mocks: {
          $store
        }
      }
    })

    expect(wrapper.html()).toContain('Count: 25')
    await wrapper.find('button').trigger('click')
    expect($store.commit).toHaveBeenCalled()
  })
})
