## ---- REmap demo ----
## ---- remapThemeDemo ----
## ---- pauseFunction ----
pause <- function(){
  invisible(readline("\nPress <return> to continue: "))
}
data(demoE)
## ---- pause ----
pause()
demoE

## ---- pause ----
pause()
set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Dark")
plot(out)
summary(out)


## ---- pause ----
pause()
set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)


## ---- pause ----
pause()
set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Sky",
            theme = get_theme("Sky"))
plot(out)
