// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
        {id:1,title:'枣枣枣甜甜的枣',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/c3.png',num:4,price:0.99},
        {id:2,title:'枣枣枣甜甜的枣',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/c3.png',num:4,price:0.99},
        {id:3,title:'枣枣枣甜甜的枣',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/c3.png',num:4,price:0.99},
        {id:4,title:'枣枣枣甜甜的枣',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/c3.png',num:4,price:0.99},
        {id:1,title:'枣枣枣甜甜的枣',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/c3.png',num:4,price:0.99},
        {id:5,title:'素米 500g',image:'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la//image/s6.png',num:1,price:0.99}
      ]
  },

  onReady() {
    this.getTotalPrice();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '待完成',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  }
})