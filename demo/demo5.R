## Test for Bmap


geoData  = get_geo_position(unique(demoC[demoC==demoC]))
# this may take some time,be patient~

remapB(markLineData = demoC,geoData = geoData)



remapB(markLineData = demoC,color = "Blue",geoData = geoData)


remapB(markLineData = demoC,markPointData = demoC[,2],
       color = "Blue",geoData = geoData)
