##' Plot REmap in knitr
##' 
##' @description 
##' Function for plotting REmap in knitr
##' 
##' 
##' 
##' @param objct  an REmap object for plotting
##' @param height  height for the DOM of REmap
##' @param width   width for the DOM of REmap
##' 
##' @details 
##' After using the remap.init function, you can use this function
##' for plotting REmap in knitr in any chuck
##' 
##' @examples 
##' library(REmap)
##' out = remap(demoC)
##' knitrREmap(out)





knitrREmap = function(object,
                      height = "300px",
                      width = "100%",
                      local = F){

  
  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE",
                  "chs")
    local = T
  }
  
    if(local){
    if(!dir.exists("js")){
      dir.create("js")
    }
  }
  
  if(object@maptype == "Bmap"){
  
    
    ##write Bmap content
    content = paste0(html.knitr.list$Bmap.head,
                     object@option,
                     html.knitr.list$Bmap.foot)
    
    
    content = sub("#main",
                  paste0("#",object@id)
                   ,content)
    
    
  }else if(object@maptype == "SVG"){

    
    ## write SVG content
    content = paste0(html.knitr.list$SVG.head,
                     object@option,
                     html.knitr.list$SVG.foot)
    
    content = sub("main",
                   object@id
                   ,content)
    
  }else if(object@maptype == "SVGH"){
      
      
      ## write SVG content
      content = paste0(html.knitr.list$SVGH.head,
                       object@option,
                       html.knitr.list$SVGH.foot)
      
      content = sub("main",
                    object@id
                    ,content)
      
  }
  
  

  if(local){
    file_name = paste0(object@id,".js")
    writeLines(content,
               paste0("js/",file_name),
               useBytes = T)
  }
  
  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }
  
  
  if(local){
    
  htmltools::tagList(
    ### initial for echarts svg
    htmltools::tag("div",list(
      id = object@id,
      style = sprintf("height:%s; width:%s",height,width))),
    
    
    htmltools::tag("script",list(
      src = sprintf("js/%s.js",object@id))))
    
  }else{
    
    htmltools::tagList(
      ### initial for echarts svg
      htmltools::tag("div",list(
        id = object@id,
        style = sprintf("height:%s; width:%s",height,width))),
      
      
      htmltools::tag("script",list(
        content)))
    
    
    
  }
  
}



html.knitr.list = list(Bmap.head = "",
                       Bmap.foot = "
var myChart = BMapExt.initECharts(container);
                       window.onresize = myChart.onresize;
                       BMapExt.setOption(option);
                       }
);
                       })();",
                       SVG.head = "  var myChart = echarts.init(document.getElementById(\"main\"));
  
                       var options = ",
                       SVG.foot = ";
  myChart.setOption(options);	",
                       SVGH.head =
    "  var myChart = echarts.init(document.getElementById(\"main\"));",
                       SVGH.foot = ";
  myChart.setOption(options);	"
)
