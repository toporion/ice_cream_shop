const UserModel = require("../models/UserModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(403).json({ success: false, message: "User already exist" })
        }

        const profileImage = req.file ? req.file.path : null;
        const hashedPassword = await bcrypt.hash(String(password), 10)
        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
            profileImage
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message: "Successfully create user",
            data: newUser
        })
    } catch (error) {
        console.log('see the error', error)
        res.status(500).json({
            success: true, message: "internal server error"
        })
    }
}
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(403).json({
                success: false, message: "user not exist"
            })
        }
        const isMatched = await bcrypt.compare(String(password), user.password)
        if (!isMatched) {
            res.status(403).json({ success: false, message: "password not matched" })
        }
        const jwtToken = jwt.sign({
            id: user._id,
            role: user.role,
            email: user.email,
            profileImage: user.profileImage
        })
        res.status(200).json({
            success:true,
            jwtToken,
            user:{
                id:user._id,
                role:user.role,
                email:user.email,
                profileImage:user.profileImage
            }
        })
    } catch (error) {
        console.log('see the error', error)
        res.status(500).json({
            success: true, message: "internal server error"
        })
    }
}
module.exports = { createUser }