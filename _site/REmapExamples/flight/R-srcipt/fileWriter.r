ak = "q9U1lWgCK1aBGVC1DVWrgWa7"
setwd("C:/Users/Administrator/Desktop/my Pro/routes")

writeJS = function(js,file = "js/1-1.js"){

  js.write = do.call(paste,js)
    
output  = paste0("(function () {
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
              
              // 初始化地图
              var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
              enableMapClick: false
              });
              var map = BMapExt.getMap();
              var container = BMapExt.getEchartsContainer();
              
              var startPoint = {
              x: 121.4539,
              y: 31.22940
              };
                 var point = new BMap.Point(startPoint.x, startPoint.y);
                 map.centerAndZoom(point, 12);
              map.enableScrollWheelZoom(true);
              // 地图自定义样式
              map.setMapStyle({
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
              });
              
              option = {
              color: ['gold','aqua','lime'],
              title : {
              text: '上海地铁',
              subtext:'@Chiffon chiffon.gitcafe.io',
              x:'center',
              textStyle : {
              color: '#fff'
              }
              },
              tooltip : {
              show: true,
              trigger: 'item',
              formatter: function (v) {
              return v[1].replace(':', ' > ');
              }
              },
              legend: {
              orient: 'vertical',
              x:'left',
              data:['1号线', '2号线','3号线'],
              selectedMode: 'single',
              selected:{
              '2号线' : false,
              '3号线' :false
              },
              textStyle : {
              color: '#fff'
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
              dataRange: {
              min : 0,
              max : 100,
              range: {
              start: 10,
              end: 90
              },
              x: 'right',
              calculable : true,
              color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
              textStyle:{
              color:'#fff'
              }
              },
              series : [",
              js.write,
              "  ]

        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);
    }
);
})();")
locate = Sys.getlocale("LC_CTYPE")
Sys.setlocale("LC_CTYPE",
              "Chinese (Simplified)_People's Republic of China.936")
write(output,file)
Sys.setlocale("LC_CTYPE", locate)
}



js = list(js1.1,js1.2,js1.3)
writeJS(js,"js/1-3.js")
