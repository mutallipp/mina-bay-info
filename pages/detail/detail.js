// pages/detail/detail.js
const app = getApp();
import scrollGood from '../template/scroll-good/scroll-good.js'
import { getGoodsDetail,getRecommendList } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    goods:{},
    ColorList: app.globalData.ColorList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  chickGood:function (params) {
    scrollGood.chickGood(params)
  },
  /**
   * 根据id获取商品
   */
  async getGoodsDetailData(id){
    const { code, data} = await getGoodsDetail({
      id
    })
    if(code!==200){
      return
    }
    this.setData({goods:data})
  },
  /**
   * 推荐商品 getRecommendList
   */
  async getRecommendListData(){
    const { code, data} = await getRecommendList()
    if(code!==200){
      return
    }
    this.setData({recommendList:data.list})
  },
  aboutUser(){
    wx.navigateTo({
      url: '../aboutUser/aboutUser',
    })
  },
  onLoad: function (options) {
    let t=this;
    const {goodsId} = options
    this.getGoodsDetailData(goodsId);
    this.getRecommendListData()
    console.log(goodsId);
    // const componentSwiper=t.selectComponent("#component-swiper")
    // componentSwiper.init(t.data.swiperList)
    // app.logger(app.globalData)
    // app.logger(app.globalData.ColorList)
  },
      // 打电话
    callPhone(e){
      const {phone} = e.currentTarget.dataset
      console.log(phone);
      if(phone){
        wx.makePhoneCall({
          phoneNumber: phone //仅为示例，并非真实的电话号码
        })
      }else{
        console.log('没有电话号码');
        utils.toast.error('没有电话号码')

      }
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})