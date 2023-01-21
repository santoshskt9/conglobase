const APIRouter = require("express").Router();
const { createContact, createAbout, createService, createSubscribe } = require("./controller");

APIRouter.post("/contact", createContact);
APIRouter.post("/about", createAbout);
APIRouter.post("/service", createService);
APIRouter.post("/subscribe", createSubscribe);

module.exports = APIRouter;
