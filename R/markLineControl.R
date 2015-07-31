##'  Control the theme of mark line
##' 
##'  markLineControl is a function for the themes of 
##'  mark line, which can be set as a element in remapC and 
##'  remapB
##' 
##'  @usage 
##'  markLineControl(symbol = c('none', 'arrow'),
##'       symbolSize = c(2,4),
##'       smooth = T,
##'       smoothness = 0.2,
##'       effect = T,
##'       lineWidth = 1,
##'       lineType = 'solid',
##'       color = "Random")
##'   
##' @param symbol   the symbol of the point
##' default:'pin', can be one of the 'circle','rectangle',
##' 'triangle','diamond','emptyCircle','emptyRectangle',
##' 'emptyTriangle','emptyDiamond','heart','droplet','pin','arrow'
##' 'tar' or the filepath to a fingure file(e.g. 
##' "'image://http://echarts.baidu.com/doc//asset/ico/favicon.png'")
##' @param symbolSize   the size of the symbol, default is 10
##' @param  smooth  smoothed line, logical object, default is T,
##' while smooth is true, lineType can not be dashed.
##' @param  smoothness   	Line smoothness. Only available when smooth is true
##' @param  effect     whether to show glow effect for markLine symbol
##' @param  lineWidth  width of the line
##' @param  lineType  type of the line can be 'solid', 'dotted'
##' or 'dashed'.
##' @param  color  Color of the line
##' @return A list of line control object, which can be used for 
##' 
##' @examples 
##' mapdata = read.csv("demo/chinaIphone.csv")
##' out = remapC(data = mapdata,
##'              color = c("white","white"),
##'              theme=get_theme("none","white","white","white",'white'),
##'              markPointData = demoC[,2],
##'              markPointTheme = markPointControl(
##'                symbol = "image://demo/1.png",
##'                symbolSize = 50,
##'                effectType = 'bounce' ),
##'              geoData = geoData)



markLineControl = function(symbol = c('none', 'arrow'),
                           symbolSize = c(2,4),
                           smooth = T,
                           smoothness = 0.2,
                           effect = T,
                           lineWidth = 1,
                           lineType = 'solid',
                           color = "Random"){
  markLineTheme = list()
  if(length(symbol) > 2){
    warning("Only first two symbol will be used in the markLineTheme")
  }else if(length(symbol) == 1){
    symbol = c(symbol,symbol)
  }
  markLineTheme$symbol = paste0("['",symbol[1],"', '",symbol[2],"']")
  
  
  if(length(symbolSize) > 2){
    warning("Only first two symbol will be used in the markLineTheme")
  }else if(length(symbolSize) == 1){
    symbolSize = c(symbolSize,symbolSize)
  }
  markLineTheme$symbolSize = paste0("['",symbolSize[1],
                                    "', '",symbolSize[2],"']")
  
  markLineTheme$smooth = smooth 
  markLineTheme$smoothness = smoothness
  markLineTheme$effect = effect
  markLineTheme$lineWidth = lineWidth
  if(!lineType %in% c('solid','dotted','dashed')){
    warning(paste("Line type of",lineType,"is not support!"))
  }
  markLineTheme$lineType = lineType
  markLineTheme$color = color
  
  
  return(markLineTheme)
}