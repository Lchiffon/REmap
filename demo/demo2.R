
demoE


set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Dark")
plot(out)
summary(out)

set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)


set.seed(125)
out = remap(demoE,title = "REmap Sample Data",subtitle = "theme:Sky",
            theme = get_theme("Sky"))
plot(out)