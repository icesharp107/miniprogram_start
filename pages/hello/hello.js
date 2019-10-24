// pages/hello/hello.js
//获取App对象
const app=getApp()
console.log(app.globalData.name)
Page({
  data: {
    message:'hello world'
  },
  handleBrnClick(){
    this.setData({
      message: 'heheheh'
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  }
})