#' Get the names of a choropleth map for remapC
#' 
#' mapNames show what kind of map names is needed for remapC
#' 
#' @param mapType   one of "china", "world" or the name of 
#' province in China
#' 
#' @return mapNames   returns a vec of map names
#' @examples 
#' ## get the province names:
#' mapNames('china')


mapNames = function(mapType){
  
  ## Judge the object type
  if(length(mapType)!=1 | class(mapType)!="character")
    stop("mapType should be a character object with length 1!")
  
  ## Find the num of the type
  logiVec = (mapType == mapCList[[37]])
  if(sum(logiVec) == 0){
    stop(paste("No map names are found for",mapType))
  }
  
  index = which(logiVec)
  
  return(mapCList[[index]])
}