library(XML)
library(rjson)

## 1获取线路信息
getGeoData = function(origin,destination,region = "上海"){
  url = paste0(
    'http://api.map.baidu.com/direction/v1?mode=transit&origin=',
    origin,
    '&destination=',
    destination,
    '&region=',
    region,
    '&output=json&ak=q9U1lWgCK1aBGVC1DVWrgWa7')
  cat(url)
  doc = htmlParse(url)
  
  rootNode<-xmlRoot(doc)
  fromJSON(xpathSApply(rootNode,"//p",xmlValue))
}

## 获取线路信息,测试
# Line1_list = getGeoData("富锦路地铁站","莘庄地铁站")



## 2清理线路信息数据函数
cleanGeoData = function(name,list,step = 2,route = 1){ 
  if(length(step)==1){
    Geo = list$result$routes[[route]]$scheme[[1]]$steps[[2]][[1]]$path
  }else{
    Geo = paste0(
      list$result$routes[[route]]$scheme[[1]]$steps[[step[1]]][[1]]$path,
      ";",
      list$result$routes[[route]]$scheme[[1]]$steps[[step[2]]][[1]]$path
      )
  }
  Geo = strsplit(Geo,";")[[1]]
  Geo = sapply(Geo, function(x) strsplit(x,","))
  Geo = do.call(rbind,Geo)
  Geo = as.data.frame(Geo)
  row.names(Geo) = 1:nrow(Geo)
  Geo$name = paste(name,'Point',1:nrow(Geo))
  
  pointDF = Geo
  lineDF = data.frame(origin = Geo$name[1:nrow(Geo)-1],
                      destination = Geo$name[2:nrow(Geo)])
  return(list(pointDF,lineDF))
  
}


## 清理线路信息数据,测试
# dat = cleanGeoData("yihaoxian",Line1_list)
# plot(as.numeric(as.character(dat[[1]]$V1)),
#      as.numeric(as.character(dat[[1]]$V2)),"l")

## 3获取各个站点信息函数
getStation = function(input){

  ## 百度API抓取
  url = paste0("http://api.map.baidu.com/place/v2/search?q=",
               input,"地铁站&region=上海",
               "&output=json&ak=q9U1lWgCK1aBGVC1DVWrgWa7")
  doc = htmlParse(url)
  rootNode<-xmlRoot(doc)
  list = fromJSON(xpathSApply(rootNode,"//p",xmlValue))
  c(list$results[[1]]$location$lng,
    list$results[[1]]$location$lat)
}

## 3获取各个站点信息函数 测试
# StationData = data.frame(lon = 0,
#                          lat = 0)
# for ( i in 1:27){
#   StationData[i,] = getStation(input[i])
# }
# StationData


## 4输出echarts数据格式

con2echarts = function(list,stadata){
  pointDF = list[[1]] 
  lineDF = list[[2]]
  geoCoord1 = apply(pointDF,1,function(x) 
    paste0("'",x[3],"':[",x[1],",",x[2],"]"))
  
  geoCoord1 = paste(geoCoord1,collapse = ",\n")
  
  geoCoord2 = apply(stadata,1,function(x) 
    paste0("'",x[3],"':[",x[1],",",x[2],"]"))
  geoCoord2 = paste(geoCoord2,collapse = ",\n")
  
  geoCoord = paste(geoCoord1,",\n",geoCoord2)
  
  markLine = apply(lineDF,1,function(x)
    paste0("[{name:'",x[1],"'}, {name:'",x[2],
           "',value:40}]" ))
  markLine = paste(markLine,collapse = ",\n")
  
  n = nrow(stadata)
  i = 1:n
  value =  dnorm(i,n/2,n/4)*1000 + rnorm(n,0,5)+10
  stadata$value = round(value)
  markpoint = apply(stadata,1,function(x) 
    paste0("{name:'",x[3],"',value:",x[4],"}"))
  markpoint = paste(markpoint,collapse = ",\n")
  return(list(geoCoord,markLine,markpoint))
}

## 4输出echarts数据格式,测试
# final.data = con2echarts(dat,StationData)



