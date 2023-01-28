const categoryModel = require("../models/category.model");
const serviceModel = require("../models/service.model");
const { createContact, createCategory } = require("./controller");

const Router = require("express").Router();
Router.get("/", async (req, res) => {
  const categories = await categoryModel.find();
  const services = await serviceModel.find();
  console.log("services", services);
  res.render("index", { categories, services });
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
  await categoryModel.find().then((categories) => {
    const data = categories.map(async (category) => {
      // console.log(category._id);
      await serviceModel.find({ category: category._id }).then((services) => {
        console.log({ ...category, services });
        return { ...category, services };
      });
    });
    return res.render("services", { data, categories });
  });
});
Router.get("/services/:service", (req, res) => {
  res.render("service-detail", {});
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
