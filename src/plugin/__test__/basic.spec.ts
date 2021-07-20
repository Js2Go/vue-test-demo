import { mount, config } from '@vue/test-utils'
import basicPlugin from '../basic'

config.plugins.VueWrapper.install(basicPlugin)

describe('test basic plugin', () => {
  it('show the $el html', () => {
    const wrapper = mount({ template: `<h1>🔌 Plugin</h1>` })
    
    // console.log((wrapper as any).$el.innerHTML)
  })
})