## 主函数:将线路信息转化为series对象,用于echarts绘制
GetLineEcharts = function(name,#name
                          origin, # 发车地,如:富锦路地铁站
                          destination,# 目的地,如:莘庄地铁站
                          input,#该线路的站点,自动从上海地铁网
                          #做清理
                          step = 2,...# Step number
                          ){
                          
  
  ## 获取线路信息
  Line1_list = getGeoData(origin,destination)
  
  ## 清理线路信息
  dat = cleanGeoData(name,
                     Line1_list,
                     step = step,...)

  
  ## 清理文本数据
  input = gsub("[0-9]|\t|\n|:|-","",input)
  input = strsplit(input," ")
  input = input[[1]][input[[1]]!=""]
  ## 获取各个站点信息
  StationData = data.frame(lon = 0,
                           lat = 0)
  for ( i in 1:length(input)){
    StationData[i,] = getStation(input[i])
  }
  StationData$name = input

  ## 输出echarts数据格式
  final.data = con2echarts(dat,StationData)


  
  output = paste0( "{
                  name:'",
                  name,"',
                  type:'map',
                  mapType: 'none',
                  data:[],
                  geoCoord: {",final.data[[1]],
                  "},

                  markLine : {
                  smooth:false,
                  symbolSize:[0,0],
                  effect : {
                  show:true,
                  scaleSize: 1,
                  period: 30,
                  color: '#fff',
                  shadowBlur: 10
                  },
                  itemStyle : {
                  normal: {
                  borderWidth:1,
                  label:{
                  show:false
                  },
                  lineStyle: {
                  type: 'solid',
                  shadowBlur: 10
                  }
                  }
                  },
                  data : [",
                  final.data[[2]],
                  " ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 5 + v/10
                        },
                        effect : {
                            show:true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
						 tooltip : {
								show: true,
								trigger: 'item'
									
						},
                        data : [",
                  final.data[[3]],
                  " ]
                    }
                  
  },")
  
  output
}







# 
# 
# input = "莘庄 
# 外环路 	5:32 	6:02 	22:34 	23:32
# 莲花路 	5:34 	6:00 	22:36 	23:30
# 锦江乐园 	5:37 	5:57 	22:39 	23:27
# 上海南站 	4:55 	5:18 	5:54 	22:42 	23:24
# 漕宝路 	4:57 	5:20 	5:51 	22:45 	23:21
# 上海体育馆 	5:00 	5:23 	5:49 	22:48 	23:19
# 徐家汇 	5:02 	5:25 	5:46 	22:50 	23:16
# 衡山路 	5:04 	5:27 	5:44 	22:52 	23:14
# 常熟路 	5:06 	5:29 	5:42 	22:54 	23:12
# 陕西南路 	5:08 	5:31 	5:40 	22:56 	23:10
# 黄陂南路 	5:11 	5:34 	5:38 	22:58 	23:08
# 人民广场 	5:14 	5:37 	5:35 	23:01 	23:05
# 新闸路 	5:15 	5:38 	5:33 	23:03 	23:03
# 汉中路 	5:17 	5:40 	5:31 	23:05 	23:01
# 上海火车站 	5:19
# 中山北路 	--- 	5:45 	5:57 	23:10 	22:57
# 延长路 	--- 	5:48 	5:55 	23:13 	22:55
# 上海马戏城 	--- 	5:50 	5:53 	23:15 	22:53
# 汶水路 	--- 	5:52 	5:50 	23:17 	22:50
# 彭浦新村 	--- 	5:55 	5:47 	23:20 	22:47
# 共康路 	--- 	5:58 	5:45 	23:23 	22:45
# 通河新村 	--- 	6:00 	5:42 	23:25 	22:42
# 呼兰路 	--- 	6:03 	5:40 	23:27 	22:40
# 共富新村 	--- 	6:05 	5:37 	23:30 	22:37
# 宝安公路 	--- 	6:08 	5:34 	23:33 	22:34
# 友谊西路 	--- 	6:10 	5:32 	23:35 	22:32
# 富锦路"
# 
# origin = "富锦路地铁站"
# destination  = "莘庄地铁站"
# 
# js1.1 = GetLineEcharts("一号线",origin,destination,input)
