## ---- REmap demo ----
## ---- remapCDemo ----
## ---- pauseFunction ----
pause <- function(){
  invisible(readline("\nPress <return> to continue: "))
}
data(demoC)


## default theme:"Dark"
set.seed(125)
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)

## ---- pause ----
pause()

## set Line color as 'orange'
set.seed(125)
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange"))
plot(out)
## ---- pause ----
pause()


## Set backgroundColor as 'red'(#FF0000)

out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FF0000"))
plot(out)
## ---- pause ----
pause()



## Set TitleColor
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FFC1C1",
                              titleColor = "#1b1b1b"))
plot(out)
## ---- pause ----
pause()



## Set Region Color
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FFC1C1",
                              titleColor = "#1b1b1b",
                              regionColor = '#ADD8E6'))
plot(out)

## ---- pause ----
pause()

out = remapC(data = mapdata,title = "REmap Choropleth Map",
             maxdata= 2500)
out

## ---- pause ----
pause()
data(mapdata)
out = remapC(data = mapdata,theme = get_theme("Dark"),
             color = c('skyblue','darkblue'),
             title = "REmap Choropleth Map")
out


## ---- pause ----
pause()
data = data.frame(country = mapNames("world"),
                  value = 5*sample(178)+200)
head(data)

## ---- pause ----
pause()
out = remapC(data,maptype = "world",color = 'skyblue')
plot(out)
