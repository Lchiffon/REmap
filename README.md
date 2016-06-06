## REmap
### Create html maps by Echarts

- Version: 0.3
- Authors@R: "Dawei Lang <chiffonlang@icloud.com> [aut, cre]"
- Description: Provides an R interface to the JavaScript library ECharts for
    interactive map data visualization.
- Depends: R (>= 3.1.2)
- License: MIT + file LICENS

- [REmap Tutorial](http://lchiffon.github.io/REmap)

```
library(devtools)
install_github('lchiffon/REmap')
```
<img src = "http://www.xueqing.tv/uploads/Article/face/thumbs/10_1437631903.png">




----
### 更新日志

#### V0.3.2
- remapB函数添加11个新主题

![](http://lchiffon.github.io/reveal_slidify/echarts/all.png)

- 修复Bug


#### V0.3.1
- 新生成的图片将存储在R的临时文件夹中,并在退出R后删除
- 可以使用`options(remap.js.web = T)`来切换保存到工作目录的模式

#### V0.3
- 修复remapC的warning bugs
- 新增remapH热力图效果

#### V0.2.2

- 调整demo的文档,可以用demo函数来调用
- `get_geo_postion`把原始的机场经纬度chche改为城市经纬度
- fix bugs

#### V0.2.1

- 在调用remapC与remapB时,可以设置line和point的tooltip
- 调用markPoint可以在数据中设置symbolSize来控制点的大小
- 增加knitr的支持

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
#### V0.3.2
- Add 11 new themes into remapB function
- Fix bugs


#### V0.3.1
- New pictures will be saved in the R temporary file path
- USe `options(remap.js.web = T)` to set options for saving pictures into working directory

#### V0.3
- fix warning bugs of remapC
- add remapH heatmap function

#### V0.2.2

- Support demo for REmap
- Change the airport cache data to city data in `get_geo_position` function
- Fix bugs

#### V0.2.1

- Add tooltip to markpoint and markLine( set a vector called 'tooltip' to the data)
- Add symbolSize to markpoint( set a vector called 'symbolsize' to the data)
- Support REmap in knitr
 
#### V0.2

- Add Choropleth Map into REmap: remapC
- Add BaiduMap into REmap: remapB
- Add three new control into get_theme
- Add markLine,markPoint control
- Delete Chinese character in .Rd file
- Fix geo-cache system in windows

#### V0.1

- Demo function: remap
