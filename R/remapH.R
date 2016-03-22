##' Create a heat map
##'
##' remapH uses a data frame create a heat remap object
##' which can be used by plot to see the map by browser
##'
##' data should be a dataframe which including three columns,
##' the first column is lontitude, second column is latitude,
##' third column is the density.
##'
##' @usage
##' remapH(data,
##'       maptype = 'china',
##'       theme = get_theme("Dark"),
##'       blurSize = 30,
##'       color = c('blue', 'cyan', 'lime', 'yellow', 'red'),
##'       minAlpha = 0.05,
##'       opacity = 1,
##'       ...)
##'
##'
##'
##' @param data   a data frame including lontitude, latitude and density
##' @param maptype the type of the map. For exameple,'china',
##' 'world' or other names of province in China.
##' @param theme    a list object created by get_theme,control
##' the color of the map.
##' @param blurSize   blur size of the data point, default is 30.
##' @param color   a vector of strings like
##' ['blue', 'cyan', 'lime', 'yellow', 'red'],
##' with which the color will transform evenly.
##' @param minAlpha   If the unified value is less than minAlpha,
##' remapH will be set to minAlpha to ensure
##' small data value can also be visible on the chart.
##' @param opacity  Opacity of the heatmap. Default is 1
##' @param ...  other paramters like title, subtitle,data for mark line
##' @return An remap object of heat map
##' @author Chiffon <\url{http://chiffon.gitcafe.io}>
##' @examples
##' heatmap = sampleData()
##' ## This is a function to create sample data as
##' ## http://echarts.baidu.com/doc/example/heatmap_map.html
##'
##' remapH(heatmap,minAlpha = 0.1,title = "Heat Map from REmap")


remapH = function(data,
                  maptype = 'china',
                  # color = c('#1e90ff','#f0ffff'),
                  theme = get_theme("Dark"),
                  blurSize = 30,
                  color = c('blue', 'cyan', 'lime', 'yellow', 'red'),
                  minAlpha = 0.05,
                  opacity = 1,
                  title = "",
                  subtitle = "",
                  markLineData = NULL,
                  markPointData = NULL,
                  markLineTheme = markLineControl(),
                  markPointTheme = markPointControl(),
                  geoData = NA
                  # mindata = NA,
                  # maxdata = NA
                  ){

  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE","eng")
  }

  if(!is.data.frame(data)){
    stop("Map data should be a data frame.")
  }

  data = na.omit(data)

  if(ncol(data)<3 | nrow(data) == 0 ){
    stop("Data should have at least 3 columns and 1 row")
  }


  if(!is.numeric(data[1,1]) |
     !is.numeric(data[1,2]) |
     !is.numeric(data[1,3])){
    data[,1] = as.numeric(data[,1])
    data[,2] = as.numeric(data[,2])
    data[,3] = as.numeric(data[,3])
  }


  heatdata = apply(data,1,function(x){
    out = sprintf('[%s,%s,%s]',x[1],x[2],x[3])
    return(out)
    })

  heatdata = paste(heatdata,collapse = ",\n")

  # mapnames = mapNames(mapType = maptype)
  #   hit = sum(sapply(data[,1],function(x)
  #               sum(x %in% mapnames)))/length(mapnames)
  #
  #   if(hit<0.5){
  #     warning(paste0("Over 50% places(column 1) are not found in ",maptype))
  #   }


#   mapCVec = apply(data,1,function(x)
#     paste0("{name:'",x[1],
#            "',value:",x[2],"}" ))
#   mapCData = paste(mapCVec,collapse = ',\n\t\t')

  if(class(color) != 'character'){
    stop("Color should be a character object!")
  }

  if(length(color) == 1){
    color = c(color,'white')
  }

  ColorData = paste0("['",paste(color,collapse = "', '"),"']")


