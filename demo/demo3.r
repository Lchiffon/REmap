## default theme:"Dark"
set.seed(125)
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)

## set Line color as 'orange'
set.seed(125)
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange"))
plot(out)

## Set backgroundColor as 'red'(#FF0000)

out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FF0000"))
plot(out)

## Set TitleColor
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FFC1C1",
                              titleColor = "#1b1b1b"))
plot(out)

## Set Region Color
out = remap(demoC,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("None",
                              lineColor = "orange",
                              backgroundColor = "#FFC1C1",
                              titleColor = "#1b1b1b",
                              regionColor = '#ADD8E6'))
plot(out)