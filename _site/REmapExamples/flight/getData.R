

head1 = 'http://flights.ctrip.com/actualtime/depart-sha.p'
head2 = 'http://flights.ctrip.com/actualtime/arrive-sha.p'

url_d = paste0(head1,1:95,"/")
url_a = paste0(head2,1:95,"/")

depart = list()
arrive = list()
library(XML)

getinfo = function(x){
  doc = readHTMLTable(x)[[2]]
  names(doc) = gsub("\n| ","",names(doc))
  doc
}

j = 1
for (i in url_d){
  depart[[j]] = getinfo(i)
  j = j+1
  cat(j)
}
final_depart = do.call(rbind,depart)

j = 1
for (i in url_a){
  arrive[[j]] = getinfo(i)
  j = j+1
  cat(j)
}

final_arrive = do.call(rbind,arrive)

library(plyr)
library(dplyr)

names(final_depart) = c("FlightNum","depart","arrive","pltime",
                        "prtime","actime","status","control")
final_depart = colwise(as.character)(final_depart)
handle_time = function(x){
  x = gsub(" ","",x)
  output = c(
    strsplit(x,"\n")[[1]][1],
    strsplit(x,"\n")[[1]][3]
    ) 
  output
}

trans_time = function(x){
  if (length(grep("Date",x))==1){
    time = as.numeric(substr(x,7,19))
    time = time/1000/60+480 # mintue
    daytime = time %% 1440
    hour = daytime %/% 60
    minute = daytime %% 60
    output = c(hour,minute)
  }else{
    output = c(substr(x,1,2),
               substr(x,4,5))
  }
  output
}
final_depart$detime = sapply(final_depart$pltime,
                             function(x) handle_time(x)[1])
final_depart$artime = sapply(final_depart$pltime,
                             function(x) handle_time(x)[2])

final_depart$dehour = sapply(final_depart$detime,
                             function(x) trans_time(x)[1])
final_depart$deminute = sapply(final_depart$detime,
                             function(x) trans_time(x)[2])


final_depart$arhour = sapply(final_depart$artime,
                             function(x) trans_time(x)[1])
final_depart$arminute = sapply(final_depart$artime,
                               function(x) trans_time(x)[2])

locate = function(x){
  china=c("哈尔滨","池州","青岛T1","三亚","成都T2","青岛T2",
          "厦门T4","丹东","福州","西宁T2","武汉T2","郑州",
          "北京南苑","贵阳T2","北京T2","晋江","西安T3",
          "乌鲁木齐T1","沈阳T3","大连","昆明","西宁",
          "长春","广州A区","洛阳","珠海","重庆T2B",
          "深圳T3","石家庄T2","呼和浩特","乌海","怀化",
          "南宁T2","烟台","张家口","万州","通辽",
          "海拉尔","厦门T3","长沙T2","广州B区",
          "太原T2","丽江","安顺","延安","拉萨",
          "敦煌","锦州","延吉","东营","乌鲁木齐T2",
          "喀什","济南","威海","贵阳","兰州","北京T3",
          "长治","惠州","唐山","温州","天津T2","揭阳",
          "南昌T2","武汉","宜宾","银川T2","泸州","襄阳",
          "重庆T2A","阜阳","连云港","兰州T2","西安T2",
          "绵阳","桂林","黎平","北京T1","西双版纳","包头",
          "固原","柳州","长沙","景德镇","乌鲁木齐T3",
          "乌鲁木齐","阿克苏","临沂","天津","衡阳",
          "南充","井冈山","海口","西昌","成都T1",
          "牡丹江","南昌","遵义","朝阳","赤峰","湛江",
          "舟山","腾冲","普洱","芒市","安庆","庆阳",
          "嘉峪关","宜昌","佳木斯","鞍山","九寨沟","盐城",
          "乌兰浩特","梅县","大理","恩施",
          "张家界","长白山","宜春","黄山","常德",
          "北海","运城","大同","迪庆",
          "广州","邯郸","汉中","太原","满洲里",
          "榆林","鄂尔多斯","金浦","赣州","太原T1","大庆",
          "武夷山","南阳","淮安","南京T2","合肥")
  foreign=c("迪拜","法兰克福","巴黎","亚的斯亚贝巴",
            "阿布扎比","新加坡","多哈","慕尼黑","马尼拉",
            "科伦坡","吉隆坡","米兰","莫斯科F","莫斯科",
            "马累","卡利博","济州岛I","曼谷","香港","济州岛",
            "澳门","大阪","金浦I","首尔A","福冈I","首尔",
            "茨城","高松","台北桃园T1","光州","东京成田",
            "釜山I","东京羽田","赫尔辛基","台北松山","小松",
            "名古屋I","苏黎世","长崎","鹿儿岛","雅加达",
            "吉隆坡M","檀香山M","名古屋","冲绳I","旭川",
            "清迈I","伦敦","台北桃园","纽约","牧之原",
            "波士顿E","旧金山I","阿姆斯特丹","西雅图S",
            "台北桃园T2","明尼阿波利斯","罗马","东京羽田I",
            "洛杉矶B","温哥华M","蒂华纳","曼谷D","奥克兰",
            "奥克兰I","胡志明市","纽瓦克C","河内","温哥华",
            "芝加哥","底特律","纽约D","奥兰多","华盛顿杜勒斯B",
            "达拉斯D","多伦多","登巴萨I","广岛","冈山","甲米",
            "洛杉矶","拉斯维加斯","奥斯汀","暹粒","悉尼",
            "金边","高雄","墨尔本","岘港","新德里","普吉岛",
            "孟买","塞班","伊斯坦布尔I","德黑兰","关岛",
            "波士顿B","墨西哥","清州")
  if (x %in% china){
    return("国内")
  }else{
    return("国际及港澳台")
  }
}

get_city = function(x){
  output = gsub("[a-zA-Z0-9]","",x)
  if (x =="北京南苑") output = "北京"
  if (output == "广州区") output = "广州"
  if (output == "台北桃园") output = "台北"
  output
}
depart = select(final_depart,FlightNum,
                                  depart,arrive,
                                  dehour,deminute,
                                  arhour,arminute) %>%
                mutate(label = as.numeric(dehour)*4 + 
                         as.numeric(deminute)%/%15) %>%
                  arrange(label)
depart$locate = sapply(depart$arrive,locate)
depart$city = sapply(depart$arrive,get_city)
write.csv(depart,"web/depart.csv")



names(final_arrive) = c("FlightNum","depart","arrive","pltime",
                        "prtime","actime","status","control")
final_arrive = colwise(as.character)(final_arrive)

final_arrive$detime = sapply(final_arrive$pltime,
                             function(x) handle_time(x)[1])
final_arrive$artime = sapply(final_arrive$pltime,
                             function(x) handle_time(x)[2])

final_arrive$dehour = sapply(final_arrive$detime,
                             function(x) trans_time(x)[1])
final_arrive$deminute = sapply(final_arrive$detime,
                               function(x) trans_time(x)[2])


final_arrive$arhour = sapply(final_arrive$artime,
                             function(x) trans_time(x)[1])
final_arrive$arminute = sapply(final_arrive$artime,
                               function(x) trans_time(x)[2])
arrive = select(final_arrive,FlightNum,
                depart,arrive,
                dehour,deminute,
                arhour,arminute) %>%
  mutate(label = as.numeric(dehour)*4 + 
           as.numeric(deminute)%/%15) %>%
  arrange(label)
arrive$locate = sapply(arrive$arrive,locate)
arrive$city = sapply(arrive$arrive,get_city)
write.csv(arrive,"web/arrive.csv")
