const {
  http
} = require('../../utils/http.js')

Page({
  data: {
    scrollBar: "112rpx",
    listbox: "0",
    tomatoes: {},
    todos: {},
  },

  onShow: function() {
    this.fetchTomatoes()
    this.fetchTodos()

  },

  fetchTomatoes() {
    http.get('/tomatoes', {
      is_group: "yes"
    }).then(response => {
      this.setData({
        tomatoes: response.response.data.resources
      })
    })
  },
  
  fetchTodos(){
    http.get('/todos', {
      is_group: "yes"
    }).then(response => {
      this.setData({
        todos: response.response.data.resources
      })
    }) 
  },

  clickHistory() {
    this.setData({
      scrollBar: "112rpx",
      listbox: "0"
    })
  },

  clickFinish() {
    this.setData({
      scrollBar: "488rpx",
      listbox: "-750rpx"
    })
  },
})