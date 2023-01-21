const router = require("express").Router();
const mongoose = require("mongoose");
const contactModel = require("../models/contact.model");
const aboutModel = require("../models/about.model");

const createContact = async (req, res) => {
    // populating the model
    const contact = new contactModel(req.body);
    contact
        .save()
        .then((docs) => {
            // sending response with auth token
            res.json(docs);
        })
        .catch(({ errors }) => {
            let errKey = Object.keys(errors)[0];
            if (errKey) {
                return res.status(409).json({
                    error: errors[errKey].properties.message,
                    errorField: errors[errKey].properties.path,
                });
            } else {
                return res.sendStatus(400);
            }
        });
};

const createAbout = async (req, res) => {
    // populating the model
    const about = new aboutModel(req.body);
    about
        .save()
        .then((docs) => {
            // sending response with auth token
            res.json(docs);
        })
        .catch(({ errors }) => {
            let errKey = Object.keys(errors)[0];
            if (errKey) {
                return res.status(409).json({
                    error: errors[errKey].properties.message,
                    errorField: errors[errKey].properties.path,
                });
            } else {
                return res.sendStatus(400);
            }
        });
};

const createService = async (req, res) => {
    // populating the model
    const service = new serviceModel(req.body);
    service
        .save()
        .then((docs) => {
            // sending response with auth token
            res.json(docs);
        })
        .catch(({ errors }) => {
            let errKey = Object.keys(errors)[0];
            if (errKey) {
                return res.status(409).json({
                    error: errors[errKey].properties.message,
                    errorField: errors[errKey].properties.path,
                });
            } else {
                return res.sendStatus(400);
            }
        });
};

const createSubscribe = async (req, res) => {
    // populating the model
    const subscribe = new subscribeModel(req.body);
    subscribe
        .save()
        .then((docs) => {
            // sending response with auth token
            res.json(docs);
        })
        .catch(({ errors }) => {
            let errKey = Object.keys(errors)[0];
            if (errKey) {
                return res.status(409).json({
                    error: errors[errKey].properties.message,
                    errorField: errors[errKey].properties.path,
                });
            } else {
                return res.sendStatus(400);
            }
        });
};

module.exports = {
    createContact,
    createAbout,
    createService,
    createSubscribe,
}