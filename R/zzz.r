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
          definition = plot.remap )

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
