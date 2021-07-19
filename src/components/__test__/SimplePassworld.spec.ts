import { mount, VueWrapper } from '@vue/test-utils'
import SimplePassword from '../SimplePassword.vue'

let wrapper: VueWrapper<any>

beforeEach(() => {
  // wrapper = mount(SimplePassword)
})

afterEach(() => {
  wrapper.unmount()
})

describe('test SimplePassword component', () => {
  it('renders an error if length is too short', () => {
    wrapper = mount(SimplePassword, {
      props: {
        minLength: 10
      },
      data() {
        return {
          password: 'short'
        }
      }
    })
    
    expect(wrapper.html()).toContain('Password must be at least 10 characters')
  })

  it('renders no error', () => {
    wrapper = mount(SimplePassword, {
      props: {
        minLength: 10
      },
      data() {
        return {
          password: 'longlonglonglonglonglonglonglonglonglonglonglong'
        }
      }
    })
    
    expect(wrapper.html()).not.toContain('Password must be at least 10 characters')
  })
})
