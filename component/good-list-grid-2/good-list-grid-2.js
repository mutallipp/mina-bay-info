// pages/component/goog-list-grid-2/good-list-grid-2.js
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    bg_img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isCard(e) {
      this.setData({
        isCard: e.detail.value
      })
    },
  }
})
