## 7.COS
# setwd("d:/Users/langdw/Desktop/personal/Nanchang")
library(REmap)
rCon = read.csv("data/R-con.csv",encoding = "UTF-8")
rCon$pic = paste0("<img src=",rCon$pic," width=300px />")
plotdata = data.frame(place = rCon$place,
							 symbol = "image://./pic/cos.png",
							 tooltip = paste(rCon$name,rCon$time,rCon$pic,sep = "<br/>"))
remapC(data = chinaIphone,
		 color = c("white","white"),
		 markPointData = plotdata,
		 markPointTheme = markPointControl(effect = F,
		 											 symbolSize = 30),
		 title = "2015中国R语言会议"
		 )

## 8.weather
# library(devtools)
# install_github("lchiffon/APItools")
# install_github("lchiffon/REmap")

library(REmap)
library(APItools)

################################
################################
####Set your APIkey here!#######
################################
################################
APIStore.init(" 1495c3e9b46f09c3c5a4f69b0e6c6e90")

function478 = APIStore(478)

get_weather_str = function(city){
    
    content = function478(city)
    if(!is.list(content)){
        cat(paste("City",city,"not found!"))
        output = c(NA,NA)
    }else{
        output = paste0("<br/>__________<br/>明天天气<br/>",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[2]]$cond$txt_d,
                        "<br/>",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[2]]$tmp$min,
                        "℃-",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[2]]$tmp$max,
                        "℃<br/>__________<br/>后天天气<br/>",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[3]]$cond$txt_d,
                        "<br/>",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[3]]$tmp$min,
                        "℃-",
                        content$`HeWeather data service 3.0`[[1]]$daily_forecast[[3]]$tmp$max,
                        "℃"
        )
        
        tomorrow_weather = content$`HeWeather data service 3.0`[[1]]$daily_forecast[[2]]$cond$txt_d
        if(tomorrow_weather =='晴'){
            png = "image://w/sunny.png"
        }else if(grepl("雨",tomorrow_weather)){
            png = "image://w/rainy.png"
        }else{
            png = "image://w/cloudy.png"
        }
        
        output = c(output,png) 
    }
    
    return(output)
    
}


get_weather_str("上海")

## mainfunction

weather_report = function(cityvec = c("上海",
                                      "广州","大连","南宁","南昌","拉萨","长春","包头",
                                      "重庆","武汉","北京","洛阳","台北","乌鲁木齐"),...){
    cityvec = sort(cityvec)
    weather = sapply(cityvec,get_weather_str)
    
    geoData = get_geo_position(cityvec)
    geoData = geoData[order(geoData[,3]),]
    geoData$city = paste0(cityvec,weather[1,])
    
    markPointData = data.frame(city = paste0(cityvec,weather[1,]),
                               symbol = weather[2,])
    
    remapB(markPointData = markPointData,
           markPointTheme = markPointControl(symbolSize = 25,
                                             effect = F),
           color = "Blue",
           title = "未来天气预报",
           subtitle = "by REmap, Chiffon",
           geoData = geoData,...)  
}



cityvec = c("上海",
            "广州","大连","南宁","南昌","拉萨","长春","包头",
            "重庆","武汉","北京","洛阳","台北","乌鲁木齐","沈阳",
            "西安","成都","合肥","长沙","济南","福州","兰州")
weather = sapply(cityvec,get_weather_str)
plotdata = data.frame(cityvec,
                      tooltip=paste0(cityvec,weather[1,]),
                      symbol = weather[2,])
remapB(markPointData = plotdata,
       markPointTheme = markPointControl(symbolSize = 25,
                                         effect = F),
       color = "Blue",
       title = "未来天气预报",
       subtitle = "by REmap, Chiffon")
    

cityvec = c("台北","高雄","台中")
weather_report(cityvec,
               center = get_city_coord(cityvec[3]),
               zoom = 8)
