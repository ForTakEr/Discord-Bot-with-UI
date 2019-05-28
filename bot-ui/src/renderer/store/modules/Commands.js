const commands = require('../../../bot/commands/index')

const state = {commands: []}

const getters = {
  commands: (state) => {
    return state.commands
  }
}

const actions = {
  toggleCommandEnabled (context, index) {
    context.commit('setCommandEnabled', {index: index, value: !context.state.commands[index].enabled})
  },
  addCommand (context, command) {
    context.commit('ADD_COMMAND', command)
  }
}

const mutations = {
  setCommandEnabled (state, payload) {
    // mutate state
    state.commands[payload.index].enabled = payload.value
  },
  ADD_COMMAND (state, payload) {
    // mutate state
    state.commands.push({name: payload.name, desc: payload.description, id: payload.id, enabled: false})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
