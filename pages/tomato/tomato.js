Page({
  timer: null,
  timerState: "stop",
  data: {
    second: 5,
    time: "",
    stopOrStart: "暂停"
  },

  setTime() {
    let m = Math.floor(this.data.second / 60)
    let s = Math.floor(this.data.second % 60)
    if (m <= 9) {
      m = "0" + m
    }
    if (s <= 9) {
      s = "0" + s
    }
    this.setData({
      time: `${m}:${s}`
    })
    this.newTime()
    return `${m}:${s}`
  },

  newTime() {
    if (this.data.time === "00:00") {
      this.timerState = "start"
      clearInterval(this.timer)
      this.setData({
        stopOrStart: "开始",
        second: 1500
      })
    }
  },

  onShow: function() {
    this.changeTime()
  },

  changeTime() {
    this.timer = setInterval(() => {
      if (this.data.second < 0) {
        clearInterval(this.timer)
        return
      }

      this.data.second -= 1
      this.setTime()
      console.log(this.setTime())
      console.log(this.data.second)
    }, 1000)
  },

  clockState() {
    if (this.timerState === "stop") {
      clearInterval(this.timer)
      this.setData({
        stopOrStart: "开始"
      })
      this.timerState = "start"
    } else if (this.timerState === "start") {
      this.changeTime()
      this.setData({
        stopOrStart: "暂停"
      })
      this.timerState = "stop"
    }
  },

})