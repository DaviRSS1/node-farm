const fs = require("fs");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");
const express = require("express");

const app = express();

///////////////////////
// FILES

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8",
);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8",
);

const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8",
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

///////////////////////
// ROUTES

// overview
app.get(["/", "/overview"], (req, res) => {
  const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join("");

  const output = tempOverview.replace("%%%PRODUCTCARDS%%%", cardsHtml);

  res.status(200).send(output);
});

// product
app.get("/product", (req, res) => {
  const product = dataObj[req.query.id];
  const output = replaceTemplate(tempProduct, product);

  res.status(200).send(output);
});

// api
app.get("/api", (req, res) => {
  res.json(dataObj);
});

// 404
app.use((req, res) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

///////////////////////
// SERVER

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
