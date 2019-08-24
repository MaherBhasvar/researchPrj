const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
//const validateAminalInsemination = require('../../validation/animalInsemination');

//Load Schema
const DashboardExcel = require('../../models/DashboardExcel');

router.get('/test', (req, res) => res.json({ msg: "Animal DashboradExcel Works" }));


//@route        GET api/dashboardExcel/show
//@description  GET data
//@access       Private

router.get('/show/:skip/:limit', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("DashboardExcel")

    // DashboardExcel.find().batchSize(10, (err, ref) => {
    //     console.log("batch", ref)
    // })

    // var batch = [];
    // var stream = DashboardExcel.find().batchSize(100).stream((all) => {
    //     console.log("stream batch", all)
    // })
    // stream.on('end', function () {
    //     console.log('Stream ended!');

    // });

    // stream.on('data', function (doc) {
    //     batch.push(doc);
    //     if (batch.length == 1000 || !stream.hasNext()) {
    //         stream.pause();
    //         // process() updates our CloudSearch index and updates the db.
    //         console.log("batch stream", batch)
    //         // Only resume stream once we're done processing.
    //         stream.resume();
    //     }
    // })

    DashboardExcel.find().skip(Number(req.params.skip)).limit(Number(req.params.limit))
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