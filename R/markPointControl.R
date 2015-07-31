##'  Control the theme of mark Point
##' 
##'  markPointControl is a function for the themes of 
##'  mark Point, which can be set as a element in remapC and 
##'  remapB
##' 
##'  @usage 
##'  markPointControl(symbol = 'emptyCircle',
##'                   symbolSize = "Random",
##'                   effect = T,
##'                   effectType = 'scale',
##'                   color = "Random")
##'   
##' @param symbol   the symbol of the point
##' default:'pin', can be one of the 'circle','rectangle',
##' 'triangle','diamond','emptyCircle','emptyRectangle',
##' 'emptyTriangle','emptyDiamond','heart','droplet','pin','arrow'
##' 'tar' or the filepath to a fingure file(e.g. 
##' "'image://http://echarts.baidu.com/doc//asset/ico/favicon.png'")
##' @param symbolSize   the size of the symbol, default is 10
##' @param effect   whether to show glow effect for markPoint symbol
##' @param effectType 'scale' or 'bounce'
##' @param color control the color of the markPoint
##' @examples 
##' mapdata = chinaIphone
##' geoData  = get_geo_position(unique(demoC[demoC==demoC]))
##' out = remapC(data = mapdata,
##'              color = c("white","white"),
##'              theme=get_theme("none","white","white","white",'white'),
##'               markPointData = demoC[,2],
##'              markPointTheme = markPointControl(
##'                symbol = "image://http://lchiffon.github.io/reveal_slidify/pic/ghost.png",
##'                symbolSize = 50,
##'                effectType = 'bounce' ),
##'              geoData = geoData)
##'  out





markPointControl = function(symbol = 'emptyCircle',
                           symbolSize = "Random",
                           effect = T,
                           effectType = 'scale',
                           color = "Random"){
  markPointTheme = list()

  markPointTheme$symbol = symbol
  markPointTheme$symbolSize = symbolSize 
  markPointTheme$effect = effect
  markPointTheme$effectType  = effectType 
  markPointTheme$color = color
  
  
  return(markPointTheme)
}