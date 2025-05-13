const express = require("express");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First Name must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last Name must be at least 3 characters long"],
        },
    },
    image:{
        type: String,
        optional: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be at least 3 characters long'],
            
        },
        type:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'Capacity must be at least 1'],
        },
    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        },
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
};
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;
