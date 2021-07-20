import { defineAsyncComponent, defineComponent } from 'vue'
import { config, flushPromises, mount } from '@vue/test-utils'
import axios from 'axios'

const FetchDataFromApi = {
  name: 'FetchDataFromApi',
  template: `
    <div>{{ result }}</div>
  `,
  async mounted() {
    const res = await axios.get('/api/info')
    // @ts-ignore
    this.result = res.data
  },
  data() {
    return {
      result: ''
    }
  }
}

const App = {
  components: {
    FetchDataFromApi
  },
  template: `
    <h1>Welcome to Vue.js 3</h1>
    <fetch-data-from-api />
  `
}

describe('test test test', () => {
  it('stubs component with custom template', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          FetchDataFromApi: {
            template: '<span />'
          }
        }
      }
    })

    expect(wrapper.html()).toContain('Welcome to Vue.js 3')
  })

  it('stubs component', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          FetchDataFromApi: true
        }
      }
    })

    // console.log(wrapper.html())

    expect(wrapper.html()).toContain('Welcome to Vue.js 3')
  })
})

const ComplexA = {
  template: '<h2>Hello from real component!</h2>'
}

const ComplexB = {
  template: '<h2>ComplexB</h2>'
}

const ComplexC = {
  template: '<h2>ComplexC</h2>'
}

const ComplexComponent = {
  components: { ComplexA, ComplexB, ComplexC },
  template: `
    <h1>Welcome to Vue.js 3</h1>
    <ComplexA />
    <ComplexB />
    <ComplexC />
  `
}

describe('test test test2', () => {
  it('shallow stubs out all child components', () => {
    const wrapper = mount(ComplexComponent, {
      // global: {
      //   stubs: {
      //     ComplexA: true,
      //     ComplexB: true,
      //     ComplexC: true,
      //   }
      // },
      // other method
      shallow: true
    })

    // console.log(wrapper.html())
  })

  it('shallow allows opt-out of stubbing specific component', () => {
    const wrapper = mount(ComplexComponent, {
      shallow: true,
      global: {
        stubs: { ComplexA: false, ComplexB: false }
      }
    })

    // console.log(wrapper.html())
  })
})

const App2 = defineComponent({
  components: {
    MyComponent: defineAsyncComponent(() => import('../components/AsyncComponent'))
  },
  template: '<MyComponent />'
})

describe('test test test3', () => {
  it('stubs async component with resolving error ver', () => {
    const wrapper = mount(App2, {
      global: {
        stubs: {
          MyComponent: true
        }
      }
    })
  
    expect(wrapper.html()).toBe('<my-component-stub></my-component-stub>')
  })

  it('stubs async component with resolving', async () => {
    const wrapper = mount(App2, {
      global: {
        stubs: {
          AsyncComponent: true
        }
      }
    })

    await flushPromises()
  
    expect(wrapper.html()).toBe('<async-component-stub></async-component-stub>')
  })
})

const CustomButton = {
  template: `
    <button>
      <slot />
    </button>
  `
}

const App3 = {
  props: ['authenticated'],
  components: { CustomButton },
  template: `
    <custom-button>
      <div v-if="authenticated">Log out</div>
      <div v-else>Log in</div>
    </custom-button>
  `
}

describe('test test test4', () => {
  beforeAll(() => {
    config.renderStubDefaultSlot = true
  })

  afterAll(() => {
    config.renderStubDefaultSlot = false
  })

  test('shallow with stubs', () => {
    const wrapper = mount(App3, {
      props: {
        authenticated: true
      },
      shallow: true
    })
  
    expect(wrapper.html()).toContain('Log out')
  })
})
