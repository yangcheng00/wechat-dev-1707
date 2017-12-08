Page({
  data: {
    city: null
  },
  getCity: function(event){
    this.setData({city:event.detail.value});
  },
  getWeather: function(){
    let urlString = 'https://api.jisuapi.com/weather/query?appkey=9ef825ad675bffb3&city=' + this.data.city;
    wx.request({
      url: urlString,
      success: function(res) {
        console.log(res);
      }
    })
  }
})