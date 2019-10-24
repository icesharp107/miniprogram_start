App({
  onLaunch: function () {
    //获取用户信息，异步
    wx.getUserInfo({
      success:res=>{
        console.log(res)
      }
    })
  },
  onShow: function (options) {
    //但场景1001打开的时候
    switch(options.scene){
      case 1001:
        break;
    }
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  },
  globalData:{
    //全局对象---共享数据
    name:12
  }
})
