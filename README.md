## 🚀 Simple Mongoose CRUD App

This is a basic Node.js app that performs **Create, Read, Update, and Delete** operations using **MongoDB** and **Mongoose**.

---

### 📁 Folder Structure

```
mongoose-crud-app/
│
├── config/            # Database connection
│   └── database.js
│
├── models/            # Mongoose schema
│   └── emp.js
│
├── app.js             # Main CRUD logic
├── .env               # MongoDB URI
├── package.json       # Dependencies
└── node_modules/      # Installed packages
```

---

### 🔧 Setup

1. **Install dependencies**

```bash
npm install mongoose dotenv
```

2. **Create `.env` file**

```
MONGO_URI=mongodb://localhost:27017/empdb
```

3. **Run the app**

```bash
node app.js
```

---

### 📌 Features

* ✅ Create Employee
* 📋 Read All Employees
* ✏️ Update Employee by ID
* 🗑️ Delete Employee by ID

---

Let me know if you want to convert this into an Express API version too!
