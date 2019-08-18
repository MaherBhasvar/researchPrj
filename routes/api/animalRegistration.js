const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Validation
const validateAminalRegistration = require('../../validation/animalRegistration');

//Load Schema
const AnimalRegistration = require('../../models/AnimalRegistration');
//Load User model
const User = require('../../models/User');
router.get('/test', (req, res) => res.json({ msg: "Animal Registration Works" }));


//@route        GET api/animalRegistration/dashboard
//@description  GET data
//@access       Private
router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
    AnimalRegistration.find()
        .then(all => {
            return res.json(all);
        })
        .catch(err => { console.log("Error 23", err); return res.status(400).json(err) })
});






//@route        POST api/animalRegistration
//@description  Post data
//@access       Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateAminalRegistration(req.body);
    console.log("errors in animal register", errors, isValid);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    console.log("*****************************this is request.user object", req.user);
    console.log("*****************************this is request.user object");
    const newAnimalRegistration = new AnimalRegistration({
        // Centre: req.body.Centre,
        // FarmerName: req.body.FarmerName,
        // MobileNo: req.body.MobileNo,
        // Village: req.body.Village,
        CowTagNo: req.body.CowTagNo,
        Gender: req.body.Gender,
        Species: req.body.Species,
        Breed: req.body.Breed,
        Age: req.body.Age,
        DateOfBirth: req.body.DateOfBirth,

        ReceiptNumber: req.body.ReceiptNumber,
        RegistrationCharges: req.body.RegistrationCharges,
        BloodLevel: req.body.BloodLevel,
        SireID: req.body.SireID,
        SireSireID: req.body.SireSireID,
        DamID: req.body.DamID,
        // SurveyPickYield: req.body.SurveyPickYield,
        // MDPH: req.body.MDPH,
        // LactationNo: req.body.LactationNo,
    });

    console.log(newAnimalRegistration)

    newAnimalRegistration.save()
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
        AnimalRegistration.findById(req.params.id)
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