##' Create an remap object
##'  
##' remap use a data frame create a remap object
##' which can be used by plot to see the map by browser
##' 
##' mapdata should be a dataframe which including two columns,
##' the first column is depart, second column is destination.
##' 
##' @param mapdata   a data frame including depart and destination 
##' in each column
##' @param title    a character string of the title
##' @param subtitle    a character string of the subtitle
##' @param theme    a list object created by get_theme,control 
##' the color of the map.
##' @return An remap object
##' @author Chiffon <\url{http://chiffon.gitcafe.io}>
##' @examples
##' set.seed(125)
##' out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Dark")
##' plot(out)
##' summary(out)


remap = function(mapdata,
                        title = "",
                        subtitle = "",
                        theme = get_theme("Dark")){
  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE",
                  "English_United Kingdom.1252")
  }
  
  ### Test and create label:
  if(!is.data.frame(mapdata)){
    stop("Map data should be a data frame.")
  }
  
  mapdata = na.omit(mapdata) 
  
  if(ncol(mapdata)<2 | nrow(mapdata) == 0 ){
    stop("Mapdata should have at least 2 columns and 1 row")
  }
  
  if(ncol(mapdata) == 2){
    label = apply(mapdata,1,function(x) paste(x[1],x[2],sep  = " -- "))
  }else{
    label = mapdata[,3]
  }
  
  ### Get geo position
  if(!is.character(mapdata[1,1])){
  mapdata[,1] = as.character(mapdata[,1])
  mapdata[,2] = as.character(mapdata[,2])
  }
  city_vec = unique(c(mapdata[,1],mapdata[,2]))
  
  Geo_data = get_geo_position(city_vec)
  
  
  
  ###geoCoord_data
  mapdata$value = sample(seq(0,100,10),nrow(mapdata),replace = T)
  
  city_data_vec = apply(Geo_data,1,function(x) 
    paste0("'",
           x[3],
           "'",
           ': ['
           ,x[1],
           ',',
           x[2],
           ']'))
  geoCoord_data = paste(city_data_vec,collapse = ",\n")
  
  ###markLineData
  markLine = apply(mapdata,1,function(x)
    paste0("[{name:'",x[1],"'}, {name:'",x[2],
           "',value:",x[3],"}]" ))
  markLineData = paste(markLine,collapse = ",\n")
  
  ### markPointData

  markpoint = apply(mapdata,1,function(x) 
    paste0("{name:'",x[2],"',value:",x[3],"}"))
  markPointData= paste(markpoint,collapse = ",\n")

  
  
  
  ### write remap object
  output = new("remap")
  output@id = paste('ID', format(Sys.time(), "%Y%m%d%H%M%S"), proc.time()[3]*100, sep="_")
  output@theme = theme
  output@maptype = "SVG"
  
  output@option = html.data$option
  head = html.data$head
  foot = html.data$foot
  
  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",
                  "Chinese (Simplified)_People's Republic of China.936")
  }
  
  output@option = sub("forChange",
                      "一",output@option)
  
  output@option = sub("backgroundColorData",
                       theme$backgroundColor,output@option)
  output@option = sub("titleData",title,output@option)
  output@option = sub("subtitleData",subtitle,output@option)
  output@option = sub("titleColorData",theme$titleColor,output@option)
  output@option = sub("lineColorData",theme$lineColor2,output@option)
  output@option = sub("borderColorData",theme$borderColor,output@option)
  output@option = sub("regionColorData",theme$regionColor,output@option)
  output@option = sub("geoCoord_data",geoCoord_data,output@option)
  output@option = sub("markLineData",markLineData,output@option)
  output@option = sub("markPointData",markPointData,output@option)
  
  output@option = strsplit(output@option,"kkkmmm")[[1]][2]
  output@content =  paste(head,output@option,foot,sep = "\n") 
    
  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }
  return(output)
}



html.data = list(
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
  
  var options = " ,
  option = "forChangekkkmmm{
  backgroundColor: 'backgroundColorData', 
  color: ['gold','aqua','lime'],
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
  formatter: '{b}'
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
  dataRange: {
  min : 0,
  show: false,
  max : 100,
  y: '60%',
  calculable : true,
  color: lineColorData
  },
  
  series : [
  {
  type:'map',
  itemStyle:{
  normal:{
  borderColor:'borderColorData', 
  borderWidth: 0.5,
  areaStyle:{
  color: 'regionColorData'  
  }
  }
  },
  data:[],
  geoCoord: {geoCoord_data},
  
  markLine : {
  smooth:true,
  effect : {
  show: true,
  scaleSize: 1,
  period: 30,
  color: '#fff',
  shadowBlur: 10
  },
  itemStyle : {
  color: 'red',
  normal: {
  borderWidth:1,
  lineStyle: {
  type: 'solid',
  shadowBlur: 10
  },
  label:{show:false}
  }
  },
  
  data : [
  markLineData
  ]
  },
  markPoint : {
  symbol:'emptyCircle',
  symbolSize : function (v){
  return 10 + v/10
  },
  effect : {
  show: true,
  shadowBlur : 0
  },
  itemStyle:{
  normal:{
  label:{show:true}
  }
  },
  data : [
  markPointData
  ]	
  }
  }
  ]
  }",
  foot = ";
  myChart.setOption(options);	
  </script>
  </body>
  </html>"
  )