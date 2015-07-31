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