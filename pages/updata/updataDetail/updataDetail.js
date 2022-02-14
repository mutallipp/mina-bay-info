import {goodsSave,getTagList } from '../../../utils/api'
import {uploadFile} from '../../../utils/net'
const utils = require('../../../utils/util')
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    imgList: [],
    uploadImgList:[],
    selectTags:[],
    categoryId:0,
    categoryItemId:0,
    ColorList: app.globalData.ColorList,
  },
  onLoad: function (options) {
    console.log('options:',options)
    const { categoryId} = options
    this.setData({
      categoryId
    })
    this.__init()
    this.getTagListData()
  },
  /**
   * tag获取 getTagList
   * @param {*} e 
   */
  async getTagListData(){
    const {code ,data,msg} = await getTagList()
    if(code !==200) return
    const colorList = app.globalData.ColorList
    this.setData({
      ColorList:data.map(res =>{
        const num=Math.floor(Math.random()*colorList.length)
        res.checked=false;
      return res
      })
    })
  },
  /**
   * 提交表单
   */
  async formSubmit(e){
    const {title,contact,phone,content} = e.detail.value
    const paramData = {
      title,
      contactName:contact,
      contactPhone:phone,
      description:content,
      productImgs:this.data.uploadImgList,
      productTags:this.data.selectTags,
      productCategoryId:parseInt(this.data.categoryId),
    }
    const validate = await this.checkParam(e.detail.value)
    if(!validate) return
    const {code ,msg} = await goodsSave(paramData)
    if(code !==200) return
    utils.toast.success('保存成功',1500)
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/index/index',
      })
    },1500)

  },
  /**
   * 参数验证器
   */
  checkParam(paramData){
    const {title,contact,phone,content} = paramData
    return new Promise((resolve,reject)=>{
      if(!title){
        utils.toast.error('请输入标题',500)
        resolve(false)
        return
      }
      if(!contact){
        utils.toast.error('请输入联系人',500)
        resolve(false)
        return
      }
      if(!phone){
        utils.toast.error('请输入手机号',500)
        resolve(false)
        return
      }
      if(!content){
        utils.toast.error('请输入描述内容',500)
        resolve(false)
        return
      }else{
        resolve(true)
      }
      
    })
  },
  // 图片上传
  async uploadImg(tempFilePath){
    const result = await uploadFile(tempFilePath)
    console.log(result);
    if(result.code !==200){
      console.log(result.msg);
      return
    }
    if (!result.data.img){
      console.log('img无效');
      return
    }
    const uploadImgList = this.data.uploadImgList
    uploadImgList.push(result.data.img)
    this.setData({uploadImgList:uploadImgList})
  },
  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]
        // 上传图片
        this.uploadImg(tempFilePath)
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
  /**
   * 标签选择
   * @param {} e 
   */
  changeTab(e){
    
    let t=this;
    let index=e.currentTarget.dataset.index,ColorList=t.data.ColorList
    ColorList[index].checked=!ColorList[index].checked
    // app.logger(index)
    t.setData({
      ColorList:ColorList
    })
    const select = ColorList.filter(item => item.checked).map(item=>item.id)
    t.setData({selectTags:select})
  },
  choiceStructureColumn(e){
    let data = {
      scructureIndex: this.data.scructureIndex
    };
    data.scructureIndex[e.detail.column] = e.detail.value;
    this.setData(data);
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