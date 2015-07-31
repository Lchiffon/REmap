##' Create a theme object for remap
##' 
##' get_theme create a theme list to control the color
##' we see in the remap.including lineColor, backgroundColor,
##' titleColor, borderColor and regionColor. 
##'  
##' If you use the theme argument of the get_theme function,
##' you will get the default theme in one of ("Dark","Bright,"Sky").
##' If you don't like the color, set theme = "none" and use other
##' parameters control remap.\\
##' Can use "red","#1b1b1b" or rgba(100,100,100,1) to control the color
##' 
##' 
##' @param theme   a character object in ("Dark","Bright,"Sky","none)
##' @param lineColor  Control the color of the line, "Random" for 
##' random color
##' @param backgroundColor    Control the color of the background
##' @param titleColor     Control the color of the title
##' @param borderColor    Control the color of the border
##' @param regionColor    Control the color of the region
##' @param labelShow   whether show the label of each element, 
##' only support mapC.
##' @param pointShow  whether show the center point of each element, 
##' only support mapC.
##' @param pointColor  color of the center point of each element, 
##' only support mapC.
##' @return A list of color control, which can be used by remap
##' @author Chiffon <\url{http://chiffon.gitcafe.io}>
##' @examples
##' ## default theme:"Dark"
##' set.seed(125)
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
##'             theme = get_theme("Bright"))
##' plot(out)
##'
##' ## set Line color as 'orange'
##' set.seed(125)
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
##'             theme = get_theme("None",
##'                              lineColor = "orange"))
##' plot(out)
##' 
##' ## Set backgroundColor as 'red'(#FF0000)
##' 
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
##'             theme = get_theme("None",
##'                               lineColor = "orange",
##'                               backgroundColor = "#FF0000"))
##' plot(out)
##' 
##' ## Set TitleColor
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
##'             theme = get_theme("None",
##'                               lineColor = "orange",
##'                               backgroundColor = "#FFC1C1",
##'                               titleColor = "#1b1b1b"))
##' plot(out)
##' 
##' ## Set Region Color
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
##'             theme = get_theme("None",
##'                               lineColor = "orange",
##'                               backgroundColor = "#FFC1C1",
##'                               titleColor = "#1b1b1b",
##'                               regionColor = '#ADD8E6'))
##' plot(out)


  
get_theme = function(theme = "Dark",
              lineColor = "Random",
              backgroundColor = "#1b1b1b",
              titleColor = "#fff",
              borderColor = "rgba(100,149,237,1)",
              regionColor = "#1b1b1b",
              labelShow = T,
              pointShow = F,
              pointColor = 'gold'){
  
 
      theme_data = list(
        Dark = list(
          lineColor = "Random",
          backgroundColor = "#1b1b1b",
          titleColor = "#fff",
          borderColor = "rgba(100,149,237,1)",
          regionColor = "#1b1b1b",
          labelShow = 'true',
          pointShow = 'false',
          pointColor = 'gold'
        ),
        Bright = list(
          lineColor = "Random",
          backgroundColor = "#D9D9D9",
          titleColor = "#1b1b1b",
          borderColor = "rgba(100,149,237,1)",
          regionColor = "#fff",
          labelShow = 'true',
          pointShow = 'false',
          pointColor = 'gold'
        ),
        Sky = list(
          lineColor = "Random",
          backgroundColor = "#fff",
          titleColor = "#1b1b1b",
          borderColor = "rgba(100,149,237,1)",
          regionColor = "#AEEEEE",
          labelShow = 'true',
          pointShow = 'false',
          pointColor = 'gold'
        )
      )
      
      
      if(labelShow){
        labelShow = 'true'
      }else{
        labelShow = 'false'
      }
      
      if(pointShow){
        pointShow = 'true'
      }else{
        pointShow = 'false'
      }
      
      
      
      if (theme %in% c("Dark","Bright","Sky")){
          out_theme = theme_data[[theme]]
      }else{
        out_theme = list(
          lineColor = lineColor,
          backgroundColor = backgroundColor,
          titleColor = titleColor,
          borderColor = borderColor,
          regionColor = regionColor,
          labelShow = labelShow,
          pointShow = pointShow,
          pointColor = pointColor
        )
      }
      
      if(out_theme$lineColor == "Random"){
        out_theme$lineColor2 = 
          "['#ff3333', 'orange', 'yellow','lime','aqua']"
      }else{
        out_theme$lineColor2 = 
        paste0("['",out_theme$lineColor,
               "', '",
               out_theme$lineColor,"', '",
               out_theme$lineColor,"', '",
               out_theme$lineColor,"', '",
               out_theme$lineColor,"']")   
        }
      out_theme
}