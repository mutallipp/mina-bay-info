// pages/component/avatar/avatar.js
const app=getApp(),pageCommonBehavior = require('../page-common-behavior');
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {
    bgColor:{
      type:String,
      value:''
    },
    who:{
      type:String,
      value:''
    }
  },
  behaviors: [pageCommonBehavior],
  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    attached(e){
      let t=this;
      app.logger(t.properties.how)

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
