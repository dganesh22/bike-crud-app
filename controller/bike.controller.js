 const BikeModel = require('../model/bike')

 // home page
 const homeController = async (req,res) => {
    try {
        res.render('index.ejs')
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }

 const createController = async (req,res) => {
    try {
        res.render('create.ejs')
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }

 const updateController = async (req,res) => {
    try {
        let {id} = req.params
        
        let bike = await BikeModel.findById(id)
            if(!bike)
                return res.status(400).json({ msg: "requested bike id not found"})

        res.render('edit.ejs', { bike })
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }


 // to handle api requests
 const addBike = async (req,res) => {
    try {

        let exBike = await BikeModel.findOne({ title: req.body.title })
            if(exBike)
                return res.status(400).json({ msg: "bike data already exists."})

            let data = await BikeModel.create(req.body) 
        
            // data.save()
        res.status(200).json({ msg: "added bike information successfully", data })
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }
 const allBike = async (req,res) => {
    try {
         let bikes = await BikeModel.find()
         
        res.status(200).json({ length: bikes.length, bikes })
    } catch (err) { 
        return res.status(500).json({ msg : err.message })
    }
 }
 const singleBike = async (req,res) => {
    try {
        let {id} = req.params
        
        let bike = await BikeModel.findById(id)
            if(!bike)
                return res.status(404).json({ msg: "requested bike id not found"})
            
        res.status(200).json({ bike })
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }
 const updateBike = async (req,res) => {
    try {
        let {id} = req.params
        
        let bike = await BikeModel.findById(id)
            if(!bike)
                return res.status(404).json({ msg: "requested bike id not found"})

        await BikeModel.findByIdAndUpdate({_id: id}, req.body)

        res.status(200).json({ msg: "bike details updated successfully"})
    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }
 const deleteBike = async (req,res) => {
    try {
        let {id} = req.params
        
        let bike = await BikeModel.findById(id)
            if(!bike)
                return res.status(404).json({ msg: "requested bike id not found"})

        await BikeModel.findByIdAndDelete({_id: id})

        res.status(200).json({ msg: "bike details deleted successfully"})

    } catch (err) {
        return res.status(500).json({ msg : err.message })
    }
 }

 module.exports = { homeController, createController, updateController, addBike, allBike, singleBike, updateBike, deleteBike }