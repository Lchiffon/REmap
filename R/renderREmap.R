##' Plot REmap in shiny
##'
##' @description
##' Function for plotting REmap in shiny
##'
##' @usage
##' REmapOutput(outputId, inline = FALSE, container,...)
##' renderREmap(expr, env = parent.frame(), quoted = FALSE, func = NULL)
##'
##' @details
##' USe renderREmap render an REmap object and use REmapOutput
##' output an REmap object. See more details in shiny package.
##'
##' @examples
##' library(REmap)
##' library(shiny)
##' runApp("")
REmapOutput =function (outputId, inline = FALSE, container = if (inline) span else div,
                       ...)
{
  div(includeHTML(remap.shiny.init()),
  container(id = outputId, class = "shiny-html-output", ...))
}

renderREmap = function (expr, env = parent.frame(), quoted = FALSE, func = NULL)
{
  if (!is.null(func)) {
    shinyDeprecated(msg = "renderUI: argument 'func' is deprecated. Please use 'expr' instead.")
  }
  else {
    installExprFunction(expr, "func", env, quoted)
  }
  markRenderFunction(uiOutput, function(shinysession, name,
                                        ...) {
    result <- func()
    if (is.null(result) || length(result) == 0)
      return(NULL)

    output = intoHtmlObject(result)
    output <- htmltools::takeSingletons(output, shinysession$singletons,
                             desingleton = FALSE)$ui
    output <- htmltools::surroundSingletons(output)
#     dependencies <- lapply(resolveDependencies(findDependencies(output)),
#                            createWebDependency)
#    names(dependencies) <- NULL
    output <- list(html = htmltools::doRenderTags(output), deps = NULL)
    return(output)

  })
}

intoHtmlObject = function(object,
                          height = "500px",
                          width = "100%"){


  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE",
                  "chs")

  }

  if(object@maptype == "Bmap"){

    foot = sub("optionNameData",
               paste0("option", object@id), html.knitr.list$Bmap.foot)
    ##write Bmap content
    content = paste0(html.knitr.list$Bmap.head,
                     object@option,
                     foot)


    content = sub("#main",
                  paste0("#",object@id)
                  ,content)


  }else if(object@maptype == "SVG"){
    head = sub("optionNameData",
               paste0("option", object@id), html.knitr.list$SVG.head)

    foot = sub("optionNameData",
               paste0("option", object@id), html.knitr.list$SVG.foot)

    ## write SVG content
    content = paste0(head,
                     object@option,
                     foot)

    content = sub("main",
                  object@id
                  ,content)

  }else if(object@maptype == "SVGH"){

    foot = sub("optionNameData",
               paste0("option", object@id), html.knitr.list$SVGH.foot)

    ## write SVG content
    content = paste0(html.knitr.list$SVGH.head,
                     object@option,
                     foot)

    content = sub("main",
                  object@id
                  ,content)

  }




  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }




    htmltools::tagList(
      ### initial for echarts svg
      htmltools::tag("div",list(
        id = object@id,
        style = sprintf("height:%s; width:%s",height,width))),
      htmltools::tag("script",list(
        content)))

}


remap.shiny.init = function(){
  return(file.path(system.file("shiny", package = "REmap"),  "remapWidget.html" ))

}
