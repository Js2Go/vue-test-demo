import { mount } from '@vue/test-utils'
import Layout from '../index.vue'

describe('test layout index component', () => {
  it('layout default slot', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: 'Main Content',
      }
    })

    expect(wrapper.html()).toContain('Main Content')
    expect(wrapper.get('main#other').text()).toContain('Main Content')
  })

  it('layout default slot test case 2', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: [
          '<div id="one">One</div>',
          '<div id="two">Two</div>'
        ]
      }
    })

    expect(wrapper.find('#one').exists()).toBeTruthy()
    expect(wrapper.find('#two').exists()).toBeTruthy()
  })

  it('layout full page layout', () => {
    const wrapper = mount(Layout, {
      slots: {
        header: '<div>Header</div>',
        main: '<div>Main Content</div>',
        footer: '<div>Footer</div>'
      }
    })

    expect(wrapper.html()).toContain('<div>Header</div>')
    expect(wrapper.html()).toContain('<div>Main Content</div>')
    expect(wrapper.html()).toContain('<div>Footer</div>')
  })

  it('scoped slots', () => {
    const wrapper = mount(Layout, {
      slots: {
        scoped: `
          <template #scoped="params">
            Hello {{ params.msg }}
          </template>
        `
      }
    })

    expect(wrapper.html()).toContain('Hello world')
  })
})
