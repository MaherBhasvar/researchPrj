const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
//const validateAminalInsemination = require('../../validation/animalInsemination');

//Load Schema
const DashboardExcel = require('../../models/DashboardExcel');

router.get('/test', (req, res) => res.json({ msg: "Animal DashboradExcel Works" }));


//@route        GET api/dashboardExcel/
//@description  GET data
//@access       Private

router.get('/show', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("DashboardExcel")
    DashboardExcel.find()
        .then(all => {
            //console.log("Received DashboardExcel", all)
            return res.json(all)
        })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});



router.post('/add', (req, res) => {
    console.log("DashboardExcel")

    const newData = new DashboardExcel({
        SrNo: req.body.SrNo,
        FarmerName: req.body.FarmerName,
        MoNo: req.body.MoNo,
    })

    newData.save().then(data => {
        console.log("dashboard Excel data", data)
        return res.json(data)
    }).catch(err => {
        return res.status(400).json(err)
    })


});

module.exports = router;