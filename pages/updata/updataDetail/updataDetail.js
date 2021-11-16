// pages/updata/updata.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    picker: ['二手车', '找工作', '租房','二手房','交易','旅游','生活','其他'],
    multiArray: [
      ['二手车', '找工作', '租房','二手房','交易','旅游','生活','其他'],
      ['小车', '大巴车', '运输车', '跑车', '休闲车','其他']
    ],
    multiIndex: [0, 0],
    scructureArray:[
      ['1个卫生间', '2个卫生间', '3个卫生间'],
      ['1个客厅', '2个客厅', '3个客厅', '4个客厅'],
      ['1个卧室', '2个卧室', '3个卧室', '4个卧室']
    ],
    scructureIndex:[0,0,0],
    imgList: [],
    ColorList: app.globalData.ColorList,
    hoseSize:'',
  },

  MultiChange(e) {
    // app.logger(e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    // app.logger(e.detail)
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      // 第一个选择器触发
      case 0:
        switch (data.multiIndex[0]) {
          // 第一个选择器选择了第一个
          case 0:
            data.multiArray[1] = ['小车', '大巴车', '运输车', '跑车', '休闲车','其他'];
            // data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
            // 选择了第二个
          case 1:
            data.multiArray[1] = ['服务员', '司机', '医生','保安'];
            // data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },
  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    // 显示照片
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    // 删除照片
    wx.showModal({
      title: '重要提示',
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  changeTab(e){
    
    let t=this;
    let index=e.currentTarget.dataset.index,ColorList=t.data.ColorList
    ColorList[index].checked=!ColorList[index].checked
    // app.logger(index)
    t.setData({
      ColorList:ColorList
    })
  },
  choiceStructureColumn(e){
    let data = {
      scructureIndex: this.data.scructureIndex
    };
    data.scructureIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  choiceStructureBind(e){
        app.logger(e.detail.value)
        this.setData({
          scructureIndex: e.detail.value
        })
  },
  /**
   * 生命周期函数--监听页面加载
   */

   __init(){
    let t=this;
    let ColorList=t.data.ColorList
    ColorList.map(res=>{
      res.checked=false;
      return res
    })
    t.setData({
      ColorList:ColorList
    })
   },
  onLoad: function (options) {
    this.__init()
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