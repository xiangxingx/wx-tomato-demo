const {
  http
} = require("../../utils/http.js")
const {
  app_id,
  app_secret
} = getApp().globalData

Page({
  data: {

  },

  onShow() {

  },

  login(event) {
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    this.wxLogin(encrypted_data, iv)
  },

  wxLogin(encrypted_data, iv) {
    wx.login({
      success: res => this.loginMe(res.code, iv, encrypted_data)
    })
  },

  loginMe(code, iv, encrypted_data) {
    http.post("/sign_in/mini_program_user", {
        code,
        iv,
        encrypted_data,
        app_id,
        app_secret,
      })
      .then(response => {
        this.saveMessage(response)
        wx.reLaunch({
          url: '/pages/home/home',
        })
      })
  },

  saveMessage(response) {
    console.log(response.statusCode)
    wx.setStorageSync('me', response.response.data.resource)
    wx.setStorageSync('X-token', response.response.header['X-token'])
  }
})