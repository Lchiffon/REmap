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



#
# for(i in 1:36){
#   mapCList[[i]]->mapCList[[i+37]]
# }
# names(mapCList)[38] = "anhui"
# names(mapCList)[39] = "aomen"
# names(mapCList)[40] = "beijing"
# names(mapCList)[41] = "chinaa"
# names(mapCList)[42] = "chongqing"
# names(mapCList)[43] = "fujian"
# names(mapCList)[44] = "gansu"
# names(mapCList)[45] = "guangdong"
# names(mapCList)[46] = "guangxi"
# names(mapCList)[47] = "guizhou"
# names(mapCList)[48] = "hainan"
# names(mapCList)[49] = "heilongjiang"
# names(mapCList)[50] = "hebei"
# names(mapCList)[51] = "henan"
# names(mapCList)[52] = "hubei"
# names(mapCList)[53] = "hunan"
# names(mapCList)[54] = "jiangsu"
# names(mapCList)[55] = "jiangxi"
# names(mapCList)[56] = "jilin"
# names(mapCList)[57] = "liaoning"
# names(mapCList)[58] = "neimenggu"
# names(mapCList)[59] = "ningxia"
# names(mapCList)[60] = "qinghai"
# names(mapCList)[61] = "shanghai"
# names(mapCList)[62] = "shandong"
# names(mapCList)[63] = "shanxi1"
# names(mapCList)[64] = "shanxi2"
# names(mapCList)[65] = "sichuan"
# names(mapCList)[66] = "taiwan"
# names(mapCList)[67] = "tianjin"
# names(mapCList)[68] = "xianggang"
# names(mapCList)[69] = "xinjiang"
# names(mapCList)[70] = "xizang"
# names(mapCList)[71] = "yunnan"
# names(mapCList)[72] = "zhejiang"
