##' Get the location information of the city vector
##'
##' get_geo_position use the function of get_city_coord according
##' to Baidu API <\url{http://developer.baidu.com/map/}>to get the longtitude and latitude of the city
##' vector
##'
##' This function can transform the name of Chinese city ve tor
##' Which can be a Chinese string or an English name,like Shanghai.
##' This function is used BaiduAPI to get the geo information.\\
##' It's recomendece to use Chinese city name because of the API
##' we use is Baidu, which will performs better in Chiese\\
##' Please make sure your bowser can open developer.baidu.com/map/ to get the data.
##'
##' @param city_vec   a character object of the name of Chinese city,
##' @param cache_data  c('city','airport','none') city for city geo_position,
##' airport for the geo_position in that city, none for nothing for cache
##' @return A dataframe of longtitude and latitude and city name
##' @author Dawei.Lang Chiffon <\url{http://lchiffon.github.io}>
##' @examples
##' city_vec1 = c("Beijing","Shanghai","Guangzhou")
##' get_geo_position (city_vec1)




get_geo_position = function(city_vec,cache_data = 'city',...){
  #city data load("data/city.Rdata")

  if(cache_data == 'city'){
    cache = REmapCityGeo
  }else if(cache_data == 'airport'){
    cache = airport
  }else if(cache_data == 'none'){
    cache = data.frame(city = 'nooooo')
  }else{
    warning("There's no cache data called",cache_data,",use city instead")
  }

  lab_list = sapply(city_vec, function(x) which(x == cache$city))

  index = sapply(lab_list,function(x) length(x)==0)

  in_list = lab_list[!index]

  if(length(in_list)!=length(city_vec)){

    in_list = do.call(c,in_list)
    out_list = names(lab_list)[index]

    OutputData = data.frame(lon = 0,
                             lat = 0)

    for ( i in 1:length(out_list)){
      OutputData[i,] = get_city_coord(out_list[i],...)
    }
    OutputData$city = out_list

    OutputData  = rbind(OutputData,cache[in_list,])
  }else{
    OutputData = cache[in_list,]
  }

  naData = OutputData[!complete.cases(OutputData),]
  if(nrow(naData)!=0){
    warning(paste(paste(naData$city),"not found."))
    OutputData = na.omit(OutputData)
  }


  OutputData
}
