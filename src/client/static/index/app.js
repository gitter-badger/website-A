// created by guokeke @ 16.4.5
// 首页脚本
//
$(function(){
  //
<<<<<<< HEAD
  $.ajax({
      url:'/api/v1/news/11/',
      dataType:'json',
      contentType:'application/json',
      method:'get',
      data:JSON.stringify({news_title:'aaa'})
  })
  .error(function(err){
    console.log(err)
  })
  .success(function(res){
    console.log(res)
  })
=======
  var app = function(){
    return app.prototype.init()
  }

  function getWindowInnerHeight(){
    return window.innerHeight
  }

  function getWindowWidth(){
    return window.innerWidth
  }

  function preLoadImage(img,src,callback){
    $(img).attr('src',src)
    $(img).load(callback);
  }

  app.prototype = {
    init:function(){

      this.headerHeight = getWindowInnerHeight()
      this.headerWidth = getWindowWidth()

      return this.setup()
    },
    setup:function(){

      this.setupHeader()

      return this.bind()
    },

    bind:function(){

      return this
    },

    setupHeader:function(){
      var self = this,
          canvas = $('.head-canvas'),
          ctx = canvas[0].getContext('2d'),
          image = $('.head-image-image'),
          cover = $('.head-image-cover')

      this.setWidth(canvas,this.headerWidth)
      this.setHeight(canvas,this.headerHeight)
      this.setHeight(image,this.headerHeight)
      
      // 这是预览效果
      var m = new Image()
      m.src = 'http://7xsoiv.com2.z0.glb.clouddn.com/img-1.jpg?imageView2/2/w/500/h/500/interlace/0/q/100'
      // 图片跨源
      m.crossOrigin = "Anonymous";
      m.onload = function(){
        ctx.drawImage(m,0,0,self.headerWidth,self.headerHeight)
        // 将图片模糊
        StackBlur.canvasRGBA(canvas[0], 0, 0, self.headerWidth, self.headerHeight, 8)
      }
      this.preLoadHeaderImage(image,'//7xsoiv.com2.z0.glb.clouddn.com/img-1.jpg',function(){
        image.addClass('head-image-image-active')
        canvas.addClass('head-canvas-hide')
      })

      return this
    },

    preLoadHeaderImage:function(img,src,callback){
      preLoadImage(img,src,callback)
    },

    setWidth:function(e,width){
      $(e).attr('width',width)
    },

    setHeight:function(e,height){
      $(e).attr('height',height)
    },

    setupNav:function(){

    }


  }

  app();

>>>>>>> 2193feb067e44a70cb325cefc0d8003a8f06371f
})
