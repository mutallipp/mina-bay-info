const app=getApp();
const temp = {
  chickGood: function (e) {
    app.logger(e.currentTarget.dataset.index)
  }
}
//导出，供外部使用
export default temp