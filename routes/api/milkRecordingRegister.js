const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
const validateMilkRecordingRegister = require('../../validation/milkRecordingRegister');

//Load Schema
const MilkRecordingRegister = require('../../models/MilkRecordingRegister');

router.get('/test', (req, res) => res.json({ msg: "Milk Recording Register Works" }));


//@route        GET api/milkRecordingRegister/dashboard
//@description  GET data
//@access       Private

router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
    MilkRecordingRegister.find()
        .then(all => { return res.json(all) })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});







//@route        POST api/milkRecordingRegister
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateMilkRecordingRegister(req.body);
    console.log("errors in animal register", errors, isValid);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newMilkRecordingRegister = new MilkRecordingRegister({
        user: req.user.id,
        AnimalRegistration: req.user.id,
        TotalLactationMilkYield: req.body.TotalLactationMilkYield,
        DOD: req.body.DOD,
        MilkingDays: req.body.MilkingDays,
        GL: req.body.GL,
    });

    console.log(newMilkRecordingRegister)

    newMilkRecordingRegister.save()
        .then(ar => {
            console.log("new", ar)
            return res.json(ar)
        })
        .catch(err => { return res.status(400).json(err) });
});


// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        MilkRecordingRegister.findById(req.params.id)
            .then(post => {
                // Check for post owner
                if (post.user.toString() !== req.user.id.toSteing()) {
                    return res
                        .status(401)
                        .json({ notauthorized: 'User not authorized' });
                }
                // Delete
                post.remove().then(() => res.json({ success: true }));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
);


module.exports = router;