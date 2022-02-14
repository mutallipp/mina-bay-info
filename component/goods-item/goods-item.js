// component/goods-item/goods-item.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickGoods(e){
      console.log('clickGoods');
      wx.navigateTo({
        url: `/pages/detail/detail?goodsId=${this.properties.goods.id}`,
      })
    }
  }
})
