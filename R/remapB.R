##' Create a Bmap object
##'  
##' remapB uses BaiduAPI instead of SVG object as the map object.
##' You can mark line or point on the remapB.
##' 
##' 
##' @usage 
##' remapB(center = c(104.114129,37.550339),
##'        zoom = 5,
##'        color = "Bright",
##'        title = "",
##'        subtitle = "",
##'        markLineData = NA,
##'        markPointData = NA,
##'        markLineTheme = markLineControl(),
##'        markPointTheme = markPointControl(),
##'        geoData = NA)
##'               
##' @param center  the center of the Bmap,a vector of (lon,lat),
##' you can get from get_city_coord, e.g.get_city_coord("beijing")
##' @param zoom   the size of the Bmap, zoom:5 country data,
##' zoom:15 city data
##' @param color  "Bright" or "Blue"
##' @param title    a character string of the title
##' @param subtitle    a character string of the subtitle
##' @param markLineData   data for mark line
##' @param markPointData   data for mark point
##' @param markLineTheme  theme for mark line
##' @param markLineTheme  theme for mark point 
##' @param geoData geoData for markLine and markPoint format is 
##' similar as get_geo_position()
##' @return An remap object
##' @author Chiffon <\url{http://chiffon.gitcafe.io}>
##' @examples 
##' 
##'  geoData  = get_geo_position(unique(demoC[demoC==demoC]))
##' # this may take some time,be patient~
##' 
##' remapB(markLineData = demoC,geoData = geoData)
##' 
##' 
##' 
##' remapB(markLineData = demoC,color = "Blue",geoData = geoData)
##' 
##' 
##' remapB(markLineData = demoC,markPointData = demoC[,2],
##'        color = "Blue",geoData = geoData)




remapB = function(center = c(104.114129,37.550339),
                  zoom = 5,
                  color = "Bright",
                  title = "",
                  subtitle = "",
                  markLineData = NA,
                  markPointData = NA,
                  markLineTheme = markLineControl(),
                  markPointTheme = markPointControl(),
                  geoData = NA){
  
  
  if(.Platform$OS.type == "windows"){
    locate = Sys.getlocale("LC_CTYPE")
    Sys.setlocale("LC_CTYPE","eng")
  }
  
  
  markLineLogi = (length(dim(markLineData)) ==2)
  markPointLogi = class(markPointData)!='logical'
  
  
  if(!(markLineLogi | markPointLogi)){
    stop("You should have at least a dataframe, markLineData or markPointData ")
  }
  
  if(markLineLogi ==F){
    markLineData = ""
  }else{
    markLineData = markLineStr(markLineData,
                               markLineTheme,
                               geoData)
  }
  
  if(markPointLogi ==F){
    markPointData = ""
  }else{
    markPointData = markPointStr(markPointData,
                                 markPointTheme,
                                 geoData)
  }
  
  
  if(color == "Blue"){
    mapStyleData = "map.setMapStyle({
    styleJson: [
    {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': {
    'color': '#044161'
    }
    },
    {
    'featureType': 'land',
    'elementType': 'all',
    'stylers': {
    'color': '#004981'
    }
    },
    {
    'featureType': 'boundary',
    'elementType': 'geometry',
    'stylers': {
    'color': '#064f85'
    }
    },
    {
    'featureType': 'railway',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'highway',
    'elementType': 'geometry',
    'stylers': {
    'color': '#004981'
    }
    },
    {
    'featureType': 'highway',
    'elementType': 'geometry.fill',
    'stylers': {
    'color': '#005b96',
    'lightness': 1
    }
    },
    {
    'featureType': 'highway',
    'elementType': 'labels',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'arterial',
    'elementType': 'geometry',
    'stylers': {
    'color': '#004981'
    }
    },
    {
    'featureType': 'arterial',
    'elementType': 'geometry.fill',
    'stylers': {
    'color': '#00508b'
    }
    },
    {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'green',
    'elementType': 'all',
    'stylers': {
    'color': '#056197',
    'visibility': 'off'
    }
    },
    {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'local',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'arterial',
    'elementType': 'labels',
    'stylers': {
    'visibility': 'off'
    }
    },
    {
    'featureType': 'boundary',
    'elementType': 'geometry.fill',
    'stylers': {
    'color': '#029fd4'
    }
    },
    {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': {
    'color': '#1a5787'
    }
    },
    {
    'featureType': 'label',
    'elementType': 'all',
    'stylers': {
    'visibility': 'off'
    }
    }
    ]
  });"
    titleColor = "#fff"
}else{
  mapStmapStyleData = ""
  titleColor = "black"
}
  
  output = new("remap")
  output@id = paste('ID', format(Sys.time(), "%Y%m%d%H%M%S"),
                    proc.time()[3]*100, sep="_")
  output@theme = get_theme()
  output@maptype = "Bmap"
  
  
  
  output@option = html.data.B$option
  head = html.data.B$head
  foot = html.data.B$foot
  
  if(.Platform$OS.type == "windows"){
    Sys.setlocale("LC_CTYPE",
                  "chs")
  }
  
  
  output@option = sub("forChange",
                      "一",output@option)
  
  ##longtitude and latitude
  output@option = sub("lonData",
                      center[1],output@option)
  output@option = sub("latData",
                      center[2],output@option)

  ## zoom
  output@option = gsub("zoomData",
                       zoom,output@option)
  
  ## theme

  output@option = sub("//mapStyleData",
                      mapStyleData,output@option)
  
  ## Title subtitle and color
  output@option = sub("titleData",title,output@option)
  output@option = sub("subtitleData",subtitle,output@option)
  output@option = gsub("titleColorData",
                       titleColor,output@option)
  
  
  ## markline and mark point
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




