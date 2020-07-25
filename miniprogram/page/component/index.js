//获取应用实例
import {
  getSellers
} from '../utils/apis'

Page({
  data: {
    imgUrls: [
      'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/b1.jpg',
      'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/b2.jpg',
      'https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/b3.jpg'
    ],
    // 分类数据
    category: [
      {
        "category_id": "1",
        "title": "本地特产",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/1.png"
      },
      {
        "category_id": "2",
        "title": "美食外卖",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/2.png"
      },
      {
        "category_id": "3",
        "title": "甜品蛋糕",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/3.png"
      },
      {
        "category_id": "4",
        "title": "果蔬生鲜",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/4.png"
      },
      {
        "category_id": "5",
        "title": "超市便利",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/5.png"
      },
      {
        "category_id": "6",
        "title": "进口产品",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/6.png"
      },
      {
        "category_id": "7",
        "title": "优惠活动",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/7.png"
      },
      {
        "category_id": "8",
        "title": "全部分类",
        "icon": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/category/8.png"
      }
    ],
    // 商店数据
    business: [
      { 
        "id":'bk',
        "title": "汉堡王",
        "sellcount": 3600,
        "startsell": 30,
        "packagesell": 5,
        "shopimg": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/bk.png",
        "pmin": 30,
        "dist": 450,
        "shopicon": [
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/准.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/减.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/折.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/特.png",
        ]
      },
      {
        "id": 'ycyk',
        "title": "优城悦客",
        "sellcount": 3720,
        "startsell": 25,
        "packagesell": 0,
        "shopimg": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/ye.png",
        "pmin": 23,
        "dist": 550,
        "shopicon": [
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/折.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/特.png",
        ]
      },
      {
        "id":'hdl',
        "title": "海底捞",
        "sellcount": 12360,
        "startsell": 120,
        "packagesell": 10,
        "shopimg": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/hdl.png",
        "pmin": 36,
        "dist": 480,
        "shopicon": [
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/减.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/折.png",
        ]
      },
      {
        "id": 'dj',
        "title": "笃记",
        "sellcount": 13720,
        "startsell": 120,
        "packagesell": 0,
        "shopimg": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/dj.jpg",
        "pmin": 23,
        "dist": 20,
        "shopicon": [
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/折.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/特.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/减.png",
          
        ]
      },
      {
        "id": 'xyx',
        "title": "鲜芋仙",
        "sellcount": 1720,
        "startsell": 20,
        "packagesell": 0,
        "shopimg": "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/xyx.jpg",
        "pmin": 20,
        "dist": 220,
        "shopicon": [
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/折.png",
          "https://6364-cdf-ydtks-1301933682.tcb.qcloud.la/image/icon/减.png",

        ]
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  
     //轮播图跳转视频
  toshipin:function(){
    wx.navigateTo({
      url: '../../pages/index/index',
    }) 
   },


  redTo: function(e) {
    let shopid = e.currentTarget.dataset.shop
    console.log(shopid)
    wx.navigateTo({
      url: 'category/category?d='+shopid
    })
  }
})