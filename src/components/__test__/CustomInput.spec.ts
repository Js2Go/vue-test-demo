import { mount, VueWrapper } from '@vue/test-utils'
import CustomInput from '../CustomInput.vue'

let wrapper: VueWrapper<any>

let CustomInput2 = {
  template: `<custom-input v-model="input" label="Text Input" class="text-input" />`,
  components: { CustomInput }
}

beforeEach(() => {
  wrapper = mount(CustomInput2)
})

afterEach(() => {
  wrapper.unmount()
})

describe('test CustomInput component', () => {
  test('fills in the form', async () => {
    await wrapper.find('.text-input input').setValue('text')

    expect(wrapper.get('label').text()).toContain('Text Input')
    expect(wrapper.get('input').element.value).toContain('text')
  })
})
