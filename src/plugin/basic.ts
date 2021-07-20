import { VueWrapper } from '@vue/test-utils'

const myAliasPlugin = (wrapper: VueWrapper<any>) => {
  return {
    $el: wrapper.element
  }
}

export default myAliasPlugin
