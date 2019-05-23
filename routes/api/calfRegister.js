const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
const validateCalfRegister = require('../../validation/calfRegister');

//Load Schema
const CalfRegister = require('../../models/CalfRegister');

router.get('/test', (req, res) => res.json({ msg: "Calf Registration Works" }));


//@route        GET api/calfRegister/dashboard
//@description  GET data
//@access       Private

router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
    CalfRegister.find()
        .then(all => { return res.json(all) })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});


//@route        POST api/calfRegister
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCalfRegister(req.body);
    console.log("errors in animal register", errors, isValid);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newCalfRegister = new CalfRegister({

    });

    console.log(newCalfRegister)

    newCalfRegister.save()
        .then(ar => {
            console.log("new", newCalfRegister)
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

        CalfRegister.findById(req.params.id)
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