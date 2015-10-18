# users = read.csv("data/users.csv",head = F,encoding = 'UTF-8')
# remapC(users)

library(dplyr)
library(APItools)


userdata <- read.csv("data/userdata.txt",quote = "\"'",head= F)
userdata <- userdata %>% 
				select(userid = V6, ip = V7)	%>% 
				na.omit() %>% 
				group_by(userid) %>%
				summarise(ip = first(ip)) %>% 
				.[-1,]
userdata$ip = gsub("\\s","",as.character(userdata$ip))

getIPfunction = APIStore(114)
getProvince = function(ip){
	a = try(getIPfunction(ip)$retData$province,T)
	if(length(a)!=1){
		print("Not found!")
		return(NA)
	}else{
		print(i)
		i <<- i+1
		return(a)
	}
}
i=0

province = sapply(as.character(userdata$ip),getProvince)
userdata$province = province

User.final = userdata %>%
			    group_by(province) %>%
			    summarise(count = n()) %>%
				 .[-c(1:2),] %>%
				 arrange(desc(count)) %>%
				 as.data.frame()
save(User.final,file = "data/User.final.Rdata")
remapC(data = User.final,title = "xueqing.cc用户分布",
		 color=c("skyblue","skyblue","skyblue","white"))
