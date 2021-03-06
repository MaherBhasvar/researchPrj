const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
const validateCalvingRegister = require('../../validation/calvingRegister');

//Load Schema
const CalvingRegister = require('../../models/CalvingRegister');

router.get('/test', (req, res) => res.json({ msg: "Calving Register Works" }));


//@route        GET api/calvingRegister/dashboard
//@description  GET data
//@access       Private

router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
    CalvingRegister.find()
        .then(all => { return res.json(all) })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});







//@route        POST api/calvingRegister
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCalvingRegister(req.body);
    console.log("errors in animal register", errors, isValid);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newCalvingRegister = new CalvingRegister({
        user: req.user.id,
        AnimalRegistration: req.user.id,
        DateOfCalving: req.body.DateOfCalving,
        EaseOfCalving: req.body.EaseOfCalving,
        TypeOfCalving: req.body.TypeOfCalving,
        CalfSex: req.body.CalfSex,
        CongDefect: req.body.CongDefect,
        CalfTagNo: req.body.CalfTagNo,
        Remarks: req.body.Remarks,
    });

    console.log(newCalvingRegister)

    newCalvingRegister.save()
        .then(ar => {
            console.log("new", newCalvingRegister)
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

        CalvingRegister.findById(req.params.id)
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