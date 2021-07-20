import { DOMWrapper, VueWrapper } from '@vue/test-utils'

const createWrapperError = (errMsg: string) => {
  return new Error(errMsg)
}

const DataTestIdPlugin = (wrapper: VueWrapper<any>) => {
  function findByTestId(selector: string) {
    const dataSelector = `[data-testid='${selector}']`
    const element = wrapper.element.querySelector(dataSelector)
    if (element) {
      return new DOMWrapper(element)
    }

    return createWrapperError('DOMWrapper')
  }

  return {
    findByTestId
  }
}

export default DataTestIdPlugin
