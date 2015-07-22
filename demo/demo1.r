
set.seed(125)
out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Dark")
plot(out)
summary(out)

set.seed(125)
out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Bright",
            theme = get_theme("Bright"))
plot(out)


set.seed(125)
out = remap(demoC,title = "REmap示例数据",subtitle = "theme:Sky",
            theme = get_theme("Sky"))
plot(out)