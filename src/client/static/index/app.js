// created by guokeke @ 16.4.5
// 这是首页脚本
//
$(function(){
  //
  $.ajax({
      url:'/api/news/create',
      // dataType:'json',
      contentType:'application/json',
      method:'post',
      data:JSON.stringify({news_title:'123'})
  })
  .error(function(err){
    console.log(err)
  })
  .success(function(res){
    console.log(res)
  })
})
