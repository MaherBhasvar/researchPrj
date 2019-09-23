const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
//const validateAminalInsemination = require('../../validation/animalInsemination');
let errors = {}
//Load Schema
const DashboardExcel = require('../../models/DashboardExcel');

router.get('/test', (req, res) => res.json({ msg: "Animal DashboradExcel Works" }));


//@route        GET api/dashboardExcel/show
//@description  GET data
//@access       Private

router.get('/show/:skip/:limit', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("DashboardExcel")

    DashboardExcel.find().skip(Number(req.params.skip)).limit(Number(req.params.limit))
        .then(all => {
            //console.log("Received DashboardExcel", all)

            return res.json(all)
        })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })

});


//@route        POST api/dashboardExcel/add
//@description  POST data
//@access       Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
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



//@route        POST api/dashboardExcel/update/:id
//@description  update data
//@access       Private
router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("Update DashBoard Excel");
    DashboardExcel.updateOne({ _id: req.body._id }, {
        $set: {
            DateOfEntry: req.body.DateOfEntry,
            FarmerName: req.body.FarmerName,
            MobileNo: req.body.MobileNo,
            Village: req.body.Village,
            CowTagNo: req.body.CowTagNo,
            Age: req.body.Age,
            DateOfBirth: req.body.DateOfBirth,
            SireID: req.body.SireID,
            DamID: req.body.DamID,
            SurveyPickYield: req.body.SurveyPickYield,
            MDPH: req.body.MDPH,
            LactationNo: req.body.LactationNo,
            DateOfAI: req.body.DateOfAI,
            BullNo: req.body.BullNo,
            NumberOfAIService: req.body.NumberOfAIService,
            DateOfPD: req.body.DateOfPD,
            PD: req.body.PD,
            ExpectedCalvingDate: req.body.ExpectedCalvingDate,
            DateOfCalving: req.body.DateOfCalving,
            EaseOfCalving: req.body.EaseOfCalving,
            TypeOfCalving: req.body.TypeOfCalving,
            CalfSex: req.body.CalfSex,
            CongDefect: req.body.CongDefect,
            CalfTagNo: req.body.CalfTagNo,
            Remarks: req.body.Remarks,
        }
    }).then(user => {
        console.log("successful update")
        res.json(user)
    }).catch(err => {
        errors.error = err.toString();
        res.status(404).json(errors)
    })
});



//@route        POST api/dashboardExcel/updateAll
//@description  update data
//@access       Private
router.post('/updateAll', passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("update All");
    // var list = await DashboardExcel.find().map((u) => {
    //     console.log(typeof u)
    //console.log(typeof u["_id"]);
    //var change = u.DateOfAI;
    // if (u._id == "5d584071292d6b322de12aeb") {
    //     var newChange = u.DateofAI.split("/");
    //     var newDate = "" + newChange[2] + "-" + newChange[1] + "-" + newChange[0] + "";
    //     console.log("new Date", newDate)
    //     DashboardExcel.update({ _id: "5d584071292d6b322de12aeb" }, { $set: { DateOfAI: newDate } }).then(updated => console.log(updated));
    // }

    // });
    // console.log(list);
    // res.json(list)

    //DashboardExcel.update({ _id: "5d584071292d6b322de12aeb" }, { $unset: { DateOfAI: "" } }).then(updated => console.log(updated));

    const cursor = await DashboardExcel.find({})
    for (var eachElement of cursor) {
        console.log(eachElement._id)
        console.log(eachElement.DateOfAI)
        console.log(eachElement.DateofAI)
        console.log(eachElement.MoNo)
        for (var eachAttribute in eachElement) {
            //if (eachAttribute == "_id" || eachAttribute == "DateOfAI")
            console.log("eachAttribute: ", eachAttribute)
            //console.log(eachElement)
        }
        //break;
        //eachElement._id;
        console.log(eachElement)
        DashboardExcel.updateOne({ _id: eachElement._id }, { $rename: { "Date of AI": "DateOfAI" } }).then(obj => {
            console.log(obj)
        })
        break;
    };
    //console.log(cursor)
    // await cursor.forEach((err, resultArray) => {
    //     if (!err) {
    //         callback(resultArray);
    //     }
    //     else {
    //         callback(false);
    //     }
    // });
    return res.json(cursor)

});

module.exports = router;