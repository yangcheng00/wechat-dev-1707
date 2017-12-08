Page({
  data: {
    city: null
  },
  getCity: function(event){
    this.setData({city:event.detail});
  },
  getWeather: function(){
    console.log(this.data.city);
  }
})