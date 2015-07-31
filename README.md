## REmap
### Create html maps by Echarts

- Version: 0.2
- Authors@R: "Dawei Lang <dawei.lang@supstat.com> [aut, cre]"
- Description: Provides an R interface to the JavaScript library ECharts for
    interactive map data visualization.
- Depends: R (>= 3.1.2)
- License: MIT + file LICENS

```
library(devtools)
install_github('REmap', 'lchiffon')
```



----
### 更新日志

#### V0.2

- 增加分级统计图(Choropleth Map): remapC
- 增加Bmap(百度地图与Echarts的结合): remapB
- get_theme函数中增加三个新的控制变量
- 格式化markLine和markPoint的使用
- 删去了帮助文档的中文字符
- 修正Windows用户下geo-cahce的问题(更快地获取地理信息)

#### V0.1

- 基础函数: remap


----
### Update Log

#### V0.2

- Add Choropleth Map into REmap: remapC
- Add BaiduMap into REmap: remapB
- Add three new control into get_theme
- Add markLine,markPoint control
- Delete Chinese character in .Rd file
- Fix geo-cache system in windows

#### V0.1

- Demo function: remap