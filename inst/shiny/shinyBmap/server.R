
# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(REmap)

shinyServer(function(input, output) {
  
  output$remap <- renderREmap({
      geoData  = get_geo_position(unique(demoC[demoC==demoC]))
      # this may take some time,be patient~
      remapB(center = c(input$lon,input$lat),
             zoom = input$zoom,
             color = input$color,
             title = input$title,
             subtitle = input$subtitle,
             markLineData = demoC,
             markPointData = demoC[,2],
             markLineTheme = markLineControl(),
             markPointTheme = markPointControl(),
             geoData = geoData)
      
  },height='900px')
})
