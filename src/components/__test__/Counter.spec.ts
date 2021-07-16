import { mount, VueWrapper } from '@vue/test-utils'
import Counter from '../Counter.vue'

let wrapper: VueWrapper<any>
describe('test Counter component', () => {
  test('emits an event when clicked', () => {
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('increment')
  })

  test('emits an event with count when clicked', () => {
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const incrementEvent = wrapper.emitted('increment')

    expect(incrementEvent).toHaveLength(2)
    expect(incrementEvent![0]).toEqual([1])
    expect(incrementEvent![1]).toEqual([2])
  })

  test('emits increment2 event with count when clicked', () => {
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('increment2')).toHaveLength(2)

    expect(wrapper.emitted('increment2')![0]).toEqual([
      {
        count: 1,
        isEven: false
      }
    ])

    expect(wrapper.emitted('increment2')![1]).toEqual([
      {
        count: 2,
        isEven: true
      }
    ])
  })
})

beforeEach(() => {
  wrapper = mount(Counter)
})

afterEach(() => {
  wrapper.unmount()
})
