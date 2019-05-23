const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


//Load Input Validation
const validateLoginInput = require('../../validation/login');

//Load User model
const User = require('../../models/User');


//@route        GET api/users/test
//@description  Tests post route
//@access       Public

router.get('/test', (req, res) => res.json({ msg: "Users Works" }));


//@route        POST api/users/login
//@description  Login User / Return JWT Token
//@access       Public

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    console.log("*****************************this is request object", req.user);
    const email = req.body.email;
    const password = req.body.password;


    // Find the user by email
    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = "User Not Fonud";
                return res.status(404).json(errors);
            }

            //check password user.password is the hash password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //res.json({msg: "Success"});

                        //User Matched Creating Payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            isAdmin: user.isAdmin,
                        };

                        //Signed Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token,
                                });
                            });

                    } else {
                        errors.password = "Password Incorrect";
                        return res.status(400).json(errors);
                    }
                }).catch(err => { console.log("Error"); res.status(400).json(err) });;
        }).catch(err => { console.log("Error"); res.status(400).json(err) });;
});


//@route        POST api/users/register
//@description  Tests post route
//@access       Public

router.post('/register', (req, res) => {

    //const {errors, isValid} = validateRegisterInput(req.body);

    //check validation
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    //add validation where ever req.body is seen

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "Email already exists";
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });


                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        //console.log(newUser);
                        newUser.save()
                            .then(user => {
                                const setCurrentPosition = new CurrentPosition({
                                    user: user._id,
                                    AnimalRegistration: null,
                                    AnimalInsemination: null,
                                    CalfRegister: null,
                                    CalvingRegister: null,
                                    MilkRecordingRegister: null,
                                });
                                setCurrentPosition.save()
                                    .then(position => console.log("********This is current Position", position))
                                    .catch(err => { console.log("Error"); return res.status(400).json(err) });
                                return res.json(user);
                            })
                            .catch(err => { console.log("Error"); return res.status(400).json(err) });
                    });
                });
            }
        }).catch(err => { console.log("Error"); return res.status(400).json(err) });

});


//@route        POST api/users/update
//@description  Update Current User
//@access       Private

// router.post('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
//     User.findOneAndUpdate({ _id = req.user.id }, { $set: profileFields }, { new: true })
//         .then(user => {
//             return res.json(user)
//         })
//         .catch(err => {
//             console.log(err);
//             return res.status(404).json(err)
//         })
// })

module.exports = router;