##' Create a choropleth map object
##'
##' remapC uses a data frame create a remap object
##' which can be used by plot to see the map by browser
##'
##' mapdata should be a dataframe which including two columns,
##' the first column is the names of places,
##' second column is value.
##'
##' @usage
##' remapC(data,
##'        maptype = 'china',
##'       markLineData = NA,
##'       markPointData = NA,
##'       color = c('#1e90ff','#f0ffff'),
##'       theme = get_theme("Bright"),
##'       title = "",
##'       subtitle = "",
##'       markLineTheme = markLineControl(),
##'       markPointTheme = markPointControl(),
##'       geoData = NA,
##'       mindata = NA,
##'       maxdata = NA)
##'
##'
##' @param data   a data frame including place names and values
##' @param maptype the type of the map. For example,'china',
##' 'world' or other names of province in China.
##' @param title    a character string of the title
##' @param subtitle    a character string of the subtitle
##' @param theme    a list object created by get_theme,control
##' the color of the map.
##' @param color   vector of the color, if the length of color is
##' 1, white will be added to the color.
##' @param markLineData   data for mark line
##' @param markPointData   data for mark point
##' @param markLineTheme  theme for mark line
##' @param markLineTheme  theme for mark point
##' @param geoData geoData for markLine and markPoint format is
##' similar as get_geo_position()
##' @param mindata  mindata for legend
##' @param maxdata  maxdata for legend
##' @return An remap object
##' @author Chiffon <\url{http://chiffon.gitcafe.io}>
##' @examples
##' data = data.frame(country = mapNames("world"),
##'                    value = 5*sample(178)+200)
##' head(data)
##' out = remapC(data,maptype = "world",color = 'skyblue')
##' plot(out)
##'
##' remapC(chinaIphone,
##'         markLineData = demoC,
##'         markPointData = demoC[,2])

remapC = function(data,
                  maptype = 'china',
                  markLineData = NA,
                  markPointData = NA,
                  color = c('#1e90ff','#f0ffff'),
                  theme = get_theme("Bright"),
                  title = "",
                  subtitle = "",
                  markLineTheme = markLineControl(),
                  markPointTheme = markPointControl(),
                  geoData = NA,
                  mindata = NA,
                  maxdata = NA){

  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE","eng")
  }

  if(!is.data.frame(data)){
    stop("Map data should be a data frame.")
  }

  data = na.omit(data)

  if(ncol(data)<2 | nrow(data) == 0 ){
    stop("Data should have at least 2 columns and 1 row")
  }

  if(!is.character(data[1,1])){
    data[,1] = as.character(data[,1])
  }

  if(!is.numeric(data[1,2])){
    stop("Column 2 should be numeric!")
  }

  mapnames = mapNames(mapType = maptype)
  hit = sum(sapply(data[,1],function(x)
              sum(x %in% mapnames)))/length(mapnames)

  if(hit<0.5){
    warning(paste0("Over 50% places(column 1) are not found in ",maptype))
  }


  mapCVec = apply(data,1,function(x)
    paste0("{name:'",x[1],
           "',value:",x[2],"}" ))
  mapCData = paste(mapCVec,collapse = ',\n\t\t')

  if(class(color) != 'character'){
    stop("Color should be a character object!")
  }

  if(length(color) == 1){
    color = c(color,'white')
  }

  ColorData = paste0("['",paste(color,collapse = "', '"),"']")


  if(is.na(maxdata)){
    maxData = round(max(data[,2]) +
                    (max(data[,2])- min(data[,2]))/15)
  }else{
    maxData = maxdata
  }

  if(is.na(mindata)){
    minData = round(min(data[,2]) -
      (max(data[,2])- min(data[,2]))/15)
  }else{
    minData = mindata
  }

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
  if(is.na(markLineData)){
    markLineData = ""
  }else{
    markLineData = markLineStr(markLineData,
                               markLineTheme,
                               geoData)
  }

  ## Prepare for mark point data
  if(is.na(markPointData)){
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
  output@maptype = "SVG"

  output@option = html.data.C$option
  head = html.data.C$head
  foot = html.data.C$foot

  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",
                  "chs")
  }

  output@option = sub("forChange",
                      "一",output@option)

  ##V0.2: label&point
  output@option = sub("labelShowData",
                       theme$labelShow,output@option)
  output@option = sub("pointShowData",
                      theme$pointShow,output@option)
  output@option = sub("pointColorData",
                      theme$pointColor,output@option)

  ## end V0.2
  output@option = gsub("backgroundColorData",
                      theme$backgroundColor,output@option)
  output@option = sub("titleData",title,output@option)
  output@option = sub("subtitleData",subtitle,output@option)
  output@option = gsub("titleColorData",
                       theme$titleColor,output@option)

  output@option = sub("minData",minData,output@option)
  output@option = sub("maxData",maxData,output@option)
  output@option = sub("colorData",ColorData,output@option)
  output@option = sub("mapTypeData",maptype,output@option)
  output@option = sub("borderColorData",
                      theme$borderColor,output@option)

  output@option = sub("mapCData",mapCData,output@option)


  output@option = sub("//markLineData",
                      markLineData,output@option)
  output@option = sub("//markPointData",
                      markPointData,output@option)

  output@option = strsplit(output@option,"kkkmmm")[[1]][2]
  output@content =  paste(head,output@option,foot,sep = "\n")

  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",locate)
  }
  return(output)



}




html.data.C = list(
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
  dataRange: {
    min : minData,
    max : maxData,
    calculable : true,
    color: colorData,
    textStyle:{
      color:'titleColorData'
    }
  },
  series : [
    {
    name:'Data',
    type:'map',
    mapType: 'mapTypeData',
    itemStyle:{
    normal:{
    borderColor:'borderColorData',
    borderWidth: 0.5,
    label:{show:labelShowData,textStyle:{color:'titleColorData'}},
    },
    emphasis:{label:{show:true,textStyle:{color:'titleColorData'}}}
  },
  data:[mapCData]
  //markLineData
  //markPointData
  }]
}",
  foot = ";
  myChart.setOption(options);
  </script>
  </body>
  </html>"
  )
