// page/component/new-pages/user/user.js
Page({
  data:{
    thumb:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/xyx.jpg?sign=6e9a692ea9c4532435cc5957422343d9&t=1588872066',
    nickname:'吊毛吊毛',
    orders:[{
      thumb:"https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/bk/c6.png?sign=cfcd3f5bbc83a0f989b33f5f4c6dba73&t=1588872588",
      number:1234567890,
      name:"华莱士全家桶",
      count:99,
      status:"已完成",
      money:0.01

    }],
    hasAddress:false,
    address:{}
  },
  onLoad(){
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res){
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    }),

    /**
     * 发起请求获取订单列表信息
     */
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
      success(res){
        self.setData({
          orders: res.data
        })
      }
    })
  },
  onShow(){
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function(res){
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders(){
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title:'支付提示',
          content:'<text>',
          showCancel: false
        })
      }
    })
  }
})