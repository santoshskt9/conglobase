const categoryModel = require("../models/category.model");
const serviceModel = require("../models/service.model");
const { createContact, createCategory, createSubscribe } = require("./controller");
const Router = require("express").Router();

let categories = {};
let services = {};
async function LoadData() {
  categories = await categoryModel.find().populate({ path: 'services', });
  services = await serviceModel.find();
}

Router.get("/", async (req, res) => {
  // const categories = await categoryModel.find();
  // const services = await serviceModel.find();
  // console.log("services", services);
  res.render("index", { categories, services });
});
Router.get("/about", (req, res) => {
  res.render("about-us", { categories, services });
});
Router.get("/contact", (req, res) => {
  res.render("contact", {
    message: "Contact Me Here",
    categories,
  });
});
Router.get("/services", async (req, res) => {

  // const services = await serviceModel.find().populate('category').exec(function (err, services) {
  //   if (err) return console.log(err);
  //   console.log(services);
  // });

  const categories = await categoryModel.find().populate({ path: 'services', });
  // console.log("Services: ", categories);
  res.render("services2", { categories, services });
});
Router.get("/services/:service", async (req, res) => {
  const serviceDetails = await serviceModel.findOne({ slug: req.params.service }).populate({ path: 'category' });
  // console.log("Single Service: ", serviceDetails);
  res.render("service-detail", { categories, services, serviceDetails });
});
Router.get("/service-design", (req, res) => {
  res.render("services/service-design", { categories, services });
});
Router.get("/portfolios", (req, res) => {
  res.render("portfolio", { categories, services });
});
Router.get("/portfolios/:portfolio", (req, res) => {
  res.render("portfolio-detail", { categories, services });
});
Router.get("/blogs", (req, res) => {
  res.render("blog", { categories, services });
});
Router.get("/blogs/:blog", (req, res) => {
  res.render("blog-detail", { categories, services });
});
Router.get("/pricing", (req, res) => {
  res.render("pricing", { categories, services });
});

Router.get("/thanks", (req, res) => {
  res.render("thankyou", {categories, services});
})

Router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", {categories, services});
})
Router.get("/terms-and-conditions", (req, res) => {
  res.render("terms-and-conditions", {categories, services});
})
Router.get("/careers", (req, res) => {
  res.render("careers", {categories, services});
})
Router.get("/media", (req, res) => {
  res.render("press", {categories, services});
})


Router.post("/contact", createContact);
Router.post("/category", createCategory);
Router.post("/subscribe", createSubscribe);

module.exports = Router;
module.exports.LoadData = LoadData;

