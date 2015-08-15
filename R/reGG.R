
## New object
setClass("remapgg",
         representation (
           mapdata = "data.frame",
           print = "logical",
           argument = "list"
         ))



## show object
setMethod("show",
          signature = "remapgg",
          definition = function(object){
            if(object@print){
              plot.remap(do.call(remap,object@argument))
            }else{
              print(object@argument)
            }

          })

## basic function
newmap = function(mapdata){
  object = new("remapgg")
  object@print = TRUE
  object@argument$mapdata = mapdata
  object@argument$title = ""
  object@argument$subtitle = ""
  object
}


## add title
reTitle = function(title){
  output = new("remapgg")
  output@print = F
  output@argument$title = title
  output
}


reSubtitle = function(subtitle){
  output = new("remapgg")
  output@print = F
  output@argument$subtitle = subtitle
  output
}



`+.remapgg` = function(object1,object2){
  if(class(object2)!= "remapgg"){
    stop("object2 should be a remapgg object")
  }

  if(!is.null(object2@argument$title)){
    object1@argument$title = object2@argument$title
  }

  if(!is.null(object2@argument$subtitle)){
    object1@argument$subtitle = object2@argument$subtitle
  }

#   theme notfound
#   if(!is.null(object2@argument$title)){
#     object1@argument@title = object2@argument@title
#   }
  object1
}

#
#
# p = newmap(demoC)
#
# p + reTitle("remapGG")
#
# p + reTitle("remapGG") + reSubtitle("remapGG subtitle")

