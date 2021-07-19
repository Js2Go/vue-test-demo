import { flushPromises, mount } from '@vue/test-utils'
// import axios from 'axios'

const AxiosComponent = {
  template: `
    <div></div>
  `
}

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'some mocked data!' })
}))

describe('test async', () => {
  it('uses a mocked axios HTTP client and flush-promises', async () => {
    const wrapper = mount(AxiosComponent)

    await flushPromises()
  })
})
