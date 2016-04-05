// created by guokeke @ 16.4.5
// 这是首页脚本
//
$(function(){
  //
  $.ajax({
      url:'/api/v1/news/11/',
      // dataType:'json',
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
})
