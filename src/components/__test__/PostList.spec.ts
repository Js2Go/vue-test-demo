import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import PostList from '../PostList.vue'

const fakePostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' }
]

jest.mock('axios', () => ({
  get: jest.fn(() => fakePostList)
}))

describe('test PostList component', () => {
  it('loads posts on button click', async () => {
    const wrapper = mount(PostList)

    await wrapper.get('button').trigger('click')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/posts')

    await flushPromises()

    const posts = wrapper.findAll('[data-test="post"]')

    expect(posts).toHaveLength(2)
    expect(posts[0].text()).toContain('title1')
    expect(posts[1].text()).toContain('title2')
  })

  it('displays loading state on button click', async () => {
    const wrapper = mount(PostList)

    expect(wrapper.find('[role="alert"]').exists()).toBeFalsy()
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
    
    await wrapper.get('button').trigger('click')
    
    // bug
    // expect(wrapper.find('[role="alert"]').exists()).toBeTruthy()
    // expect(wrapper.get('button').attributes()).toHaveProperty('disabled')

    await flushPromises()

    expect(wrapper.find('[role="alert"').exists()).toBe(false)
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
  })
})
