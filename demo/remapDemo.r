## ---- REmap demo ----
## ---- remapDemo ----
## ---- pauseFunction ----
pause <- function(){
  invisible(readline("\nPress <return> to continue: "))
}


## ---- Create Data ----
data(demoC)
demoC[,1]
demoC[,2]

## ---- pause ----
pause()

## ---- Dark Theme ----
set.seed(125)
out = remap(demoC,title = "REmap Demo Data",subtitle = "theme:Dark")
plot(out)
summary(out)


## ---- pause ----
pause()

## ---- Bright Theme ----

set.seed(125)
out = remap(demoC,title = "REmap Demo Data",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)

## ---- pause ----
pause()


## ---- Sky Theme ----
set.seed(125)
out = remap(demoC,title = "REmap Demo Data",subtitle = "theme:Sky",
            theme = get_theme("Sky"))
plot(out)
