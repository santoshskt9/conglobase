const categoryModel = require("../models/category.model");
const serviceModel = require("../models/service.model");
const { createContact, createCategory } = require("./controller");

const Router = require("express").Router();


Router.get("/", async (req, res) => {
  const categories = await categoryModel.find();
  res.render("index", {categories});
});
Router.get("/about", (req, res) => {
  res.render("about-us");
});
Router.get("/contact", (req, res) => {
  res.render("contact", {
    message: "Contact Me Here",
  });
});
Router.get("/services", async (req, res) => {
  const services = await serviceModel.find().populate('category').exec(function (err, services) {
    if (err) return console.log(err);
    console.log(services);
  });
  console.log("Services: ", services);
  res.render("services2", {services});
});
Router.get("/services/:service", (req, res) => {
  res.render("service-detail", {});
});
Router.get("/service-design", (req, res) => {
  res.render("services/service-design", {});
});
Router.get("/portfolios", (req, res) => {
  res.render("portfolio", {});
});
Router.get("/portfolios/:portfolio", (req, res) => {
  res.render("portfolio-detail", {});
});
Router.get("/blogs", (req, res) => {
  res.render("blog", {});
});
Router.get("/blogs/:blog", (req, res) => {
  res.render("blog-detail", {});
});
Router.get("/pricing", (req, res) => {
  res.render("pricing", {});
});


Router.post("/contact", createContact);
Router.post("/category", createCategory);

module.exports = Router;
