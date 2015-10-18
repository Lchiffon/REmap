
## 3.remap
remap(demoC,theme = get_theme("Bright"))
remapB(markLineData = demoC,
		 markPointData = demoC[,2])


## 4.bmap
remapB(markLineData = demoC,
		 markPointData = demoC[,2])
## 4.2bmap
# remapB(markLineData = demoC,
# 		 markPointData = demoC[,2],color = "Blue")



## 5.route
library(baidumap)
df = getRoute('南昌西站', '江西财经大学北区',region="南昌")
# bjMap = getBaiduMap('南昌', color='bw',zoom = 11)
# ggmap(bjMap) + geom_path(data = df, aes(lon, lat),size = 2, alpha = 0.5, col = 'red')



library(REmap)
df$label = paste("Point",1:dim(df)[1])
markLinedata = data.frame(origin = df$label[-dim(df)[1]],
								  destination = df$label[-1])
remapB(center = get_city_coord("南昌"),
		 zoom = 13,
		 markLineData = markLinedata,geoData = df,
		 markLineTheme = markLineControl(smoothness = 0,
		 										  effect = T,
		 										  symbolSize = c(0,0)))


## 6.barbecue
barbeque = getPlace('烧烤', '南昌')

barbeque$tooltip = paste(barbeque$name,
								 barbeque$address,
								 barbeque$telephone,sep = "<br/>")
geodata = data.frame(barbeque$lon,
							barbeque$lat,
							barbeque$name)
remapB(center = get_city_coord("江西财经大学北区"),
		 zoom = 15,
		 markPointData = barbeque,
		 geoData = geodata,
		 markPointTheme = markPointControl(effect = F,symbol = "pin",
		 											 symbolSize = 7,
		 											 color="red"),
		 title="南昌烧烤分布")
