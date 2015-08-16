## Test for Bmap


geoData  = get_geo_position(unique(demoC[demoC==demoC]))
# this may take some time,be patient~

remapB(markLineData = demoC,geoData = geoData)

remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))

data(demoC)
demoC$tooltip = sample(letters,nrow(demoC))
remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))

demoC$linewidth = sample(5,nrow(demoC),replace = T)
remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))


remapB(markLineData = demoC,color = "Blue",geoData = geoData)


remapB(markLineData = demoC,markPointData = demoC[,2],
       color = "Blue",geoData = geoData)


remapB(markPointData = demoC[,2],
       color = "Blue",geoData = geoData)

newdata = data.frame(a = demoC[,2],
                     color = c(rep("blue",5),rep("red",5)))
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)


newdata$symbolSize = 1:10
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)


newdata$tooltip = paste(newdata$a,newdata$symbolSize,sep = ":")
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)


