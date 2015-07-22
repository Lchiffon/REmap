setClass("remap",
          representation (
            id = "character",
            maptype = "character",
            option = "character",
            theme = "list",
            content = "character"
          ))


setMethod("show",
          signature = "remap",
          definition = plot.remap )

setMethod("summary",
          signature = "remap",
          definition = function(object){
            cat("Object ID:\n")
            cat(object@id)
            cat("\nMap Type:\n")
            cat(object@maptype)
            cat("\nFile Position:\n")
            cat(file_name = paste0("~/",object@id,".html"))
            cat("\nLength of Content:\n")
            cat(length(strsplit(out@content,"\\n")[[1]]))
          })

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
  option = "{
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