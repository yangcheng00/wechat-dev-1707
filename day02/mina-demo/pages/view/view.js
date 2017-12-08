Page({
  data: {
    message: 'new text...'
  },
  changeMessage: function(event){
    console.log(event.type);
    this.setData({
      message: 'text...'
    });
  }
});