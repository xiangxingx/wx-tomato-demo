Page({
  data: {
    lists: [{
        id: 1,
        text: "今天完成了啦啦啦,今天完成了啦啦啦今天完成了啦啦啦,今天完成了啦啦啦,今天完成了啦啦啦,今天完成了啦啦啦",
        finish: false
      },
      {
        id: 2,
        text: "今天完成了哈哈哈",
        finish: false
      },
      {
        id: 3,
        text: "今天完成了呵呵呵",
        finish: false
      }
    ],
    visible: false
  },

  confirm(event) {
    let content = event.detail
    if (content) {
      let todo = [{
        id: this.data.lists.length + 1,
        text: content,
        finish: false
      }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({
        lists: this.data.lists
      })
      this.cancel()
    }
    console.log(content)
  },

  finishTodo(event) {
    let index = event.currentTarget.dataset.index
    console.log(index)
    this.data.lists[index].finish = true
    this.setData({
      lists: this.data.lists
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
      url: '/pages/tomato/tomato'
    })
  }

})