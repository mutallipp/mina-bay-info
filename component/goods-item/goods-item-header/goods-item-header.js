// component/goods-item/goods-item-header/goods-item-header.js
const utils = require('../../../utils/util')
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
    },
    categoriesList:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    category:[]
  },

  /**
   * 生命周期函数
   */
  lifetimes:{
    attached(){
      this._init()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _init(){
      const categoriesList= this.properties.categoriesList
      const { productCategoryId } = this.properties.goods
      const temp = this.getCategoryByPid(categoriesList,productCategoryId)
      const category = this.data.category
      category.push(temp)
      this.setData({
        category
      })
    },
    //暂时只获取最后一级
    getCategoryByPid(categoriesList,pid){
      
      if(!categoriesList || categoriesList.length ===0 || pid ===null || pid==='') return {}
      const len =categoriesList.length
      for(let i =0;i<len;i++){
        const item = categoriesList[i]
        if(item.id === pid){
          return item
        }else{
          this.getCategoryByPid(item.children,pid)
        }
      }
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
  }
})
