import { mount, VueWrapper } from '@vue/test-utils'
import NormalForm from '../NormalForm.vue'

let wrapper: VueWrapper<any>

beforeEach(() => {
  wrapper = mount(NormalForm)
})

afterEach(() => {
  wrapper.unmount()
})

describe('test NormalForm component', () => {
  test('submits a form', async () => {
    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit ame')
    await wrapper.find('select').setValue('moscow')
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()
  })

  test('submits the form', async () => {
    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()

    await wrapper.find('form').trigger('submit.prevent')

    expect((wrapper.emitted('submit')![0] as any)[0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: 'monthly'
    })
  })

  test('emits an event only if you lose focus to a button', () => {
    const componentToGetFocus = wrapper.find('button#fBtn')

    wrapper.find('input#fInput').trigger('blur', {
      relatedTarget: componentToGetFocus.element
    })

    expect(wrapper.emitted('focus-lost')).toBeTruthy()
  })

  test('emits an event only if you lose focus', () => {
    const componentForm = wrapper.find('form#f')

    wrapper.find('input#fInput').trigger('blur', {
      relatedTarget: componentForm.element
    })

    expect(wrapper.emitted('focus-lost')).toBeUndefined()
  })
})
