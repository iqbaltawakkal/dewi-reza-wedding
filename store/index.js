export const state = () => ({
  isModalActive: false,
})

export const mutations = {
  setIsModalActive(state, value) {
    state.isModalActive = value
  },
}
