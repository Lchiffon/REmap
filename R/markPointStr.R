markPointStr = function(markPointData,
                       markPointTheme,
                       geoData){


  if(length(markPointData) == 0 ){
    stop("Mark Point data should have at least 1 object")
  }

  if(is.null(dim(markPointData))){
    markPointData = data.frame(markPointData)
  }

  if(!is.character(markPointData[1,1])){
    markPointData[,1] = as.character(markPointData[,1])
  }

  symbol = markPointTheme$symbol
  symbolSize = markPointTheme$symbolSize
  effect = markPointTheme$effect
  effectType = markPointTheme$effectType
  color = markPointTheme$color

  ## If geoData is not founded,search geoData from baiduAPI
  if(!is.data.frame(geoData)){
    city_vec = unique(markPointData[,1])

    geoData = get_geo_position(city_vec)

  }

  if(!is.numeric(geoData[1,1])){
    geoData[,1] = as.numeric(as.character(geoData[,1]))
    geoData[,2] = as.numeric(as.character(geoData[,2]))
  }

  if(!is.character(geoData[1,3])){
    geoData[,3] = as.character(geoData[,3])
  }

  ## If geo Data is exists
  if(!all(sapply(geoData,class) ==
          c("numeric","numeric","character"))){
    stop("Format of geoData is similar as get_geo_position()!")
  }

  ## Geo str
  city_data_vec = apply(geoData,1,function(x)
    paste0("'",
           x[3],
           "'",
           ': ['
           ,x[1],
           ',',
           x[2],
           ']'))
  geoDataStr = paste(city_data_vec,collapse = ",\n")


  n = nrow(markPointData)
  dataName = tolower(names(markPointData))
  symbolExist = 'symbol' %in% dataName

  if(symbolExist){
    symboldata = markPointData[,which('symbol' == dataName)]
  }else{
    symboldata = rep(symbol[1],n)
  }


  colorExist = 'color' %in% dataName
  symbolsizeExist = 'symbolsize' %in% dataName
  tooltipExist = 'tooltip' %in% dataName


  if(colorExist){
    colorData = "function(param){
    return(param.data.value.colorValue);
  }"
    colorValue = sprintf("'%s'",
                         markPointData[,which('color' == dataName)]
                         )
  }else if(color == "Random"){
    colorData = "function(param){
    return(param.data.value.colorValue);
  }"
    randomColor = c('#ff3333', 'orange', 'yellow','lime','aqua')
    colorValue = sprintf("'%s'",
                         sample(randomColor,n,replace = T)
    )
}else{
  colorData = sprintf("'%s'",color)
  colorValue = NULL
}

  if(symbolsizeExist){
    symbolsizeData = "function(param){
    return(param.symbolsizeValue);
  }"
    symbolsizeValue = markPointData[,which('symbolsize' == dataName)]

    symbolsizeValue = as.numeric(symbolsizeValue)
    symbolsizeValue = round(
      (symbolsizeValue-min(symbolsizeValue))/
      (max(symbolsizeValue)-min(symbolsizeValue))*13 + 7
      )

  }else if(symbolSize == "Random"){
  symbolsizeData = "function (v){
  return(10+Math.round(Math.random()*10));
}"
  symbolsizeValue = NULL
  }else{
    symbolsizeData = symbolSize
    symbolsizeValue = NULL
}

  if(tooltipExist){
    tooltipValue = sprintf("'%s'",as.character(
                    markPointData[,which('tooltip' == dataName)]))
  }else{
    tooltipValue = NULL
  }


  valueDF = as.data.frame(cbind(colorValue,
                                symbolsizeValue,
                                tooltipValue),
                          stringsAsFactors = F)

  if(symbolsizeExist){
    valueDF$symbolsizeValue = as.numeric(valueDF$symbolsizeValue)
  }

  if(any(symbolsizeExist,
         colorExist,
         color=="Random",
         tooltipExist)){
    valuedata = getValue(valueDF)
  }else{
    valuedata = sample(100,nrow(markPointData),replace = T)
  }

  mapdata = data.frame(markPointData[,1],
                       symboldata,
                       valuedata)

#   if(colorExist){
#     colordata = markPointData[,which('color' == dataName)]
#   }else if(color == "Random"){
#     randomColor = c('#ff3333', 'orange', 'yellow','lime','aqua')
#     colordata = sample(randomColor,n,replace = T)
#   }else if(length(color) > 1){
#     colordata = sample(color,n,replace = T)
#   }else{
#     colordata = rep(color,n)
#   }
#
#
#
#   mapdata = data.frame(markPointData[,1],
#                        symboldata,
#                        colordata)

  ###markPointData

  markpoint = apply(mapdata,1,function(x)
    paste0("{name:'",x[1],"',value:",x[3],",symbol:'",x[2],"'}"))
  markPointStr= paste(markpoint,collapse = ",\n")


  if(effect){
    effect = 'true'
  }else{
    effect = 'false'
  }



Output = paste0(",markPoint : {
        symbol:'emptyCircle',
      symbolSize :",symbolsizeData,",
      effect : {
        show: ",effect,",
        type: '",effectType,"',
        shadowBlur : 0
      },
      itemStyle:{
      normal:{
        label:{show:false},
        color:",colorData,"
      },
      emphasis: {
        label:{show:false}
      }
      },
      data : [",markPointStr,"
      ]},
      geoCoord:{",
                  geoDataStr,"
                  }
                  ")


  Output

}
