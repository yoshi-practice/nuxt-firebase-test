// MessageAPIのインポート
import MessageAPI from "@/api/MessageAPI"

export const state = () => ({
  items: []
})

export const mutations = {
  setEntity(state, items) {
    state.items = items;
  },
  clear(state) {
    state.items = [];
  }
}

export const actions = {
  load: ({
    commit
  }) => {
    return MessageAPI.getMessages()
      .then((res) => {
        let messages = []
        res.forEach(doc => {
          let data = {
            id: doc.id,
            content: doc.data().content
          }
          messages.push(data)
        })
        commit('setEntity', messages)
      })
      .catch(function (error) {
        console.log(error)
        commit('clear');
      });
  },
  add: ({
    commit,
    dispatch
  }, payload) => {
    return MessageAPI.addMessage(payload.messageContent)
      .then((res) => {
        dispatch('load');
      })
      .catch(function (error) {
        commit('clear');
      });
  },
}
