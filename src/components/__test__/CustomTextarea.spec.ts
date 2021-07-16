import { mount, VueWrapper } from '@vue/test-utils'
import CustomTextarea from '../CustomTextarea.vue'

let wrapper: VueWrapper<any>

beforeEach(() => {
  wrapper = mount(CustomTextarea)
})

afterEach(() => {
  wrapper.unmount()
})

describe('test CustomTextarea component', () => {
  test('emits textarea value on click', async () => {
    const description = 'Some very long text...'

    await wrapper.findComponent({ ref: 'description' }).setValue(description)
    wrapper.find('.submit').trigger('click')

    expect((wrapper.emitted('submit')![0] as any)[0]).toEqual({ description })
  })
})
