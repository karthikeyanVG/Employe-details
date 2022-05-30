const User = require('../model/EmployeeDetails.model')
const { to, ReE, ReS } = require("../services/util.service")


exports.register = (req, res) => {
    var body = req.body
    const userData = {
        name: body.name,
        fatherName: body.fatherName,
        motherName: body.motherName,
        email: body.email,
        phone: body.phone,
        address: body.address,
        city: body.city,
        qualification: body.qualification,
        experience: body.experience,
    };
    User.findOne({
        email: body.email
    })
        .then(user => {
            if (!user) {
                User.create(userData)
                    .then(user => {
                        ReS(res, { email: user.email + " is Registered!" });
                    })
                    .catch(err => {
                        ReE(res, err);
                    });

            } else {
                ReS(res, { message: "User already exists" });
            }
        })
        .catch(err => {
            ReE(res, err);
        });
};

exports.get_user = (req, res) => {
    var { id } = req.params
    User.findById({ _id: id })
        .then(user => {
            if (user) {
                ReS(res, user)
            } else {
                ReS(res, { message: "User does not exist" });
            }
        })
        .catch(err => {
            ReE(res, err)
            console.log(err);
        });
};

exports.get_all = (req, res) => {

    User.find({})
        .then((data) => {
            ReS(res, data)
        }).catch((error) => {
            console.log(error)
        })
}


exports.update = (req, res) => {
    var body = req.body
    var id = req.params
    User.updateOne({ id }, { $set: req.body })
        .then(docs => {
            res.status(200).json({
                message: "Update successfully",
                Update_Data: docs
            });
        })
        .catch(err => {
            res.status(402).json({
                error: err
            });
        });
}

exports.deleteOne = async (req, res) => {

    try {
        const { id } = req.params;

        const deletuser = await User.findByIdAndDelete({ _id: id })
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
}



