### 1.gdp
# setwd("d:/Users/langdw/Desktop/personal/Nanchang")

library(REmap)
GDP = read.csv("data/GDP.csv",encoding = "UTF-8")
remapC(GDP,
		 color = c("red","yellow"),
		 title = "2015年第二季度中国各省份GDP(亿元)",
		 subtitle = "数据来源中国统计年鉴")


### 2.Population

popu = read.csv("data/jiangxi.csv",encoding = "UTF-8")
plotdata = data.frame(city = popu$city,
							 density = popu$population/popu$space*1e4)
remapC(data = plotdata,maptype = "江西",
		 title = "江西人口密度(人/平方公里)")
