## REmap
### Create html maps by Echarts

- Version: 0.1
- Authors@R: "Dawei Lang <dawei.lang@supstat.com> [aut, cre]"
- Description: Provides an R interface to the JavaScript library ECharts for
    interactive map data visualization.
- Depends: R (>= 3.1.2)
- License: MIT + file LICENS

```
library(devtools)
install_github('REmap', 'lchiffon')
```


V0.2
add Choroplrth Map into REmap: remapC
add BaiduMap into REmap: remapB
add three new control into get_theme
add markLine,markPoint control
delete Chinese character in .Rd file

V0.1
demo function: remap