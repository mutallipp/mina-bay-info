// pages/component/swiper/swiper.js
const app=getApp(),pageCommonBehavior = require('../page-common-behavior');
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    swiperList:{
      type:Array,
      value:[]
    }
  },
  behaviors: [pageCommonBehavior],
  data: {
    // 这里是一些组件内部数据
    someData: {},
    swiperList:[],
    CustomBar:app.globalData.CustomBar,
  },
  methods: {
    // 这里是一个自定义方法
    init:function(swiperList){
      // app.logger('i am init')
      this.setData({
        swiperList:swiperList
      })
    },
    picPicter:function(e){
      const { index } = e.currentTarget.dataset
      let t=this,swiperList=t.properties.swiperList
      
      wx.previewImage({
        urls: swiperList.map(ittem=>ittem.imgUrl),
        current: swiperList[index].imgUrl // 当前显示图片的http链接      
      })
    },
    showImage(e) {
     
    },
    customMethod: function(){}
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },
})