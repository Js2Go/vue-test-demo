import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('this is first test', () => {
  it('test app?', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('p')    
  })

  test('i don\'t know this is what', () => {
    expect(1 + 2).toEqual(3)
  })
})
