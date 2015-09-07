library(XML)
library(rjson)
arrive = read.csv("web/arrive.csv")
depart = read.csv("web/depart.csv")



head(depart)
head(arrive)

depart = depart[depart$locate =="国内",]

city = as.character(unique(depart$city))


get_city_coord = function(x){
  ## 百度API抓取
  url = paste0("http://api.map.baidu.com/place/v2/search?q=",x,
                "机场&region=",x,
               "&output=json&ak=q9U1lWgCK1aBGVC1DVWrgWa7")
  doc = htmlParse(url)
  rootNode<-xmlRoot(doc)
  list = fromJSON(xpathSApply(rootNode,"//p",xmlValue))
  c(list$results[[1]]$location$lng,
    list$results[[1]]$location$lat)
  
}

StationData = data.frame(lon = 0,
                         lat = 0)
for ( i in 1:length(city)){
  StationData[i,] = get_city_coord(city[i])
}
StationData$city = city

write.csv(StationData,"city.csv")

rm(list = ls())

depart = read.csv("web/depart.csv")
depart = depart[depart$locate =="国内",]
city = read.csv("web/city.csv")



### Part1 show city_coord

city_data_vec = apply(city,1,function(x) 
                  paste0("'",
                         x[4],
                         "'",
                          ': ['
                         ,x[2],
                         ',',
                         x[3],
                         ']'))
cat(paste(city_data_vec,collapse = ",\n"))



### part2 show

library(dplyr)

value = depart %>% group_by(.,city) %>%
              summarise(.,value = n())
vec = value$value
names(vec) = value$city

depart$value = apply(depart,1,function(x) vec[x[12]])


get_echarts = function(i){
  data = depart[depart$label==i,]
  
  part1_vec = apply(data,1,function(x) 
                paste0("[{name:'上海'},{name:'",
                      x[12],"',value:'",x[3],",",
                      x[6],":",x[7],"'}]"))
  part1 = paste(part1_vec,collapse = ",\n")
  
  part2_vec = apply(data,1,function(x) 
                paste0("{name:'",
                       x[12],"',value:",x[13],"}"))
  
  part2 = paste(part2_vec,collapse = ",\n")
  
  output = paste0(
  "{
      		title : {
    				text: '动态航班',
      subtext:'上海航班(",time[i-26],")',
    },
      series:[
    {
      type:'map',
      data:[],
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
      normal: {
      borderWidth:1,
      lineStyle: {
      type: 'solid',
      shadowBlur: 10
      }
      }
      },
      data : [",
      part1,
      "]
      },
      markPoint : {
      symbol:'emptyCircle',
      symbolSize : function (v){
      return 10 + v
      },
      effect : {
      show: true,
      shadowBlur : 0
      },
      itemStyle:{
      normal:{
      label:{show:false}
      }
      },
      data : [",
      part2,
      "]
      }
    }
  ]
  }")

  output
}

timeline1 = function(i){
  hour = i %/% 4
  min = (i %% 4)*15
  if (min == 15| min == 30){
    output = paste0("'",hour,":",min,"-",hour,":",min+15,"'")
  }else if(min == 45){
    output = paste0("'",hour,":",min,"-",hour+1,":","00","'")
  }else{
    output = paste0("'",hour,":",'00',"-",hour,":","15","'")
  }
  return(output)
}

time1 = sapply(27:93,timeline1)


timeline2 = function(i){
  hour = i %/% 4
  min = (i %% 4)*15
  if (min == 15| min == 30){
    output = paste0(hour,":",min,"-",hour,":",min+15)
  }else if(min == 45){
    output = paste0(hour,":",min,"-",hour+1,":","00")
  }else{
    output = paste0(hour,":",'00',"-",hour,":","15")
  }
  return(output)
}

time = sapply(27:93,timeline2)


paste(time,collapse = ',')



echarts_vec = sapply(27:93,get_echarts)

table(depart$deminute)
depart$deminute = as.character(depart$minute)
depart$deminute[depart$deminute =="0"] = "00"
depart$deminute[depart$deminute =="5"] = "05"
table(depart$deminute)


echarts = paste(echarts_vec,collapse = ",\n")
writeLines(echarts,"js/prepare1.js")