html.data.B = list(head = "<html>
  <head>
                <meta charset='utf-8'>
                <style type='text/css'>
                body {
                margin: 0;
                }
                #main {
                height: 100%;
                }
                </style>
                </head>
                <body>
                <div id='main'></div>
                <script src='http://echarts.baidu.com/build/dist/echarts.js'></script>
                <script type='text/javascript' src='http://api.map.baidu.com/api?v=2.0&ak=q9U1lWgCK1aBGVC1DVWrgWa7'></script>
                <script src='http://echarts.baidu.com/doc/asset/js/jquery.min.js'></script>
                ",
               options = "forChangekkkmmm<script>
                (function () {
                require.config({
                paths: {
                echarts:'http://echarts.baidu.com/doc/example/www/js'
                },
                packages: [
                {
                name: 'BMap',
                location: 'http://echarts.baidu.com/extension/BMap/src',
                main: 'main'
                }
                ]
                });
                
                require(
                [
                'echarts',
                'BMap',
                'echarts/chart/map'
                ],
                function (echarts, BMapExtension) {
                $('#main').css({
                height:$('body').height(),
                width: $('body').width()
                });
                
                var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
                enableMapClick: false
                });
                var map = BMapExt.getMap();
                var container = BMapExt.getEchartsContainer();
                
                var startPoint = {
                x: lonData,
                y: latData
                };
                var point = new BMap.Point(startPoint.x, startPoint.y);
                map.centerAndZoom(point, zoomData);
                map.enableScrollWheelZoom(true);
                //mapStyleData 
                

option = {
  color: ['gold','aqua','lime'],
  title : {
    text: 'titleData',
    subtext: 'subtitleData',
    x:'center',
    textStyle : {
      color: 'titleColorData'
    }
  },
  tooltip : {
    show: true,
    trigger: 'item',
    formatter:function(params,ticket,callback){
              return(params[1]);
                }
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
      type:'map',
      mapType: 'none',
      data:[]
      //markLineData
      //markPointData
      
    },
    ]
};
",
foot = "
var myChart = BMapExt.initECharts(container);
window.onresize = myChart.onresize;
BMapExt.setOption(option);
                }
                );
                })();
</script>
  </body>
  </html>
  
  ")