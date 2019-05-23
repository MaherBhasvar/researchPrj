const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
const validateAminalInsemination = require('../../validation/animalInsemination');

//Load Schema
const AnimalInsemination = require('../../models/AnimalInsemination');

router.get('/test', (req, res) => res.json({ msg: "Animal Insemination Works" }));


//@route        GET api/animalInsemination/dashboard
//@description  GET data
//@access       Private

router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
    AnimalInsemination.find()
        .then(all => { return res.json(all) })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});







//@route        POST api/animalInsemination
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateAminalInsemination(req.body);
    console.log("errors in animal insemination", errors, isValid);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    console.log("*****************************this is request.user object", req.user);
    console.log("*****************************this is request.user object");

    const newAnimalInsemination = new AnimalInsemination({
        user: req.user.id,
        AnimalRegistration: req.user.id,
        DateOfAI: req.body.DateOfAI,
        BullNo: req.body.BullNo,
        NumberOfAIService: req.body.NumberOfAIService,
        DateOfPD: req.body.DateOfPD,
        PD: req.body.PD,
        ExpectedCalvingDate: req.body.ExpectedCalvingDate,
    });

    console.log(newAnimalInsemination)

    newAnimalInsemination.save()
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

        AnimalInsemination.findById(req.params.id)
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