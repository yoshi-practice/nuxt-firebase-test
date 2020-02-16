import firebase from '@/plugins/firebase'

export default class MessageAPI {

  /**
   * メッセージのリストを取得
   */
  static getMessages() {
    const messagesRef = firebase.firestore().collection('messages')
    return messagesRef.orderBy('created', 'desc').get()
  }

  /**
   * メッセージを追加
   * @param {string} message
   */
  static addMessage(messageContent) {
    let message = {
      content: messageContent,
      created: Date.now()
    }
    return firebase.firestore().collection('messages').add(message)
  }
}
