// created by guokeke @ 16.4.5
// 首页脚本
//
$(function(){
  //

  var app = function(){
    return app.prototype.init()
  }

  function getHeight(){
    return window.innerHeight
  }

  function getWidth(){
    return window.screen.width
  }

  function preLoadImage(img,src,callback){
    $(img).attr('src',src)
    $(img).load(callback);
  }

  function debounce(func,wait,immediate){
    var timeout
    if(!wait){
      wait = 250
    }
    return function(){
      var context = this,
      args = arguments;
      var later = function() {
        timeout = null
        if(!immediate) {
          func.apply(context,args)
        }
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later,wait)
      if(callNow){
        func.apply(context,args)
      }
    }
  }

  app.prototype = {
    init:function(){

      this.headerHeight = getHeight()
      this.headerWidth = getWidth()

//    用于存状态
      this.state = {
        // 当前窗口距离顶部的高度
        old_top:-1,
        nav_top:this.headerHeight,
        doc_height:$(document).height(),
        _slide:5,
      }

      return this.setup()
    },
    setup:function(){

      this.setupHeader()

      return this.bind()
    },

    bind:function(){

      this.bindNavScroll()
          .bindHeadArrow()

      return this
    },

    setState:function(newState){
      this.state = Object.assign({},this.state,newState)
      // return this.state
    },

    setupHeader:function(){
      var self = this,
          canvas = $('.head-canvas'),
          ctx = canvas[0].getContext('2d'),
          image = $('.head-image-image'),
          cover = $('.head-image-cover'),
          head = $('.head')

      //   重新设定图片宽度
      this.setWidth(head[0],this.headerWidth)
      this.setWidth(canvas[0],this.headerWidth)
      this.setWidth(image[0],this.headerWidth)

      this.setHeight(head[0],this.headerHeight)
      this.setHeight(canvas[0],this.headerHeight)
      this.setHeight(image[0],this.headerHeight)

      // 这是预览效果
      var m = new Image()
      m.onload = function(){
        ctx.drawImage(m,0,0,self.headerWidth,self.headerHeight)
        // 将图片模糊
        StackBlur.canvasRGBA(canvas[0], 0, 0, self.headerWidth, self.headerHeight, 8)
      }
      m.crossOrigin = "anonymous"
      m.src = 'http://7xsoiv.com2.z0.glb.clouddn.com/img-1.jpg?imageView2/2/w/500/h/500/interlace/0/q/100'
      // 图片跨源
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

    },

    bindNavScroll:function(){
      var self = this

      // $(window).on('wheel',debounce(function(e){
      //   self.wheelHandler(e)
      // },250,false))

      $(window).on('scroll',function(e){
        self.scrollHandler(e)
      })

      return this
    },

    scrollHandler:function(){
      var current_top = $(document).scrollTop()

      if(current_top < this.state.old_top) {

      } else {

      }

      if(current_top >= this.state.nav_top) {
        $('.nav').addClass('nav-active')
        $('.central-news').addClass('central-news-active')
      } else {
        $('.nav').removeClass('nav-active')
        $('.central-news').removeClass('central-news-active')
      }

    },

    wheelHandler:function(e){
      // e.preventDefault()
      var current_top = $(document).scrollTop()
      if(e.originalEvent.wheelDelta <= 0) {
        // 向下
        this.windowGoDown(current_top)
      } else {
        // 向上
        this.windowGoUp(current_top)
      }

      this.setState({old_top:current_top})
    },

    windowGoDown:function(current_top){
      if(current_top < this.state.doc_height - this.headerHeight){
        this.setScrollTop(current_top + this.headerHeight)
      } else {
        this.setScrollTop(this.state.doc_height - this.headerHeight)
      }
    },

    windowGoUp:function(current_top){
      if(current_top - this.headerHeight > 0){
        this.setScrollTop(current_top - this.headerHeight)
      } else {
        this.setScrollTop(0)
      }
    },

    setScrollTop:function(value) {

      var set = function(v) {
        // console.log(v);
        var current_top = $(document).scrollTop(),
            dis = value - current_top
        console.log(v,current_top,dis)
        if(Math.abs(dis) < 30){
          $(document).scrollTop(value)
        } else {
          $(document).scrollTop(current_top + dis/6)
          setTimeout(function(){
                set(value)
            },25)
        }
      }
      return set(value)
    },

    bindHeadArrow:function(){
      var self = this
      $('.head-arrow-arrow').on('click',function(){
        // self.windowGoDown($(window).scrollTop())
        self.setScrollTop(self.headerHeight)
      })

      return this
    }


  }

  app();

})
