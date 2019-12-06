.onAttach  <- function(libname, pkgname ){
  path = tempdir()

#   if(!dir.exists(paste0(path,"/js"))){
#     dir.create(paste0(path,"/js"))
#   }
  dir.create(paste0(path,"/js"))

  ## save echarts.js
  if(!file.exists(paste0(path,"/js/echart.js"))){
    file.copy(from = system.file("JS/echarts.js",package = 'REmap'),
              to = paste0(path,"/js"))
  }


  ## Save echarts-all.js
  if(!file.exists(paste0(path,"/js/echarts-all.js"))){
    file.copy(from = system.file("JS/echarts-all.js",package = 'REmap'),
              to = paste0(path,"/js"))
  }

  ## Save main.js
  if(!file.exists(paste0(path,"/js/main.js"))){
    file.copy(from = system.file("JS/main.js",package = 'REmap'),
              to = paste0(path,"/js"))
  }

  ## Save map.js
  if(!file.exists(paste0(path,"/js/chart/map.js"))){
    file.copy(from = system.file("JS/chart",package = 'REmap'),
              to = paste0(path,"/js"),
              recursive = T)
  }

  ## Save juqery.min.js
  if(!file.exists(paste0(path,"/js/jquery.min.js"))){
    file.copy(from = system.file("JS/jquery.min.js",package = 'REmap'),
              to = paste0(path,"/js"))
  }

  options(remap.js.dir = "./js")
  options(remap.js.web = FALSE)
  options(remap.ak = "q9U1lWgCK1aBGVC1DVWrgWa7")

}


setClass("remap",
          representation (
            id = "character",
            maptype = "character",
            option = "character",
            theme = "list",
            content = "character"
          ))


setMethod("show",
          signature = "remap",
          definition = function(object){

            plot.remap(object,path = "")
          })



setMethod("summary",
          signature = "remap",
          definition = function(object){
            cat("Object ID:\n")
            cat(object@id)
            cat("\nMap Type:\n")
            cat(object@maptype)
            cat("\nFile Position:\n")
            cat(file_name = paste0("~/",object@id,".html"))
            cat("\nLength of Content:\n")
            cat(length(strsplit(out@content,"\\n")[[1]]))
          })
