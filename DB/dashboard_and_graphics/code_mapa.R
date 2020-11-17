library(geobr)
library(leaflet)
library(ggplot2)
library(plotly)
mg = read_municipality(code_muni = 3106200)

map = leaflet(mg) %>% addTiles()


map %>% addPolygons(
  weight = 1,
  opacity = 0.5,
  color = 'gree', 
  dashArray = '1',
  fillOpacity = 0.1
)



map = ggplot(mg) + geom_sf(aes(fill = code_muni))

ggplotly(map)

#sMG = read_health_facilities()
#bh = subset(sMG, sMG$code_muni==310620)

#map = leaflesdat(bh) %>% addTiles()

#plot(map)
