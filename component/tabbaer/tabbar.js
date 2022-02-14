// pages/component/tabbaer/tabbar.js
const urils = require('../../utils/util')
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },

  properties: {
    phone:{
      type:String,
      value:''
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
    // 打电话
    callPhone(e){
      const {phone} = this.properties
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
    like(){
      urils.toast.none('功能还没开放')
    },
    contact(){
      urils.toast.none('功能还没开放')
    }
  }
})
