mapdata = read.csv("demo/chinaIphone.csv")
out = remapC(data = mapdata,title = "REmap Choropleth Map",
             maxdata= 2500)
out


out = remapC(data = mapdata,theme = get_theme("Dark"),
             color = c('skyblue','darkblue'),
             title = "REmap Choropleth Map")
out



data = data.frame(country = mapNames("world"),
                   value = 5*sample(178)+200)
head(data)
out = remapC(data,maptype = "world",color = 'skyblue')
plot(out)
