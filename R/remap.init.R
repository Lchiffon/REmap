##' Remap initial for knitr
##' 
##' @description 
##' An shell function for initializing knitr for remap packages
##' 
##' @usage recharts.init()
##' 
##' @details 
##' Only the first chuck of recharts plot needs this function,
##'  the rest chuck mustn't include this function.
## 




remap.init = function(){
  
  htmltools::tagList(
  ### initial for echarts svg
  htmltools::tag("script",list(
    src = "http://echarts.baidu.com/build/dist/echarts.js")),
  
  htmltools::tag("script",list(
    src = "http://echarts.baidu.com/build/dist/echarts-all.js")),

  
  
  ### initial for echarts Bmap
  htmltools::tag("script",list(
    type='text/javascript',
    src = 'http://api.map.baidu.com/api?v=2.0&ak=q9U1lWgCK1aBGVC1DVWrgWa7')),
  
  
  ### initial for echarts 
  htmltools::tag("script",list(
    type='text/javascript',
  src='http://echarts.baidu.com/doc/asset/js/jquery.min.js'
  ))
  )
  
}