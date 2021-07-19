import { mount } from '@vue/test-utils'

const Show = {
  template: `
    <div v-if="show">{{ greeting }}</div>
  `,
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      greeting: 'Hello'
    }
  }
}

describe('test Show component', () => {
  it('renders a greeting when show is true', async () => {
    const wrapper = mount(Show)

    expect(wrapper.html()).toContain('Hello')
    
    await wrapper.setProps({ show: false })

    expect(wrapper.html()).not.toContain('Hello')
  })
})
