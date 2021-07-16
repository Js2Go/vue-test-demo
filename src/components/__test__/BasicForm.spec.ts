import { mount, VueWrapper } from '@vue/test-utils'
import BasicForm from '../BasicForm.vue'

let wrapper: VueWrapper<any>

describe('test BasicForm component', () => {
  test('sets the value', async () => {
    const input = wrapper.find('input')

    await input.setValue('my@email.com')

    expect(input.element.value).toBe('my@email.com')
  })

  test('trigger', async () => {
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('submit')
  })

  test('emits the input to its parent', async () => {
    await wrapper.find('input').setValue('my@email.com')
    await wrapper.find('button').trigger('click')

    expect((wrapper.emitted('submit')![0] as Array<number>)[0]).toBe('my@email.com')
  })
})

beforeEach(() => {
  wrapper = mount(BasicForm)
})

afterEach(() => {
  wrapper.unmount()
})
