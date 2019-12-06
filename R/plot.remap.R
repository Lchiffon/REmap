##' plot the remap object
##'
##' plot.remap is a function to create the htmlfile
##' and open it by browser
##'
##'
##' @param object an remap object
##' @param path  the path for saving REmap object
##' @return Create a html file according to the id of the object
##' @author Chiffon <\url{http://lchiffon.github.io}>
##' @examples
##' set.seed(125)
##' out = remap(demoC,title = "REmap: Demo DATA",
##' subtitle = "theme:Dark")
##' plot(out)


plot.remap = function(object,path = ""){

  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE",
                  "chs")
  }




  ## Web js, don't need to rewrite JS
  if( getOption('remap.js.web')){
      file_name = paste0(object@id,".html")
      writeLines(object@content,
               paste0(path,file_name),
               useBytes = T)
  }else{
    ## else, write file to local temp files
    path = tempdir()
    file_name = paste0(path,"/",object@id,".html")
    local.plot(object,file_name)
  }

  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }

  cat("Save img as:",file_name)
  browseURL(file_name)
}



local.plot = function(object,file_name){



  ## SVG rewrite JS path
  if(object@maptype == 'SVG'){
    content = sub("http://echarts.baidu.com/build/dist/echarts.js",
                  "./js/echarts.js",
                  object@content)
    content = sub("http://echarts.baidu.com/build/dist/echarts-all.js",
                  "./js/echarts-all.js",
                  content)
  }

  if(object@maptype == 'SVGH'){
    content = sub("http://echarts.baidu.com/build/dist/echarts.js",
                  "./js/echarts.js",
                  object@content)
    content = sub("http://echarts.baidu.com/build/dist/echarts-all.js",
                  "./js/echarts-all.js",
                  content)
  }
  ## Bmap rewrite JS path
  if(object@maptype == "Bmap"){
    content = sub("http://echarts.baidu.com/build/dist/echarts.js",
                  "./js/echarts.js",
                  object@content)
    content = sub("http://lchiffon.github.io/reveal_slidify/echarts/require/jquery.min.js",
                  "./js/jquery.min.js",
                  content)

    content = sub("http://lchiffon.github.io/reveal_slidify/echarts/require",
                  "./js",
                  content)

    content = sub("http://lchiffon.github.io/reveal_slidify/echarts/require",
                  "./js",
                  content)
  }
  writeLines(content,
             file_name,
             useBytes = T)

}
