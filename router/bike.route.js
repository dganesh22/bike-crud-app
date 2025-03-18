const bikeRoute = require('express').Router()
const { homeController, createController, updateController, addBike, allBike, singleBike, updateBike, deleteBike } = require("../controller/bike.controller")


// get 
bikeRoute.get(`/`, homeController)
bikeRoute.get(`/create`, createController)
bikeRoute.get(`/edit/:id`, updateController)


// post
bikeRoute.post(`/api/bike/add`, addBike)

bikeRoute.get(`/api/bike/all`, allBike)

bikeRoute.get(`/api/bike/single/:id`, singleBike)

bikeRoute.patch(`/api/bike/update/:id`, updateBike)

bikeRoute.delete(`/api/bike/delete/:id`, deleteBike)

module.exports = bikeRoute