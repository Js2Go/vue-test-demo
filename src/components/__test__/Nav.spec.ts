import { mount } from '@vue/test-utils'
import Nav from '../Nav.vue'

describe('test Nav component', () => {
  test('renders a profile link', () => {
    const wrapper = mount(Nav)

    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
  })

  test('does not render an admin link', () => {
    const wrapper = mount(Nav)

    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  test('renders an admin link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          admin: true
        }
      }
    })

    expect(wrapper.get('#admin').text()).toEqual('Admin')
  })

  test('does not show the user dropdown', () => {
    const wrapper = mount(Nav)

    expect(wrapper.get('#user-dropdown').isVisible()).toBeFalsy()
  })

  test('show the user dropdown', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          shouldShowDropdown: true
        }
      }
    })

    expect(wrapper.get('#user-dropdown').isVisible()).toBe(true)
  })
})
