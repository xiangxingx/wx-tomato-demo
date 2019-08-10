const {
  http
} = require('../../utils/http.js')

Page({
  data: {
    lists: [],
    visible: false
  },

  onShow() {
    http.get('/todos?completed=false').then(response => {
      this.setData({
        lists: response.response.data.resources
      })
    })
  },

  confirm(event) {
    let content = event.detail
    if (content) {
      http.post('/todos', {
        description: content
      }).then(response => {
        let todo = [response.response.data.resource]
        console.log(todo)
        this.data.lists = todo.concat(this.data.lists)
        this.setData({
          lists: this.data.lists
        })
        this.cancel()
      })
    }
  },

  finishTodo(event) {
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    console.log(`/todos/${id}`)
    http.put(`/todos/${id}`, {
      completed: true
    }).then(response => {
      this.data.lists[index] = response.response.data.resource
      this.setData({
        lists: this.data.lists
      })
    })
  },

  cancel() {
    this.setData({
      visible: false
    })
  },

  setTask() {
    this.setData({
      visible: true
    })
  },

  setClock() {
    wx.navigateTo({
      url: '../tomato/tomato'
    })
  }
})