// component/m-modal/m-modal.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    modalName:{
      type:String,
      value:'',
    },
    radioModalData:{
      type:Array,
      value:[]
    }
  },
  observers:{
  },

  /**
   * 组件的初始数据
   */
  data: {
    modalName1:''
  },

  lifetimes:{
    attached(){
      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal(modalName) {
      this.setData({
        modalName: modalName
      })
    },
    hideModal(e) {
      const {index} = e.currentTarget.dataset
      console.log('hiddenModal',index);
      this.setData({
        modalName: null
      })
      this.triggerEvent('hideModal',{...this.properties.radioModalData[index]} )
    },
  }
})
