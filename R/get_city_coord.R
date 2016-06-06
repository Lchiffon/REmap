##' Get the location information of the city
##'
##' get_city_coord use Baidu API  <\url{http://developer.baidu.com/map/}>
##' to get the longtitude and latitude of the city
##'
##' This function can transform the name of Chinese city Which
##' can be a Chinese string or an English name,like Shanghai.
##' This function is used BaiduAPI to get the geo information.
##'
##' @param city   a character object of the name of Chinese city,
##' @return a vecctor of longtitude and latitude
##' @author Chiffon <\url{http://lchiffon.github.io}>
##' @examples
##' get_city_coord("Shanghai")


get_city_coord = function(city){
  ## Get geodata by Baidu API
  url = paste0("http://api.map.baidu.com/place/v2/search?q=",city,
               "&region=",city,
               "&output=json&ak=q9U1lWgCK1aBGVC1DVWrgWa7")
  options(warn=-1)
  doc = XML::htmlParse(readLines(url,encoding = 'UTf-8'))
  options(warn=0)
  rootNode <- XML::xmlRoot(doc)
  list = rjson::fromJSON(XML::xpathSApply(rootNode,"//p",
                                          XML::xmlValue))

  if(length(list$results) ==0){
    return(c(NA,NA))
  }
  output = c(list$results[[1]]$location$lng,
              list$results[[1]]$location$lat)

  if(is.null(output)){
    output = c(NA,NA)
  }

  return(output)
}
