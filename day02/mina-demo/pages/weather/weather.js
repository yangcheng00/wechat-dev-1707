Page({
  data: {
    city: null,
    data: null
  },
  getCity: function(event){
    this.setData({city:event.detail.value});
  },
  getWeather: function(){
    let urlString = 'https://api.jisuapi.com/weather/query?appkey=9ef825ad675bffb3&city=' + this.data.city;
    let page = this; // ***
    wx.request({
      url: urlString,
      success: function(res) {
        page.setData({data:res.data}); 
      }
    })
  }
})