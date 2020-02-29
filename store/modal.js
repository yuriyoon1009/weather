export const state = () => ({
  visible: false,
  componentKey: '',
  componentProps: {}
})

export const mutations = {
  openModal: (state, { componentKey, props = {} }) => {
    state.componentKey = componentKey
    state.componentProps = props
    state.visible = true
  },
  closeModal: (state) => {
    state.componentKey = ''
    state.componentProps = {}
    state.visible = false
  }
}

export const getters = {
  getComponentKey: state => state.componentKey,
  getComponentProps: state => state.componentProps
}
