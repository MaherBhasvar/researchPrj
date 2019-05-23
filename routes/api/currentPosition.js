const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
//const validateCurrentPosition = require('../../validation/currentPosition');

//Load Schema
const CurrentPosition = require('../../models/CurrentPosition');

router.get('/test', (req, res) => res.json({ msg: "Calf Registration Works" }));

//@route        POST api/currentPosition
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // no validation rrequired

    // const { errors, isValid } = validateCurrentPosition(req.body);
    // console.log("errors in animal register", errors, isValid);
    // //check validation
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const newObj = {
        user: req.body.user,
        DateOfEntry: Date.now(),
        AnimalRegistration: req.body.AnimalRegistration,
        AnimalInsemination: req.body.AnimalInsemination,
        CalvingRegister: req.body.CalvingRegister,
        MilkRecordingRegister: req.body.MilkRecordingRegister,
        CalfRegister: req.body.CalfRegister
    }
    console.log(newObj)

    // newCurrentPosition.save()
    //     .then(ar => {
    //         console.log("new", newCurrentPosition)
    //         return res.json(ar)
    //     })
    //     .catch(err => { return res.status(400).json(err) });
    CurrentPosition.findOneAndUpdate(
        { user: req.user.id },
        { $set: newObj },
        { new: true }
    ).then(current => {
        return res.json(current)
    })
        .catch(err => {
            return res.status(400).json(err);
        });
});

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        CurrentPosition.findById(req.params.id)
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