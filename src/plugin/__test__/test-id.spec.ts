import { mount, config } from '@vue/test-utils'
import DataTestIdPlugin from '../test-id'

const MyForm = {
  template: `
    <form>
      <slot />
    </form>
  `
}

const MyInput = {
  template: `
    <input :value="modelValue" @input="input" />
  `,
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // @ts-ignore
  setup(_, { emit }) {
    const input = (e: Event) => {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return {
      input
    }
  }
}

const App = {
  template: `
    <template>
      <MyForm class="form-container" data-testid="form">
        <MyInput data-testid="name-input" v-model="name" />
      </MyForm>
    </template>
  `,
  components: {MyForm, MyInput},
  data() {
    return {
      name: ''
    }
  }
}

config.plugins.VueWrapper.install(DataTestIdPlugin)

describe('test data-test-id plugin', () => {
  it('case 1', () => {
    const wrapper = mount(App)
    const input = (wrapper as any).findByTestId('name-input')

    input.setValue('mazi')

    expect(input.element.value).toEqual('mazi')
  })

  it('case 2', () => {
    const wrapper = mount(App)
    const input = (wrapper as any).findByTestId('name-input1')

    expect(wrapper.get('form').html()).not.toContain(input)
  })
})
