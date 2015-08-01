

markLineStr = function(markLineData,
                       markLineTheme,
                       geoData){
  
  if(!is.data.frame(markLineData)){
    stop("Mark Line data should be a data frame.")
  }
  
  markLineData = na.omit(markLineData) 
  
  if(ncol(markLineData)<2 | nrow(markLineData) == 0 ){
    stop("Mark Line data should have at least 2 columns and 1 row")
  }
  
  if(!is.character(markLineData[1,1])){
    markLineData[,1] = as.character(markLineData[,1])
    markLineData[,2] = as.character(markLineData[,2])
  }
  
  
  symbol = markLineTheme$symbol
  symbolSize = markLineTheme$symbolSize
  smooth = markLineTheme$smooth 
  smoothness = markLineTheme$smoothness
  effect = markLineTheme$effect
  lineWidth = markLineTheme$lineWidth
  lineType = markLineTheme$lineType

  color = markLineTheme$color
  
  ## If geoData is not founded,search geoData from baiduAPI
  if(length(dim(geoData))!=2){
    city_vec = unique(c(markLineData[,1],markLineData[,2]))
    
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
  
  
  n = nrow(markLineData)
  dataName = tolower(names(markLineData))
  colorExist = 'color' %in% dataName
  
  if(colorExist){
    colordata = markLineData[,which('color' == dataName)]
  }else if(color == "Random"){
    randomColor = c('#ff3333', 'orange', 'yellow','lime','aqua')
    colordata = sample(randomColor,n,replace = T)
  }else if(length(color) > 1){
    colordata = sample(color,n,replace = T)
  }else{
    colordata = rep(color,n)
  }
  
    
  mapdata = data.frame(markLineData[,1],
                       markLineData[,2],
                       colordata)

  ###markLineData
  markLine = apply(mapdata,1,function(x)
    paste0("[{name:'",x[1],"'}, {name:'",x[2],
           "',value:'",x[3],"'}]" ))
  markLineStr = paste(markLine,collapse = ",\n")
  
  if(smooth){
    smooth = 'true'
  }else{
    smooth = 'false'
  }
  
  if(effect){
    effect = 'true'
  }else{
    effect = 'false'
  }
  
  
  Output = paste0("
  ,markLine : {
    Symbol:",symbol,",
    symbolSize:",symbolSize,",
    smooth:",smooth,",
    smooth:",smoothness,",
    effect : {
      show: ",effect,",
      scaleSize: 1,
      period: 30,
      color: '#fff',
      shadowBlur: 10
    },
    itemStyle : {
      color: 'red',
      normal: {
        color:function(param){
          return(param.data[0].value);
        },
        borderWidth:",lineWidth,",
        lineStyle: {
          type: '",lineType,"',
          shadowBlur: 10
        },
        label:{show:false}
      }
    },
    
    data : [",
      markLineStr,
      "]},
    geoCoord:{",
      geoDataStr,"
    }
  ")
  
  Output  
}