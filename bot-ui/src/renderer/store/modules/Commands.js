const state = {
  commands: [
    {
      id: 0,
      name: 'ping',
      desc: 'Get delay between client and Discord server in ms',
      enabled: false
    },
    {
      id: 1,
      name: 'meme',
      desc: 'Send random meme',
      enabled: true
    }
  ]
}

const getters = {
  commands: (state) => {
    return state.commands
  }
}

const actions = {
  toggleCommandEnabled (context, index) {
    context.commit('setCommandEnabled', {index: index, value: !context.state.commands[index].enabled})
  }
}

const mutations = {
  setCommandEnabled (state, payload) {
    // mutate state
    state.commands[payload.index].enabled = payload.value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
