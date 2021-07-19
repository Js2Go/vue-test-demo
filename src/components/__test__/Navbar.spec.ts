import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'
import Signup from '../Signup.vue'

beforeEach(() => {
  // create teleport target
  const el = document.createElement('div')
  el.id = 'modal'
  document.body.appendChild(el)
})

afterEach(() => {
  // clean up
  document.body.outerHTML = ''
})

describe('test Navbar component', () => {
  it('teleport', async () => {
    const wrapper = mount(Navbar)

    // @ts-ignore
    const signup = wrapper.getComponent(Signup)
    await signup.get('input').setValue('valid_username')
    await signup.get('form').trigger('submit.prevent')

    expect(signup.emitted().signup[0]).toEqual(['valid_username'])
  })

  it('teleport case 2', async () => {
    const wrapper = mount(Navbar)

    // @ts-ignore
    const signup = wrapper.getComponent(Signup)
    await signup.get('input').setValue('no')
    await signup.get('form').trigger('submit.prevent')

    expect(signup.emitted()).not.toHaveProperty('signup')
  })
})
