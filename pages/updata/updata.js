// pages/updata/updata.js
import { getUploadGoodsCategory,getGoodsCategoryItem } from '../../utils/api'
const utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalName:null,
    radioModalData:[],
    goodBarData:[],
    categoryId:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodsCategoryData()
  },
    /**
   * 获取goodBarData
   */
  async getGoodsCategoryData(){
    const { code, data} = await getUploadGoodsCategory()
    if(code!==200){
      return
    }
    this.setData({goodBarData:data})

  },
  /**
   * clickTab
   */
  async clickTab(e){
    const {id}=e.detail
    if(!id) return
    const children = this.data.goodBarData.find(item => item.id ===id).children
    if(children&&children.length>0){
      this.setData({radioModalData:children})
      this.selectComponent('#m-modal').showModal('RadioModal')
      this.setData({
        modalName:'RadioModal',
        // categoryId:categoryId
      })
    }else{
      utils.toast.none('功能未开放',1500)
      console.log('radioModalData不存在');
    }
  },
  hideModal(e){
    const {id}=e.detail
    wx.navigateTo({
      url: `/pages/updata/updataDetail/updataDetail?categoryId=${id}`,
    })
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1 //当前选中的tab索引，设置选中状态
      })
    }
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