#   if(is.na(maxdata)){
#     maxData = round(max(data[,2]) +
#                       (max(data[,2])- min(data[,2]))/15)
#   }else{
#     maxData = maxdata
#   }
#
#   if(is.na(mindata)){
#     minData = round(min(data[,2]) -
#                       (max(data[,2])- min(data[,2]))/15)
#   }else{
#     minData = mindata
#   }
  heatMapStrData = heatMapStr(blurSize = blurSize,
                              colors =  ColorData,
                              minAlpha = minAlpha,
                              opacity = opacity)

  markLineLogi = (length(dim(markLineData)) ==2)
  markPointLogi = class(markPointData)!='logical'
  geoDataLogi = class(geoData)!='logical'


  if(markLineLogi & markPointLogi & !geoDataLogi){
    cityNames = c(as.character(markLineData[,1]),
                  as.character(markLineData[,1]))
    if(is.data.frame(markPointData)){
      cityNames = c(cityNames,
                    as.character(markPointData[,1]))
    }else{
      # it's a vector
      cityNames = c(cityNames,markPointData)
    }

    geoData = get_geo_position(unique(cityNames))
  }



  ## Prepare for mark Line data
  if(is.null(markLineData)){
    markLineData = ""
  }else{
    markLineData = markLineStr(markLineData,
                               markLineTheme,
                               geoData)
  }

  ## Prepare for mark point data
  if(is.null(markPointData)){
    markPointData = ""
  }else{
    markPointData = markPointStr(markPointData,
                                 markPointTheme,
                                 geoData)
  }


  if(maptype == 'world'){
    theme$labelShow = 'false'
  }
  ### write remap object
  output = new("remap")
  output@id = paste('ID', format(Sys.time(), "%Y%m%d%H%M%S"),
                    proc.time()[3]*100, sep="_")
  output@theme = theme
  output@maptype = "SVGH"

  output@option = html.data.H$option
  head = html.data.H$head
  foot = html.data.H$foot

  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",
                  "chs")
  }

  output@option = sub("forChange",
                      "一",output@option)



  output@option = sub("heatMapData",
                      heatdata,output@option)

  ##V0.2: label&point
  output@option = sub("labelShowData",
                      theme$labelShow,output@option)
  output@option = sub("pointShowData",
                      theme$pointShow,output@option)
  output@option = sub("pointColorData",
                      theme$pointColor,output@option)

  ## end V0.2
  output@option = sub("backgroundColorData",
                       theme$backgroundColor,output@option)
  output@option = sub("titleData",title,output@option)
  output@option = sub("subtitleData",subtitle,output@option)
  output@option = gsub("titleColorData",
                       theme$titleColor,output@option)

  # output@option = sub("minData",minData,output@option)
  # output@option = sub("maxData",maxData,output@option)
  # output@option = sub("colorData",ColorData,output@option)
  output@option = sub("mapTypeData",maptype,output@option)
  output@option = sub("borderColorData",
                      theme$borderColor,output@option)

  # output@option = sub("mapCData",mapCData,output@option)


  output@option = sub("//markLineData",
                      markLineData,output@option)
  output@option = sub("//markPointData",
                      markPointData,output@option)
  output@option = sub("//heatMapStrData",
                      heatMapStrData,output@option)

  ## optionNameData
  output@option= sub("optionNameData",
                  paste0("option", output@id),output@option)
  outputFoot = sub("optionNameData",
                   paste0("option", output@id),foot)

  output@option = strsplit(output@option,"kkkmmm")[[1]][2]
  output@content =  paste(head,output@option,outputFoot,sep = "\n")

  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }
  return(output)



}




html.data.H = list(
  head = "<html>
  <head>
  <meta charset=\"utf-8\">
  <style type=\"text/css\">
  body {
  margin: 0;
  }
  #main {
  height: 100%;
  }
  </style>
  </head>
  <body>
  <div id=\"main\"></div>
  <script src=\"http://echarts.baidu.com/build/dist/echarts.js\"></script>
  <script src = \"http://echarts.baidu.com/build/dist/echarts-all.js\"></script>
  <script>
  var myChart = echarts.init(document.getElementById(\"main\"));

  " ,
  option = "forChangekkkmmm
  var heatData = [heatMapData];
  var optionNameData =
  {

  backgroundColor: 'backgroundColorData',
  color: ['pointColorData','aqua','lime'],
  title : {
  text: 'titleData',
  subtext:'subtitleData',
  x:'center',
  textStyle : {
  color: 'titleColorData'
  }
  },
  tooltip : {
  trigger: 'item',
  formatter: function (v) {
  if(v[2].tooltipValue!=null){
  return v[2].tooltipvalue;
  }else{
  return v[1];
  }
  }},
  dataRange: {
    show: false,
    min : 0,
    max : 100,
    calculable : true,
    color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
    textStyle:{
      color:'titleColorData'
    }
  },
  legend: {
  show:pointShowData,
  orient: 'vertical',
  x:'left',
  data:['Data'],
  textStyle:{color:'backgroundColorData'}

  },
  toolbox: {
  show : true,
  orient : 'vertical',
  x: 'right',
  y: 'center',
  feature : {
  mark : {show: true},
  dataView : {show: true, readOnly: false},
  restore : {show: true},
  saveAsImage : {show: true}
  }
  },
  series : [
  {
  name:'Data',
  type:'map',
  mapType: 'mapTypeData',
  roam: true,
  itemStyle:{
  normal:{
  borderColor:'borderColorData',
  borderWidth: 0.5,
  label:{show:labelShowData,textStyle:{color:'titleColorData'}},
  areaStyle: {color: 'backgroundColorData'}
  },
  emphasis:{label:{show:true,textStyle:{color:'titleColorData'}}}
  },
  data:[]
  //heatMapStrData
  //markLineData
  //markPointData
  }]
  }",
  foot = ";
  myChart.setOption(optionNameData);
  </script>
  </body>
  </html>"
  )





heatMapStr = function(blurSize ,
                      colors ,
                      minAlpha ,
                      opacity
){

  out =   sprintf(",heatmap: {
                      blurSize:%s ,
                      colors:%s ,
                      minAlpha:%s ,
                      opacity:%s ,
                      data: heatData}",
                  blurSize,
                  colors,
                  minAlpha,
                  opacity)

  return(out)
}




sampleData = function(){
  heatData = data.frame(
    lon = 100 + runif(200,max = 20),
    lat = 24 + runif(200,max = 16),
    prob = runif(200)
  )




  for (j in 1:10) {
    x = 100 + runif(1) * 16
    y = 24 + runif(1) * 12
    cnt = 30 * runif(1)
    for (i in 1:cnt) {
      n = nrow(heatData)
      heatData[(n+1),] = c(
        x + runif(1) * 2,
        y + runif(1) * 2,
        runif(1)
      )
    }
  }

  return(heatData)
}
