import { flushPromises, mount } from '@vue/test-utils'
import { useRouter, useRoute } from 'vue-router'
import router from '../'

const App = {
  template: `
    <router-link to="/posts">Go to posts</router-link>
    <router-view />
  `
}

const Component = {
  template: `<button @click="redirect">Click to Edit</button>`,
  props: ['isAuthenticated'],
  methods: {
    redirect() {
      // @ts-ignore
      if (this.isAuthenticated) {
        // @ts-ignore
        this.$router.push(`/posts/${this.$route.params.id}/edit`)
      } else {
        // @ts-ignore
        this.$router.push('/404')
      }
    }
  }
}

describe('test router', () => {
  it('allows authenticated user to edit a post', async () => {
    const mockRoute = {
      params: {
        id: 1
      }
    }
    const mockRouter = {
      push: jest.fn()
    }

    const wrapper = mount(Component, {
      props: {
        isAuthenticated: true
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })

    await wrapper.find('button').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/posts/1/edit')
  })

  it('routing', async () => {
    router.push('/')
  
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toContain('Welcome to the blogging app')

    await wrapper.find('a').trigger('click')
    await flushPromises()
    expect(wrapper.html()).toContain('Testing Vue Router')
  })
})
