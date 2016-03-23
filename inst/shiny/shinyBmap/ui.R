
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(REmap)
shinyUI(fluidPage(
    tags$head(
        # Include our custom CSS
        includeCSS("style.css")
    ),
    REmapOutput("remap"),
  # Application title
  

  # Sidebar with a slider input for number of bins
  absolutePanel(id = "controls", class = "panel panel-default", fixed = TRUE,
                draggable = TRUE, top = 60, left = "auto", right = 20, bottom = "auto",
                width = 330, height = "auto",
        numericInput("lon",
                     "Longitude of Center:",
                     104.114129,
                     min = -180, max = 180),
        numericInput("lat",
                     "Latitude of Center:",
                     37.550339,
                     min = -90, max = 90),
        numericInput("zoom",
                     "Zoom Control(larger for more details):",
                     5,
                     min = 1, max = 12),
        selectInput("color", "Color of remapB", 
                    c("Bright", "Blue", "light",
                      "dark", "redalert", "googlelite",
                      "grassgreen", "midnight", "pink", 
                      "darkgreen", "bluish", "grayscale",
                      "hardedge"), selected = "Bright"),
        textInput("title", "Title of the plot:", value = ""),
        textInput("subtitle", "Subtitle of the plot:"),
        submitButton(text = "Apply Changes", icon = NULL, width = NULL)
        
    )

    # Show a plot of the generated distribution
    
  
))
