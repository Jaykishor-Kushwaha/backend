const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");
require("dotenv").config();

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here
const MONGO_URI =
  "mongodb+srv://rock1624gg:ZjRJV6sl6lOWv71s@cluster0.qeden.mongodb.net/";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
  });

// mongoose
//   .connect(
//     "mongodb+srv://sangammukherjee2022:sangammukherjee2024@cluster0.cz04e.mongodb.net/"
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "Cache-Control",
//       "Expires",
//       "Pragma",
//     ],
//     credentials: true,
//   })
// );
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        // !origin check is to allow non-browser requests (like Postman)
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
