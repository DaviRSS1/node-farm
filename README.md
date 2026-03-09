# 🌾 Node Farm

**Node Farm** is a simple **Node.js backend project built for learning purposes**, created while studying core Node.js concepts without frameworks.

The project simulates a **farm product website**, where product data is loaded from JSON files and rendered dynamically using HTML templates.

This project focuses on understanding **how Node.js works under the hood**, including routing, modules, file system operations, and template rendering without using Express or other libraries.

---

## 🌐 Live Demo

👉 https://node-farm-production.up.railway.app/

---

## 🚀 Features

### 🌽 Product Listing

* Displays a list of farm products
* Data loaded from a JSON file
* Dynamic HTML generation using templates

### 🥑 Product Details Page

* Each product has its own page
* Data passed through URL parameters
* Template placeholders replaced dynamically

### 🧩 Template Rendering

* HTML templates are loaded from files
* Template placeholders are replaced using JavaScript
* Dynamic content generation without a template engine

### 🔀 Basic Routing

* Simple routing built using Node's **http module**
* Different routes handled manually:

  * `/` or `/overview`
  * `/product`
  * `/api`

### 📦 API Endpoint

* JSON API that returns all product data
* Accessible through `/api`

### 📁 File System Operations

* Read HTML templates using **fs module**
* Load product data from JSON file
* Demonstrates synchronous and asynchronous file reading

---

## 🧠 Concepts Practiced

This project was built to understand **core Node.js fundamentals** before using frameworks like Express.

Concepts covered include:

* Running JavaScript outside the browser
* Node.js core modules
* Creating a basic HTTP server
* Manual routing
* Reading files using the **fs module**
* Understanding **blocking vs non-blocking code**
* Using **asynchronous operations**
* URL parsing
* Creating and using **custom modules**

---

## 🛠️ Built With

* Node.js
* JavaScript

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone https://github.com/DaviRSS1/node-farm.git
```

Enter the project folder:

```bash
cd node-farm
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Open in your browser:

```
http://localhost:8000
```

---

## 🎯 Purpose of the Project

This project was created as the **first hands-on Node.js project**, with the goal of understanding how backend servers work without frameworks.

The main focus was learning:

* How Node.js handles HTTP requests
* File system operations
* Manual routing
* Server-side HTML rendering
* Core Node.js modules
* Basic backend architecture

It serves as a **foundation before moving to Express and full backend frameworks**.

---

## 👤 Author

Developed by **Davi Reghim**

🔗 LinkedIn
https://www.linkedin.com/in/davi-reghim-13b995272/

💻 GitHub
https://github.com/DaviRSS1
