## ---- REmap demo ----
## ---- remapBDemo ----
## ---- pauseFunction ----
pause <- function(){
  invisible(readline("\nPress <return> to continue: "))
}
data(demoC)
## Test for Bmap


geoData  = get_geo_position(unique(demoC[demoC==demoC]))
# this may take some time,be patient~

remapB(markLineData = demoC,geoData = geoData)
## ---- pause ----
pause()


remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))
## ---- pause ----
pause()


data(demoC)
demoC$tooltip = sample(letters,nrow(demoC))
remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))

## ---- pause ----
pause()

demoC$linewidth = sample(5,nrow(demoC),replace = T)
remapB(markLineData = demoC,geoData = geoData,
       markLineTheme = markLineControl(color = 'red'))
## ---- pause ----
pause()



remapB(markLineData = demoC,color = "Blue",geoData = geoData)
## ---- pause ----
pause()



remapB(markLineData = demoC,markPointData = demoC[,2],
       color = "Blue",geoData = geoData)
## ---- pause ----
pause()


remapB(markPointData = demoC[,2],
       color = "Blue",geoData = geoData)
## ---- pause ----
pause()


newdata = data.frame(a = demoC[,2],
                     color = c(rep("blue",5),rep("red",5)))
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)
## ---- pause ----
pause()



newdata$symbolSize = 1:10
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)
## ---- pause ----
pause()



newdata$tooltip = paste(newdata$a,newdata$symbolSize,sep = ":")
remapB(markPointData = newdata,
       color = "Blue",geoData = geoData)
## ---- pause ----
pause()

data(chinaIphone)
## markLineControl
mapdata = chinaIphone
geoData  = get_geo_position(unique(demoC[demoC==demoC]))
out = remapC(data = mapdata,
             color = c("white","white"),
             theme=get_theme("none","white","white","white",'white'),
             markPointData = demoC[,2],
             markPointTheme = markPointControl(
               symbol = "image://http://lchiffon.github.io/reveal_slidify/pic/ghost.png",
               symbolSize = 50,
               effectType = 'bounce' ),
             geoData = geoData)
out
